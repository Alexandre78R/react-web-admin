//Import de React
import React from 'react';

//Import de la liste composent de reactstrap
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Input,
  Alert,
  Form,
  FormGroup,
} from 'reactstrap';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent circlePiker de react-color
import { CirclePicker } from 'react-color';

//Import du composent API Backend
import ApiBackend from '../../utils/ApiBackend.js';

import fonction from '../../utils/Function.js'

class NoteDel extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      props : props,
      position : "",
      title : "",
      color : "",
      note : "",
      date : "",
      temps : "",
      modalEdit : false,
      alertBgEditRed : false,
      alertText : "",
      progressBar : false,
    };
  }

  //Fonction quand on veut modifier une note
  handleSubmitEdit = () => {
  
    console.log("Props NoteEdit -->", this.state.props)

    //On met à jour les information des states
    this.setState({
      position : this.state.props.position,
      title : this.state.props.title,
      color : this.state.props.color,
      note : this.state.props.note,
      date : this.state.props.date,
      temps : this.state.props.temps,
    })

    //Overture de la modal Edition
    this.toggleEdit()
  }

  //Fonction pour fermer ou ouvrir le modal
  toggleEdit = () => {
    console.log("tile toggleEdit", this.state)
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }

  //Function pour metre la coleur à jour dans le state.
  handleChangeColor = (color) => {
    // console.log("color",color.hex)
    this.setState({ color: color.hex });
  };

  //Function Cancel la modal de l'éditation sans rien modifier.
  handleSubmitErrorEdit = () => {
    this.setState({
      position : "",
      title : "",
      color : "",
      note : "",
      date : "",
      temps : "",
      modalEdit : false,
      alertBgEditRed : false,
      alertText : "",
      progressBar : false,
    });
  }

  //Fonction qui s'applique quand on veut validé la modification de la note.
  handleSubmitAddEdit = () => {
  
    // S'il y n'a pas titre dans le champs on affiche un message d'erreur.
    if(this.state.title == ""){
      this.setState({
        alertBgEditRed: true,
        alertText: "Vous n'avez pas remplie le champ titre.",
      });
    
    // S'il y n'a pas note dans le champs on affiche un message d'erreur.      
    }else if(this.state.note == ""){
      this.setState({
        alertBgEditRed : true,
        alertText : "Vous n'avez pas remplie le champ note.",
      })
    
    // S'il le titre fait plus de caractère on affiche un message d'erreur.
    }else if(this.state.title.length >= 14){
      this.setState({
        alertBgEditRed : true,
        alertText : "Vous pouvez pas metre plus de 13 caractère pour le titre.",
      })

    //Si tous es ok on fait la modification.
    }else{ 
      //On stock this dans une variable
      var ctx = this;

      //On met ajour les stats pour affcher la progressBar.
      this.setState({
        date : fonction.addDate(),
        temps : fonction.addTemps(),
        alertBgEditRed : false,
        progressBar : true,
      })

      //Temps d'attente pour la proggresseBar.
      var tempsAttente =  1000;

      //Micro temps d'attente echainé les 2 fonctions de timer.
      var tempsChargement = 1;

      //Fonction timer pour afficher la progresseBar.
      fonction.barProgress(tempsAttente,tempsChargement)
      
      //Fonction timmer pour envoyer à Redux de la modification de la note.
      setTimeout(function() {

        //On récupère l'id de l'utulisateur avec lelocal Storage et on le stock dans une variable
        var idUser = localStorage.getItem('id')

        //On stock les données des stats dans la variable _send.
        var _send = {
          idUser: idUser,
          position : ctx.state.position,
          title: ctx.state.title,
          note: ctx.state.note,
          date : ctx.state.date,
          temps : ctx.state.temps,
          color : ctx.state.color,
        }

        console.log("send",_send)

        //Utulisation de note API pour envoyer vers le backend.
        ApiBackend.editNote(_send).then(function(data){
          console.log("Data :", data.data)
          //On envoie les infos dans redux
          //Envois à Redux  des infos dans les states.
          ctx.props.editNote(ctx.state.position, ctx.state.title, ctx.state.note, ctx.state.date, ctx.state.temps, ctx.state.color);
          
          //On vite les states juste après.
          ctx.setState({
            modalEdit : false,
            alertBgEditRed : false,
            alertText : "",
            title : "",
            note : "",
            date : "",
            temps : "",
            color : "",
            progressBar : false,

          });
        //En cas d'erreur un message s'affiche 
        },function(error){
            console.log("Error Add Note",error);
            ctx.setState({
              alertBgAddRed: true,
              alertText : "Problème interne, merci de réessayer plus tard !",
              progressBar : false,
            });
            return;
        })
      }, tempsAttente);
    }
  }

  render() {    
    return (
      <div>
        <span className="close" onClick= {() => this.handleSubmitEdit()}><i className="far fa-edit"></i></span>
        <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit} className={this.props.className}>
        <ModalHeader >Modifier la Note :</ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup>
              {/* Alert rouge avec le message en cas d'erreur. */}
              <Alert color="danger" isOpen={this.state.alertBgEditRed}>
              
              {/* Si la proggresseBarest est false on ne l'affiche pas. */}
              {this.state.alertText}
              </Alert>
              {this.state.progressBar === false 
              ?
              ""
              :
              <div id="myProgress">
                <div id="myBar">1%</div>
              </div>
              }
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Coleur :</Label>
            <CirclePicker
              color={ this.state.color }
              onChangeComplete={ this.handleChangeColor }
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleTime">Titre :</Label>
            <Input
              type="text"
              name="titre"
              id="exampletext"
              value={this.state.title}
              onChange={e=>this.setState({title:e.target.value})}
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Note :</Label>
          <Input type="textarea" name="note" id="exampleText2" value={this.state.note} onChange={e=>this.setState({note:e.target.value})}/>
        </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.handleSubmitAddEdit}>Ajouté</Button>{' '}
          <Button color="secondary" onClick={this.handleSubmitErrorEdit}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
}

//Fonction pour récupérer les notes dans Redux
function mapStateToProps(state) {
    // console.log("mapStateToProps", state.Users)
     return ({
      Users : state.Users,
      Notes : state.Notes,
   })
}
  
//Listes des fonction dispatch pour les messages
function mapDispatchToProps(dispatch) {
    return {
        //Modification de la noteavec la position.
        editNote(position, title ,note, date, temps, color){
            dispatch({
            type : 'editNote',
            position : position,
            title : title,
            note : note,
            date : date,
            temps : temps,
            color : color,
            })
        },
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(NoteDel);
//Import de React
import React from 'react';

//Import de la liste composent de reactstrap
import {
  Row,
  Container, 
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Input,
} from 'reactstrap';

//Import du composent NavBar
import NavBar from '../../Composent/NavBar'

//Import du composent SideBar
import SideBar from '../../Composent/SideBar';

//Import du composent Footer 
// import Footer from '../Composent/Footer';

//Import du composent Link de react-router-dom
// import { Link } from "react-router-dom";

//Import de React-draggable
import Draggable from 'react-draggable';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent Link de react-router-dom
import { Redirect } from "react-router-dom";

//Import du composent API
import API from '../../utils/API.js';

//Import du compoent NoteAdd
import NoteAdd from './NoteAdd.js'
class Note extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      //State du background de l'alert
      bgAlert: false,
      //State de l'erreur dans l'alert
      text : "",
      //State du background de l'alert Modal
      bgAlertModal: false,
      //State de l'erreur dans l'alert Modal
      textModal : "",
      //State Redirection
      redirect: false,
      //Stat du modal Add
      modalDel: false,
      //Stat de la position
      position : "",
      //Stat du titre
      title : "",
      //State affichage progresse bar
      progressBar : false,
    };
  }

  //Fonction d'affichage du modal delete
  toggleDel = () => {
    this.setState(prevState => ({
      modalDel: !prevState.modalDel,
      bgAlert: false,
      text : "",
      bgAlertModal: false,
      textModal : "",
      redirect: false,
      position : "",
      title : "",
      progressBar : false,
    }));
  }

  // Dés que la page charge on lient les notes dans les states pour les envoyer à Redux.
  componentWillMount = () =>{
    var ctx = this;
    //Vérif si la personne est bien connecté
    //Sinon sa active le state redirect true pour rediriger sur la page connexion
    if (ctx.props.Users.text === undefined){
      ctx.setState({
        modalDel: false,
        bgAlert: false,
        text : "",
        bgAlertModal: false,
        textModal : "",
        redirect: true,
        position : "",
        title : "",
        progressBar : false,
      });
    }
  }

  //! Les fonctions pour supprimer une note !

  handleSubmitDel = (position) => {
    //On stock les notes dans la variable
    var list = this.props.Notes

    //On boucle tous nos notes récupérer de Redux.
    for (var i = 0; i < list.length; i++) {
        // console.log("position", position)
        // console.log("title",(list[position].title))

        //On force pour la premère dans le tableau (donc 0) pour que la suppression marche bien.
        if (position === 0) {
          this.setState({
            position : position,
            title : list[position].title,
        })

      // Affiche supérieur à 0 dans le tableau.
      }else {
          this.setState({
            position : position,
            title : list[position].title,
        }) 
      }
    }

    //On applique la ouverture du modal avec la position.
    this.toggleDel(position)
  }
  
  //Fonction suppression de la note
  noteDel = () => {
      var ctx = this;

      //Changement des states surtout pour afficher la progresseBar.
      this.setState({
        bgAlertModal : false,
        progressBar : true,
      })

      //On stock le temps d'attente de la progresseBar
      var tempsAttente = 1500;

      // Mini décalage entre les 2 fonciton timmer pour bien qui prend en compte des states.
      var tempsChargement = 1;

      //Première fonction timer pour metre en place la progresseBar 
      setTimeout(function() {
        var elem = document.getElementById("myBar");  
        var width = 1;
        var id = setInterval(frame, (tempsAttente / (100 + tempsChargement) ));
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1  + '%';
          }
        }
      }, tempsChargement);

      setTimeout(function() {
      // Utulisation de note API pour envoyer vers le backend les informations du compte.
      API.delNote(ctx.props.Users.id, ctx.state.position)
      .then(function(data){
        console.log("Data Position", data.data.position)

        //On envois dans redux
        ctx.props.deleteNote(data.data.position)

        // On metà jour les states
        ctx.setState({
          modalDel : false,
        });
      },function(error){
        console.log("Error Del Note",error);
        ctx.setState({
          bgAlertModal: true,
          textModal : "Problème interne, merci de réessayer plus tard !",
          progressBar : false,
        });
      })
    }, tempsAttente);
  }

  //Function Cancel la modal de la suppression des notes.
  noteDelError = () => {
    this.setState({
      bgAlertModal : false,
      textModal : "",
      modalDel : false,
      position : "",
      title : "",
    });
  }

  //! Fin des fonctions pour supprimer la note !

     render() {

      const { redirect } = this.state;
      //Si le state redirect est true on le redirige sur la page connexion
      if (redirect === true) {
        return <Redirect to='/'/>;
      }
    //On stock les infos de redux (des notes) dans la variabe de notes_boucles
    var notes_boucle = this.props.Notes.map(
      (note, i) => {
        // console.log("note_boucle", note)
        return (
           <Draggable handle="strong">
            <div className="note no-cursor">
               <strong  className='note-topic cursor' style={{backgroundColor : note.color,}}>
                  {note.title}
                  <span className="close" onClick= {() => this.handleSubmitDel(i)}><i className="far fa-times-circle"></i></span>
               </strong>
               <div className="note-body">
                 <p>{note.note}</p>
               </div>
               <strong className="note-footer cursor" style={{backgroundColor : note.color,}}>
                 <div className="noteFooterText">{note.date} à {note.temps}</div>
               </strong>
           </div>
          </Draggable>
        )
      }
    );

    return (

      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid">
                <NoteAdd/>
              {/* S'il n'y a pas de note affiche "Vous n'avez pas de note". */}
              {
                this.props.Notes.length === 0 ?
                <Alert color="danger" className="bgAlert">
                  <p className = "textAlert"> Vous n'avez pas de note !</p>
                </Alert>
                 :
                <Row className="note-page">
                  {notes_boucle}
                </Row>

              } 
              {/* Modal suppression de la note */}
              <Modal isOpen={this.state.modalDel} toggle={this.toggleDel} className={this.props.className}>
                <ModalHeader toggle={this.toggleDel}>Suppresion de {this.state.title}</ModalHeader>
                <ModalBody>
                  {/* Alert rouge avec le message en cas d'erreur. */}
                  <Alert color="danger" isOpen={this.state.bgAlertModal}>
                  {/* Si la proggresseBarest est false on ne l'affiche pas. */}
                  {this.state.textModal}
                  </Alert>
                  {/* Si la proggresseBarest est false on ne l'affiche pas. */}
                  {this.state.progressBar === false 
                  ?
                  ""
                  :
                  <div id="myProgress">
                    <div id="myBar">1%</div>
                  </div>
                  }
                  Vous êtes sûr de supprimer la note " {this.state.title} " définitivement ?
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.noteDel}>Suprimé</Button>{' '}
                  <Button color="secondary" onClick={this.noteDelError}>Annulé</Button>
                </ModalFooter>
              </Modal>
             </Container>
             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}

//Fonction pour récupérer les notes dans Redux
function mapStateToProps(state) {
  // console.log("state", state.Users)
   return ({
    Notes : state.Notes,
    Users : state.Users,
 })
}

//Listes des fonction dispatch pour les messages
function mapDispatchToProps(dispatch) {
  return {
    // Récupération des infos de l'User
    deleteNote(position) { 
      dispatch({
      type: 'deleteNote',
      position : position,
    }) 
   },
  }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Note);
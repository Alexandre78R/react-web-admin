//Import de React
import React from 'react';

//Import de la liste composent de reactstrap
import {
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Input,
  Alert,
  Progress,
} from 'reactstrap';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent API
import API from '../../utils/API.js';

//Import du composent circlePiker de react-color
import { CirclePicker } from 'react-color';


class NoteAdd extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      //Stat du titre 
      title : "",
      //State de la coleur
      color : "",
      //State de la date
      date : "",
      //State du temps
      temps : "",
      //State de la note
      note : "",
      //Preview de la note création
      modal : false,
      //Alert erreur ajout note
      alertBgAddRed: false,
      //Text erreur ajotu de la note
      alertText: "",
      //State d'affichage de la progress bar
      progressBar : false,
      //State d'affichage UserId
      idUser : props.Users.id,
    };
  }
    //Fonction d'affichage du modal Ou de  la fermeture du modal
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            title : "",
            color : "#4caf50",
            date : "JJ/MM/YYYY",
            temps : "00h00",
            note : "",
            alertBgAddRed: false,
            alertText: "",
            progressBar : false,
        }));
    }

    //Function pour metre la coleur à jour dans le state.
    handleChangeColor = (color) => {
        // console.log("color",color.hex)
        this.setState({ color: color.hex });
    };
    
    //Fonction de récupération de la date du jour.
    addDate = () => {
        // console.log("addDate")
        var date = new Date();
        var message = "";
  
        //Condition pour ajouter un 0 quand t'es sous 10 (Comme pour la vraie date) du jour.
        if(date.getDate() < 10){
          message += "0" + date.getDate() + "/"
        }else{
          message += date.getDate() + "/"
        }
  
        //Condition pour ajouter un 0 quand t'es sous 10 (Comme pour la vraie date) du mois
        if(date.getMonth() <10){
          message += "0" + (date.getMonth() + 1) + "/";
        }else{
          message += (date.getMonth() + 1) + "/"
        }
  
        //Récupération de l'année actuelle.
        message += date.getFullYear() + " ";
        // console.log(message)
        
        //On met à jour le state de la date.
        this.setState({
          date : message,
        });
        // console.log("setStats (date)", this.state.date)
    }
    //Fonction de la récupération de l'heure et des minutes actuelle.
    addTemps = () => {
      // console.log("addTemps")
      var date = new Date();
      var message = "";
  
      //Condition pour ajouter un 0 quand t'es sous 10 (Comme pour la vraie heure)
      if(date.getHours() < 10){
        message += "0" + date.getHours() + "h";
      }else{
        message += date.getHours() + "h";
      }
  
      //Condition pour ajouter un 0 quand t'es sous 10 (Comme pour la vraie minutes)
      if(date.getMinutes() < 10){
      message += "0" + date.getMinutes();
      }else{
      message += date.getMinutes();
    }
      // console.log(message)
      
      //On met a jour du temps.
      this.setState({
        temps : message,
      })
      // console.log("setStats (temps)", this.state.temps)
    }

    //Function quand on déclanche pour ajouté une note.
    handleSubmitAddNote  = () => {
    // console.log("Click détecté")
    // console.log(this.state.title)

    //S'il n'y a pas de titre sélection on affiche un message d'erreur.
    if(this.state.title === ""){
        this.setState({
        alertBgAddRed: true,
        alertText: "Vous n'avez pas remplie le champ titre.",
        });

    //S'il n'y a pas de note sélection on affiche un message d'erreur.
    }else if(this.state.note === ""){
        this.setState({
        alertBgAddRed : true,
        alertText : "Vous n'avez pas remplie le champ note.",
        })
        
    //On limite le nombre de caractère pour le titre 13 + message d'erreur si c'est supérieure à 13.
    }else if(this.state.title.length >= 14){
        this.setState({
        alertBgAddRed : true,
        alertText : "Vous pouvez pas metre plus de 13 caractère pour le titre.",
        })

    //Si tous va bien on envois la note.
    }else{

        // Pour garder thix dans certaint cas.
        var ctx = this;

        //On lance le fonctionnement de la fonction date.
        this.addDate();

        //On lance le fonctionnement de la fonction de l'heure et des minutes.
        this.addTemps();

        //Changement des states surtout pour afficher la progresseBar.
        this.setState({
          alertBgAddRed : false,
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
        
        //Deuxième fonction timer  pour envoyé à Redux plus videz les states.
        setTimeout(function() {
        // console.log("Temps d'attente fini : " + Math.floor(millis/3000));
        console.log("IdUser", ctx.state.idUser)
        // console.log("Title", ctx.state.title)
        // console.log("Note", ctx.state.note)
        // console.log("Date", ctx.state.date)
        // console.log("Temps", ctx.state.temps)
        // console.log("Color", ctx.state.color)
        //On stock les données des stats dans la variable _send.
        var _send = {
          idUser: ctx.state.idUser,
          title: ctx.state.title,
          note: ctx.state.note,
          date : ctx.state.date,
          temps : ctx.state.temps,
          color : ctx.state.color,
        }
        console.log("send",_send)
        //Utulisation de note API pour envoyer vers le backend.
        API.addNote(_send).then(function(data){
          console.log("Data :", data.data)
          //On envoie les infos dans redux
          ctx.props.addNote(data.data.note.title, data.data.note.note, data.data.note.date, data.data.note.temps, data.data.note.color);
        
          ctx.setState({
            modal : false,
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
        <Button className = "note-button" color="success" onClick={this.toggle}>Ajouté une note</Button>
        {/* Modal ajout de la note */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Ajouter une note</ModalHeader>
            <ModalBody>
              {/* Alert rouge avec le message en cas d'erreur. */}
              <Alert color="danger" isOpen={this.state.alertBgAddRed}>
              
              {/* Si la proggresseBarest est false on ne l'affiche pas. */}
              {this.state.alertText}
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
              <Label className= "addNote">Créer votre note :</Label> <Label className= "addNotePreview">View de votre futur note :</Label>
              <Row className="noteAddRow">
                <div className="noteAdd no-cursor">
                    <Input type="textTitre" name="titre" id='note-topic'style={{backgroundColor : this.state.color}} placeholder="Taper votre titre" onChange={e=>this.setState({title:e.target.value})}/>
                <div className="note-body">
                    <Input type="textarea" name="note" id="exampleTextNoteADD"  placeholder="Taper votre note" onChange={e=>this.setState({note:e.target.value})}/>
                </div>
                <strong className="note-footer" style={{backgroundColor : this.state.color,}}>
                    <div className="noteFooterText">{this.state.date} à {this.state.temps}</div>
                </strong>
                </div>

                <div className="noteAddPreview no-cursor">
                <strong  className='note-topic' style={{backgroundColor : this.state.color}}>
                    {this.state.title}
                </strong>
                <div className="note-body">
                    {this.state.note}
                </div>
                <strong className="note-footer" style={{backgroundColor : this.state.color,}}>
                    <div className="noteFooterText">{this.state.date} à {this.state.temps}</div>
                </strong>
                </div>
              </Row>
              <Label className="noteAddTitleColor">Couleur :</Label>
              <CirclePicker
                  color={ this.state.color }
                  onChangeComplete={ this.handleChangeColor }
              />
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={this.handleSubmitAddNote}>Ajouté</Button>
                <Button color="secondary" onClick={this.toggle}>Annulé</Button>
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
 })
}

//Listes des fonction dispatch pour les messages
function mapDispatchToProps(dispatch) {
    return {
      // Récupération des infos de l'User
      addNote(title, note, date, temps, color) { 
        dispatch({
        type: 'addNote',
        title : title,
        note : note,
        date : date,
        temps : temps,
        color : color,
      }) 
     },
    }
   }
 export default connect(mapStateToProps, mapDispatchToProps)(NoteAdd);
//Import de React
import React from 'react';

//Import de la liste composent de reactstrap
import {
  Row,
  Container, 
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Alert,
} from 'reactstrap';

//Import du composent NavBar
import NavBar from '../Composent/NavBar'

//Import du composent SideBar
import SideBar from '../Composent/SideBar';

//Import du composent Footer 
// import Footer from '../Composent/Footer';

//Import du composent Link de react-router-dom
// import { Link } from "react-router-dom";

//Import de React-draggable
import Draggable from 'react-draggable';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent circlePiker de react-color
import { CirclePicker } from 'react-color';

//Import du composent Link de react-router-dom
import { Redirect } from "react-router-dom";

class Note extends React.Component {
  
  constructor(props) {
    super(props);

    //On bind les functions pour les utilisés partout avec this.
    this.handleSubmitAddNote = this.handleSubmitAddNote.bind(this);
    this.handleSubmitErrorAdd = this.handleSubmitErrorAdd.bind(this);
    this.handleSubmitErrorEdit = this.handleSubmitErrorEdit.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleSubmitAddEdit = this.handleSubmitAddEdit.bind(this);
    this.addDate = this.addDate.bind(this);
    this.addTemps = this.addTemps.bind(this);  
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    
    this.state = {
      //Stat du modal Add
      modalAdd: false,
      //State du modal Edit
      modalEdit : false,
      //State des Notes
      notes : [
        {title: "Project1", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#f44336"},
        {title: "Project2", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#4caf50"},
        {title: "Project3", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#3f51b5"},
        {title: "Project4", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#607d8b"},
        {title: "Project5", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#cddc39"},
        {title: "Project6", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#ffc107"},
        {title: "Project7", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#ff5722"},
        {title: "Project8", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#ffeb3b"},
        {title: "Project9", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#00bcd4"},
        {title: "Project10", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "#673ab7"},
      
      ],
      //State de la position de la note.
      position : 0,
      //State du titre de la note.
      title : "",
      //State de la note de la note.
      note : "",
      //Sttate de l'alert background ajout de note qui a faille.
      alertBgAddRed : false,
      //Sttate de l'alert background editation de note qui a faille.
      alertBgEditRed : false,
      //State affichage de la bar quand tous est bon pour validé.
      progressBar : false,
      // State stockage des messages d'erreur.
      alertText : "",
      //State de la date pour la note.
      date : "",
      //State du temps pour la note.
      temps : "",
      //State de la couleur pour la note.
      color : "",
      //State Redirection
      redirect: false,
    };
  }

  //Fonction du contraire quand on veut afficher ou retiré de la modal ajout.
  toggleAdd() {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }

  //Fonction du contraire quand on veut afficher ou retiré de la modal éditation.
  toggleEdit() {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }

  // Dés que la page charge on lient les notes dans les states pour les envoyer à Redux.
  componentWillMount(){
      var ctx = this;
      //Vérif si la personne est bien connecté
      if (ctx.props.Users.text === undefined){
        ctx.setState({
          bgAlert: false,
          text : "",
          redirect : true,
        });
      }
    
     this.state.notes.map(
         (note, i) => {
            this.props.addNote(note.title, note.note, note.date, note.temps, note.color)
         }
       );
     // return message_boucle;
     }

     //Fonction de récupération de la date du jour.
    addDate(){
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
  addTemps(){
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
   
  //Function pour metre la coleur à jour dans le state.
  handleChangeColor = (color) => {
    // console.log("color",color.hex)
    this.setState({ color: color.hex });
  };

  //Function quand on déclanche pour ajouté une note.
  handleSubmitAddNote(){
      // console.log("Click détecté")
      // console.log(this.state.title)
      
      //S'il n'y a pas de couleur sélection on affiche un message d'erreur.
      if(this.state.color === ""){
        this.setState({
          alertBgAddRed: true,
          alertText: "Vous n'avez pas choisis la couleur.",
        });

      //S'il n'y a pas de titre sélection on affiche un message d'erreur.
      }else if(this.state.title === ""){
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

        // console.log("Début du timer...");

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
          ctx.props.addNote(ctx.state.title, ctx.state.note, ctx.state.date, ctx.state.temps, ctx.state.color);
          ctx.setState({
            modalAdd : false,
            alertBgAddRed : false,
            alertText : "",
            title : "",
            note : "",
            date : "",
            temps : "",
            color : "",
            progressBar : false,
          });
        }, tempsAttente);
      }
    }

  //Fonction vider les stats dans quitte le modal sans enregistrer la nouvelle note.
  handleSubmitErrorAdd(){
    this.setState({
      modalAdd : false,
      alertBgAddRed : false,
      alertText : "",
      title : "",
      note : "",
      date : "",
      temps : "",
      color : "",
      progressBar : false,
    });
  }

  //Fonction quand on veut modifier une note précis avec la postion.
  handleSubmitEdit(position) {

      var list = this.props.Notes

      //On boucle tous nos notes récupérer de Redux.
      for (var i = 0; i < list.length; i++) {
        // console.log("title",(list[position].title))
        // console.log("note", (list[position].note))
        
        //On force pour la premère dans le tableau (donc 0) pour que l'éditable marche bien.
        if (position === 0) {
            this.setState({
              position : position,
              title : list[position].title,
              note : list[position].note,
              color : list[position].color,
          })

        // Affiche supérieur à 0 dans le tableau.
        }else {
            this.setState({
              position : position,
              title : list[position].title,
              note : list[position].note,
              color : list[position].color,
          }) 
        }
      }

      //On applique la ouverture du modal avec la position.
      this.toggleEdit(position)
    }

    //Fonction qui s'applique quand on veut validé la modification de la note.
    handleSubmitAddEdit() {
      // console.log("Click Détecté")

      // S'il y n'a pas titre dans le champs on affiche un message d'erreur.
      if(this.state.title === ""){
        this.setState({
          alertBgEditRed: true,
          alertText: "Vous n'avez pas remplie le champ titre.",
        });
      
      // S'il y n'a pas note dans le champs on affiche un message d'erreur.      
      }else if(this.state.note === ""){
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

        //Démarage de la récupération Date.
        this.addDate();

        //Démmarage de la récupération de l'heure et des minutes.
        this.addTemps();

        // console.log("Début du timer...");

        //On met ajour les stats pour affcher la progressBar.
        this.setState({
          alertBgEditRed : false,
          progressBar : true,
        })

        //Temps d'attente pour la proggresseBar.
        var tempsAttente =  1000;

        //Micro temps d'attente echainé les 2 fonctions de timer.
        var tempsChargement = 1;

        //Fonction timer pour afficher la progresseBar.
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
        
        //Fonction timmer pour envoyer à Redux de la modification de la note.
        setTimeout(function() {
          // console.log("Temps d'attente fini : " + Math.floor(millis/3000))
          
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
        }, tempsAttente);
      }
    }
    
    //Function Cancel la modal de l'éditation sans rien modifier.
    handleSubmitErrorEdit(){
      this.setState({
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
    }

     render() {

      const { redirect } = this.state;

      if (redirect === true) {
        return <Redirect to='/'/>;
      }

    //On stock les infos de redux (des notes) dans la variabe de notes_boucles
    var notes_boucle = this.props.Notes.map(
      (note, i) => {
        return (
           <Draggable handle="strong">
            <div className="note no-cursor">
               <strong  className='note-topic cursor' style={{backgroundColor : note.color,}}>
                   {note.title}
                   <span className="close" onClick= {() => this.props.deleteNote(i)}><i className="far fa-times-circle"></i></span>
                   <span className="close" onClick= {() => this.handleSubmitEdit(i)}><i className="far fa-edit"></i></span>
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
              <Button className = "note-button" color="success" onClick={this.toggleAdd}>Ajouté une note</Button>
            
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

               {/* Modal de l'ajout de note  */}
               <Modal isOpen={this.state.modalAdd} toggle={this.toggleAdd} className={this.props.className}>
                  <ModalHeader>Ajouté une note :</ModalHeader>
                  <ModalBody>
                   <Form>
                    <FormGroup>
                      {/* Alert rouge avec le message en cas d'erreur. */}
                      <Alert color="danger" isOpen={this.state.alertBgAddRed}>
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
                          name="text"
                          id="exampletext"
                          onChange={e=>this.setState({title:e.target.value})}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleText">Note :</Label>
                        <Input type="textarea" name="note" id="exampleText2" onChange={e=>this.setState({note:e.target.value})}/>
                      </FormGroup>
                   </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.handleSubmitAddNote}>Ajouté</Button>{' '}
                    <Button color="secondary" onClick={this.handleSubmitErrorAdd}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                
                {/* Modal de l'editation de note  */}
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
             </Container>
             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}

//Fonction pour récupérer les notes dans Redux
function mapStateToProps(state) {
  console.log("state", state)
   return ({
    Notes: state.Notes,
    Users : state.Users,
 })
}

  //Listes des fonction dispatch pour les notes.
 function mapDispatchToProps(dispatch) {
  return {
    //Ajout d'une note et l'affichage.
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
   //Suppression de la note avec la position.
    deleteNote(position) { 
      dispatch({
        type: 'deleteNote',
        position : position,
      }) 
    },
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
 export default connect(mapStateToProps, mapDispatchToProps)(Note);
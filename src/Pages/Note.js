//Import de React
import React from 'react';

//Import de la liste composent de reactstrap
import {
  Row,
  Container, 
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

// //Import du composent circlePiker de react-color
// import { CirclePicker } from 'react-color';

//Import du composent Link de react-router-dom
import { Redirect } from "react-router-dom";

class Note extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      //Stat du modal Add
      modalAdd: false,
      //State du modal Edit
      modalEdit : false,
      //State des Notes
      notes : [],
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
      //Sinon sa acative le state redirect true pour rediriger sur la page connexion
      if (ctx.props.Users.text === undefined){
        ctx.setState({
          bgAlert: false,
          text : "",
          redirect : true,
        });
      }
  }

     render() {

      const { redirect } = this.state;
      //Si le state redirect est true on le redirige sur la page connexion
      if (redirect === true) {
        return <Redirect to='/'/>;
      }

    //On stock les infos de redux (des notes) dans la variabe de notes_boucles
    var notes_boucle = this.props.Notes.notes.map(
      (note, i) => {
        return (
           <Draggable handle="strong">
            <div className="note no-cursor">
               <strong  className='note-topic cursor' style={{backgroundColor : note.color,}}>
                   {note.title}
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

              {/* S'il n'y a pas de note affiche "Vous n'avez pas de note". */}
              {
                this.props.Notes.notes.length === 0 ?
                <Alert color="danger" className="bgAlert">
                  <p className = "textAlert"> Vous n'avez pas de note !</p>
                </Alert>
                 :
               <Row className="note-page">
                 {notes_boucle}
               </Row>
              }
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

 export default connect(mapStateToProps, null)(Note);
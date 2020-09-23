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

//Import de React-draggable
import Draggable from 'react-draggable';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent Link de react-router-dom
import { Redirect } from "react-router-dom";

//Import du composent NoteAdd
import NoteAdd from './NoteAdd.js'

//Import du composent NodeDel
import NoteDel from './NoteDel.js'

//Omport du composent NoteEdit
import NoteEdit from './NoteEdit.js'


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
               <strong  className='note-topic cursor' style={{backgroundColor : note.color}}>
                  {note.title}
                  <NoteDel position={i} title={note.title}/>
                  <NoteEdit position={i} title={note.title} color={note.color} note={note.note} date={note.date} temps={note.temps}/>
               </strong>
               <div className="note-body">
                 <p>{note.note}</p>
               </div>
               <strong className="note-footer cursor" style={{backgroundColor : note.color}}>
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
                <NoteAdd value= {this.state.position}/>
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
             </Container>
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
import React from 'react';
import '../App.css';
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
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
// import Footer from '../Composent/Footer';
// import { Link } from "react-router-dom";
import Draggable from 'react-draggable';
import {connect} from 'react-redux';

class Note extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmitAddNote = this.handleSubmitAddNote.bind(this);
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.state = {
      modal: false,
      notes : [
        {title: "Project1", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        {title: "Project2", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        {title: "Project3", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        {title: "Project4", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        // {title: "Project5", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        // {title: "Project6", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        // {title: "Project7", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        // {title: "Project8", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        // {title: "Project9", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
        // {title: "Project10", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim."},
      ],
      title : "",
      note : "",
      alertVide : false,
      alertCaractere : false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentWillMount(){
      
     this.state.notes.map(
         (note, i) => {
            this.props.addNote(note.title, note.note)
         }
       );
     // return message_boucle;
     }

  handleSubmitAddNote(e){
    var ctx = this;
      console.log("Click détecté")
      console.log(this.state.title)
      if(this.state.title === "", this.state.note === ""){
        this.setState({ alertVide: true});
      }else if(this.state.title.length >= 19){
        this.setState({ alertVide : false, alertCaractere : true })
      }else{
      this.props.addNote(this.state.title, this.state.note);
      this.setState({ modal : false , alertVide : false, alertCaractere : false,  title : "", note : ""});
     }
    }

    handleSubmitError(){
      this.setState({ modal : false , alertVide : false, alertCaractere : false,  title : "", note : ""});
      }

     render() {
    var notes_boucle = this.props.Notes.map(
      (note, i) => {
        return (
           <Draggable handle="strong">
            <div className="note no-cursor">
               <strong  className="note-topic bleuClaire cursor">
                   {note.title}
                   <span className="close" onClick= {() => this.props.deleteNote(i)}><i className="far fa-times-circle"></i></span>
                   <span className="close"><i className="far fa-edit"></i></span>
               </strong>
               <div className="note-body">
                 <p>{note.note}</p>
               </div>
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
              <Button className = "note-button" color="success" onClick={this.toggle}>Ajouté une note</Button>
               <Row className="note-page">
                {notes_boucle}
               </Row>

               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.handleSubmitError}>Ajouté une note :</ModalHeader>
                  <ModalBody>
                   <Form>
                   <FormGroup>
                     <Alert color="danger" isOpen={this.state.alertVide} >
                      Vous n'avez pas remplis tous les champs.
                      </Alert>
                      <Alert color="danger" isOpen={this.state.alertCaractere} >
                      Pour le titre vous pouvez utiliser maximun 19 caractères.
                      </Alert>
                      <Label for="exampleTime">Titre :</Label>
                      <Input
                        type="text"
                        name="titre"
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
                    <Button color="secondary" onClick={this.handleSubmitError}>Cancel</Button>
                  </ModalFooter>
                </Modal>
             </Container>
             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state", state)
   return ({
    Notes: state.Notes,
 })
 }

 function mapDispatchToProps(dispatch) {
  return {
    addNote(title, note) { 
      dispatch({
      type: 'addNote',
      title : title,
      note : note,
    }) 
   },
    deleteNote(position) { 
      dispatch({
        type: 'deleteNote',
        position : position,
      }) 
    },

  }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Note);
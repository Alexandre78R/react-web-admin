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
import { SliderPicker } from 'react-color';

class Note extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmitAddNote = this.handleSubmitAddNote.bind(this);
    this.handleSubmitErrorAdd = this.handleSubmitErrorAdd.bind(this);
    this.handleSubmitErrorEdit = this.handleSubmitErrorEdit.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleSubmitAddEdit = this.handleSubmitAddEdit.bind(this);
    this.addDate = this.addDate.bind(this);
    this.addTemps = this.addTemps.bind(this);  
    
    this.state = {
      modalAdd: false,
      modalEdit : false,
      notes : [
        {title: "Project1", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "red"},
        {title: "Project2", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "green"},
        {title: "Project3", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "blue"},
        {title: "Project4", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "grey"},
        {title: "Project5", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "silver"},
        {title: "Project6", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "black"},
        {title: "Project7", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "brown"},
        {title: "Project8", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "yellow"},
        {title: "Project9", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "turquoise"},
        {title: "Project10", note: "Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.", date : "01/07/2019", temps : "00H00", color : "orange"},
      
      ],
      position : 0,
      title : "",
      note : "",
      alertBgAddRed : false,
      alertBgAddGreen : false,
      alertBgEditRed : false,
      alertBgEditGreen : false,
      alertText : "",
      date : "",
      temps : "",
      color : "#2196F3",
    };

    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleAdd() {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }

  toggleEdit() {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }

  componentWillMount(){
      
     this.state.notes.map(
         (note, i) => {
            this.props.addNote(note.title, note.note, note.date, note.temps, note.color)
         }
       );
     // return message_boucle;
     }
     
    addDate(){
      // console.log("addDate")
      var date = new Date();
      var message = "";
      if(date.getDate() < 10){
        message += "0" + date.getDate() + "/"
      }else{
        message += date.getDate() + "/"
      }

      if(date.getMonth() <10){
        message += "0" + (date.getMonth() + 1) + "/";
      }else{
        message += (date.getMonth() + 1) + "/"
      }

      message += date.getFullYear() + " ";
      // console.log(message)

      this.setState({
        date : message,
      });
      // console.log("setStats (date)", this.state.date)
  }

  addTemps(){
    // console.log("addTemps")
    var date = new Date();
    var message = "";

    if(date.getHours() < 10){
      message += "0" + date.getHours() + "h";
    }else{
      message += date.getHours() + "h";
    }

    if(date.getMinutes() < 10){
    message += "0" + date.getMinutes();
    }else{
    message += date.getMinutes();
  }
    // console.log(message)
    this.setState({
      temps : message,
    })
    // console.log("setStats (temps)", this.state.temps)
  }

  handleChangeColor = (color) => {
      // console.log(color.hex)
    this.setState({ color: color.hex });
  };

  handleSubmitAddNote(){
      // console.log("Click détecté")
      // console.log(this.state.title)
      if(this.state.title === ""){
        this.setState({
          alertBgAddRed: true,
          alertText: "Vous n'avez pas remplie le champ titre.",
        });
      }else if(this.state.note === ""){
        this.setState({
          alertBgAddRed : true,
          alertText : "Vous n'avez pas remplie le champ note.",
        })
      }else if(this.state.title.length >= 14){
        this.setState({
          alertBgAddRed : true,
          alertText : "Vous pouvez pas metre plus de 13 caractère pour le titre.",
        })
      }else{
//      console.log("setStats (date) dans formulaire", this.state.date)
        // var dateActuel = Date.now();
        // var millis = Date.now() - dateActuel;
        var ctx = this;
        this.addDate();
        this.addTemps();
        // console.log("Début du timer...");
        this.setState({
          alertBgAddRed : false,
          alertBgAddGreen : true,
          alertText : "Merci de patienter quelques secondes...",
        })
        setTimeout(function() {
          // console.log("Temps d'attente fini : " + Math.floor(millis/3000));
          ctx.props.addNote(ctx.state.title, ctx.state.note, ctx.state.date, ctx.state.temps, ctx.state.color);
          ctx.setState({
            modalAdd : false,
            alertBgAddRed : false,
            alertBgAddGreen : false,
            alertText : "",
            title : "",
            note : "",
            date : "",
            temps : "",
            color : "#2196F3",
          });
        }, 3000);
      }
    }

  handleSubmitErrorAdd(){
    this.setState({
      modalAdd : false,
      alertBgAddRed : false,
      alertBgAddGreen : false,
      alertText : "",
      title : "",
      note : "",
      date : "",
      temps : "",
      color : "#2196F3",
    });
  }

  handleSubmitEdit(position) {

      var list = this.props.Notes
      for (var i = 0; i < list.length; i++) {
        // console.log("title",(list[position].title))
        // console.log("note", (list[position].note))
        if (position === 0) {
            this.setState({
              position : position,
              title : list[position].title,
              note : list[position].note,
              color : list[position].color,
          })
        }else {
            this.setState({
              position : position,
              title : list[position].title,
              note : list[position].note,
              color : list[position].color,
          }) 
        }
      }
      this.toggleEdit(position)
    }

    handleSubmitAddEdit() {

      if(this.state.title === ""){
        this.setState({
          alertBgEditRed: true,
          alertText: "Vous n'avez pas remplie le champ titre.",
        });
      }else if(this.state.note === ""){
        this.setState({
          alertBgEditRed : true,
          alertText : "Vous n'avez pas remplie le champ note.",
        })
      }else if(this.state.title.length >= 14){
        this.setState({
          alertBgEditRed : true,
          alertText : "Vous pouvez pas metre plus de 13 caractère pour le titre.",
        })
      }else{
        var ctx = this;
        this.addDate();
        this.addTemps();
        // console.log("Début du timer...");
        this.setState({
          alertBgEditRed : false,
          alertBgEditGreen : true,
          alertText : "Merci de patienter quelques secondes...",
        })
        setTimeout(function() {
          // console.log("Temps d'attente fini : " + Math.floor(millis/3000))
          
          ctx.props.editNote(ctx.state.position, ctx.state.title, ctx.state.note, ctx.state.date, ctx.state.temps, ctx.state.color);
          ctx.setState({
            modalEdit : false,
            alertBgEditRed : false,
            alertBgEditGreen : false,
            alertText : "",
            title : "",
            note : "",
            date : "",
            temps : "",
            color : "#2196F3",
          });
        }, 3000);
     }

    }

    handleSubmitErrorEdit(){
      this.setState({
        modalEdit : false,
        alertBgEditRed : false,
        alertBgEditGreen : false,
        alertText : "",
        title : "",
        note : "",
        date : "",
        temps : "",
        color : "#2196F3",
      });
    }
     render() {
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
                 <p>{note.date} à {note.temps}</p>
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

               <Modal isOpen={this.state.modalAdd} toggle={this.toggleAdd} className={this.props.className}>
                  <ModalHeader>Ajouté une note :</ModalHeader>
                  <ModalBody>
                   <Form>
                    <FormGroup>
                      <Alert color="danger" isOpen={this.state.alertBgAddRed}>
                        {this.state.alertText}
                      </Alert>
                      <Alert color="success" isOpen={this.state.alertBgAddGreen}>
                        {this.state.alertText}
                      </Alert>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleTime">Coleur :</Label>
                        <SliderPicker
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

                <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit} className={this.props.className}>
                  <ModalHeader >Modifier la Note :</ModalHeader>
                  <ModalBody>
                  <Form>
                    <FormGroup>
                        <Alert color="danger" isOpen={this.state.alertBgEditRed}>
                        {this.state.alertText}
                        </Alert>
                        <Alert color="success" isOpen={this.state.alertBgEditGreen}>
                        {this.state.alertText}
                        </Alert>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleTime">Coleur :</Label>
                      <SliderPicker
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
function mapStateToProps(state) {
  console.log("state", state)
   return ({
    Notes: state.Notes,
 })
 }

 function mapDispatchToProps(dispatch) {
  return {
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
    deleteNote(position) { 
      dispatch({
        type: 'deleteNote',
        position : position,
      }) 
    },
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
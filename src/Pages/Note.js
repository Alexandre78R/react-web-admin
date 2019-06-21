import React from 'react';
import '../App.css';
import {
  Row,
  Container, 
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
// import Footer from '../Composent/Footer';
import { Link } from "react-router-dom";
import Draggable from 'react-draggable';

class Note extends React.Component {
  
  constructor() {
    super();
    this.state = {
    };
    
  }

  render() {
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid">
              <Button className = "note-button" color="success"><Link className="textBtnTableMessage" to={'#'}>Ajouté une note</Link></Button>
               <Row className="note-page">
               <Draggable>
               <div className="note">
                  <div className="note-topic org">
                      My Project1
                      <span className="close"><i className="far fa-times-circle"></i></span>
                      <span className="close"><i className="far fa-edit"></i></span>
                  </div>
                  <div className="note-body">
                    <p> Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.</p>
                  </div>
              </div>
              </Draggable>
              <Draggable>
               <div className="note">
                  <div className="note-topic org">
                      My Project1
                      <span className="close"><i className="far fa-times-circle"></i></span>
                      <span className="close"><i className="far fa-edit"></i></span>
                  </div>
                  <div className="note-body">
                    <p> Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.</p>
                  </div>
              </div>
              </Draggable>
              <Draggable>
               <div className="note">
                  <div className="note-topic org">
                      My Project1
                      <span className="close"><i className="far fa-times-circle"></i></span>
                      <span className="close"><i className="far fa-edit"></i></span>
                  </div>
                  <div className="note-body">
                    <p> Ipsum incididunt esse ex amet velit deserunt ea id et velit qui. Sit amet excepteur aute aliquip nulla ea reprehenderit ullamco sit. Ea exercitation cupidatat tempor aliqua ex sunt aliquip laboris occaecat velit occaecat non pariatur. Laborum cillum est ut esse enim excepteur eiusmod nulla nostrud excepteur labore nisi dolore. Ut sit excepteur nulla consequat magna proident consectetur amet magna id velit aute. Id amet eiusmod enim magna sint consectetur reprehenderit nisi ad et. Voluptate exercitation eiusmod qui nulla quis est sunt id consequat minim. Ut reprehenderit duis in nisi eiusmod non duis aliqua anim nulla qui. Ipsum quis velit amet laboris irure aliqua quis aliqua do veniam non ut laborum minim.</p>
                  </div>
              </div>
              </Draggable>
               </Row>
             </Container>
             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}

export default Note;
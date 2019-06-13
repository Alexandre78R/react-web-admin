import React from 'react';
import '../App.css';
import {
  Row,
  Container,  
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';

class SignIn extends React.Component {

  render() {
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid">
               <Row>
               <h1>Sign In</h1>
               </Row>
             </Container>
          </div>
    </div>
    );
  }
}

export default SignIn;
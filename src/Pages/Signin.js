import React from 'react';
import '../App.css';
import {
  Row,
  Container,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormGroup,
  Label, 
  Input, 

} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
// import Footer from '../Composent/Footer';

class SignIn extends React.Component {

  render() {
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid page">
               <Row>
                  <div class="wrapper">
                    <div id="formContent">
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03bHFfc3PT_fAdI7rcgrCGLyZIwy8koE-D2KqFzkN0SqAaDKR" id="icon" alt="User Icon" />
                        <h5>Connexion</h5>
                      </div>                      
                      <form>
                        <input type="textLogin" id="login" class="fadeIn second" name="login" placeholder="Username"/>
                        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password"/>
                        <input type="submit" class="fadeIn fourth" value="Log In"/>
                      </form>
                      <div id="formFooter">
                        <a class="underlineHover" href="#">Mot de passe oublié?</a>
                      </div>
                    </div>
                  </div>
               </Row>
             </Container>
             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}

export default SignIn;
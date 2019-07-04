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
import {connect} from 'react-redux';
// import Footer from '../Composent/Footer';

class SignIn extends React.Component {
  
  constructor() {
    super();
    this.state = {
      userData : [ 
        {username : "dev", password : "dev", email : "dev@dev.dev", description : "C'est une description...", token : "0"},
        {username : "dev1", password : "dev1", email : "dev1@dev.dev", description : "C'est une description...1", token : "1"},
     ],
    };
    
  }

  componentWillMount(){
    this.state.userData.map(
        (user, i) => {
          //  console.log(user)
        this.props.user(user.username, user.password, user.email, user.description, user.token)
        }
      );
    }

  handleClick = () => {
    console.log('click détecté !');

  }
  render() {
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid page">
               <Row>
                  <div className="wrapper">
                    <div id="formContent">
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03bHFfc3PT_fAdI7rcgrCGLyZIwy8koE-D2KqFzkN0SqAaDKR" id="icon" alt="User Icon" />
                        <h5>Connexion</h5>
                      </div>                      
                      <form>
                        <input type="textLogin" id="login" className="fadeIn second" placeholder="Username"/>
                        <input type="password" id="password" className="fadeIn third" placeholder="Password"/>
                        <input type="submit" onClick={this.handleClick} value="Log In"/>
                      </form>
                      <div id="formFooter">
                        <a className="underlineHover" href="#">Mot de passe oublié?</a>
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
function mapStateToProps(state) {
  console.log("User (state)", state)
   return ({
    Users: state.Users,
 })
 }

 function mapDispatchToProps(dispatch) {
  return {
    user(username, password, email, description, token) { 
      dispatch({
      type: 'user',
      username : username,
      password : password,
      email : email,
      description : description,
      token : token,
    }) 
   },
  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
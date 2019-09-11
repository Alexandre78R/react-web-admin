//Import du module react
import React from 'react';

//Import la liste des composents du module reactstrap
import {
  Row,
  Container, 
  InputGroup,
  Alert,
} from 'reactstrap';

//Import du composent NavBar
import NavBar from '../Composent/NavBar'

//Import du composent SideBar
import SideBar from '../Composent/SideBar';

// Import du composent connect de redux
// import {connect} from 'react-redux';

//Import du composent API 
import API from '../utils/API';
// import Footer from '../Composent/Footer';

class SignUp extends React.Component {
  
    constructor() {
        super();

        //On blind la function handleClick pour l'utilisé partout avec this.
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            //State de l'username
            username: '',
            //State du password
            password: '',
            //State de l'email
            email: '',
            //State Alert Error
            bgAlert : false,
            //State Text Error
            text : "",
        }
    };
    
    //Fonction qui se déclanche à la validation du formulaire d'enregistrement.

  handleClick(){

      console.log('Inscription en cours...');

      //Condition s'il y n'a rien dans le champ username on envois rien.
      if(this.state.username.length === 0){
        this.setState({
          bgAlert: true,
          text : "Vous n'avez pas remplie la case username."
        });
        return;
      }

      //Condition s'il y n'a rien dans le champ password on envois rien.
      if(this.state.password.length === 0){
        this.setState({
          bgAlert: true,
          text : "Vous n'avez pas remplie la case password."
        });
        return;
      }

      //Condition s'il y n'a rien dans le champ email on envois rien.
      if(this.state.email.length === 0){
        this.setState({
          bgAlert: true,
          text : "Vous n'avez pas remplie la case email."
        });
        return;
      }

      //On stock les données des stats dans la variable _send.
      var _send = {
          username: this.state.username,
          password: this.state.password,
          email : this.state.email,
      }
      
      console.log("Username :", this.state.username)
      console.log("Password :", this.state.password)
      console.log("Email :", this.state.email)
      var ctx = this
      //Utulisation de note API pour envoyer vers le backend les informations du compte.
      API.signup(_send).then(function(data){
          console.log("Data :", data.data)
        //Si l'username existe déjà on lui met un message d'errreur
          if (data.data.code === 403){
            ctx.setState({
              bgAlert: true,
              text : data.data.text
            });   
            console.log(ctx.state.username)     
          // Si tous est good on accepte son incription e ton le connect 
          }else{
            //On récupére le token que le backend nous s'a envoyé.
            localStorage.setItem('token', data.data.token);
            //Redirection vers le dashboard.
            window.location = "/dashboard"
          }
          //En cas d'erreur un message s'affiche 
      },function(error){
          console.log(error);
          ctx.setState({
            bgAlert: true,
            text : "Problème interne, merci de réessayer plus tard !"
          });
          return;
      })
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
                        <h5>Enregistrez-vous</h5>
                      </div>
                        <Alert color="danger" isOpen={this.state.bgAlert}>
                          <h6>{this.state.text}</h6>
                        </Alert>
                        <InputGroup>
                          <input type="login" className="fadeIn second" placeholder="Username" onChange={event=>this.setState({username:event.target.value})}/>
                        </InputGroup>
                        <br />
                        <InputGroup>
                          <input type="password" className="fadeIn second" placeholder="Password" onChange={event=>this.setState({password:event.target.value})} />
                        </InputGroup>
                        <br />
                        <InputGroup>
                          <input type="emails" className="fadeIn second" placeholder="Email" onChange={event=>this.setState({email:event.target.value})} />
                        </InputGroup>
                        <br />
                        <input type="submit" value="Signin" onClick={this.handleClick}/>
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
export default SignUp;
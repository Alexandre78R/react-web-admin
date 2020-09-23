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
import NavBar from '../../Composent/NavBar'

//Import du composent SideBar
import SideBar from '../../Composent/SideBar';

//Import du composent API Backend
import ApiBackend from '../../utils/ApiBackend';

//Import du composent API Local Storage
import ApiLocalStorage from '../../utils/ApiLocalStorage';

//Import du composent footer
import Footer from '../../Composent/Footer';

//Import des composent de react-router-dom
import { Link, Redirect  } from "react-router-dom";

//Import du composent connect de react-redux
import {connect} from 'react-redux';

import { bindActionCreators } from 'redux';

class SignUp extends React.Component {
  
    constructor() {
        super();

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
            //State Redirection
            redirect: false,
            //State visible des champs pour la connexion si c'est false c'est pour mettre le code vérif de l'email
            viewFrom : true,
            //! Les states suivant c'est pour garder les informations de l'user si il doit vérifier l'adresse mail
            emailData : "",
            codeData : "",
            usernameData: "",
            passwordData: "",
            descriptionData : "",
            _idData : "",
            textData : "",
            tokenData : "",
            //! Fin des states pour les informations à garder en cas si il doit vérifier l'adresse mail
            //State code champs
            codeText : "",
            //State  Alerte verte
            bgAlertGreen : false,
            //State text alert green
            textGreen : "",
        }
    };

  //A l'arrivé sur la  page on vide bien le localstorage
  componentWillMount = () => {
    // //Apelle de la funtion logout qui se trouve dans le fichier API.
    console.log("PAGE SIGNUP (Fonction componentWillMount)")
    if (ApiLocalStorage.isAuth()===true){
      console.log("Tu est connecté !")
      return window.location = "/dashboard"
    }else{
      return(console.log("Tu n'est pas connecté !"))
    }
  }
  //Fonction qui se déclanche à la validation du formulaire d'enregistrement.
  handleClick = () => {

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

      //Utulisation de l'API pour envoyer vers le backend les informations du compte.
      ApiBackend.signup(_send)
      .then(function(data){
          console.log("Data :", data.data)
        //Si l'username existe déjà on lui met un message d'errreur
          if (data.data.code === 403){
            ctx.setState({
              bgAlert: true,
              text : data.data.text
            });   
            console.log(ctx.state.username)     
          // Si tous est good on accepte son incription e ton le connect 
          }else if (data.data.code === 404){
            ctx.setState({
              bgAlert: true,
              text : data.data.text
            });   
          }else{
            //On vérifie si son adresse email est vérifier 
            if (data.data.user.emailVerif === false){

              //On récupère les informations utile pour le mail de vérification
              var _send = {
                email : data.data.user.email,
                username: data.data.user.username,
                code: data.data.user.code,
              }

              console.log("Send", _send)

              //On envoie les infos au backend
              ApiBackend.emailVerif(_send)
              //Si l'émail à était bien envoyer
              .then(function(info){
                console.log("Demande d'envois email backend :", info.data)
                ctx.setState({
                  bgAlert: false,
                  text : "",
                  viewFrom : false,
                  emailData : data.data.user.email,
                  codeData : data.data.user.code,
                  usernameData: data.data.user.username,
                  passwordData: data.data.user.password,
                  descriptionData : data.data.user.description,
                  _idData : data.data.user._id,
                  textData : data.data.text,
                  tokenData : data.data.token,
                  bgAlertGreen : true,
                  textGreen : info.data.text
                });
              })
              //En cas d'erreur si l'email n'était pas envoyer 
              .catch((err) => {
                console.log("Err Envoi d'email", err)
                ctx.setState({
                  bgAlert: true,
                  text : "Problème interne l'email n'a pas était envoyer !",
                })
              })
            }else{
              //Envoi des infos de l'user dans redux
              ctx.props.setUser(data.data.user._id, data.data.text, data.data.user.username, data.data.user.password, data.data.user.email, data.data.user.description)

              //On stock des information dans le local storage
              ApiLocalStorage.addLocalStorageLogin(data.data.token, data.data.user._id, data.data.user.email, data.data.user.username)
              
              //Redirection vers le dashboard par les states.
              ctx.setState({
                bgAlert: false,
                text : "",
                redirect : true,
              });
            }
          }
        //En cas d'erreur un message s'affiche 
        },function(error){
          console.log(error);
          ctx.setState({
            bgAlert: true,
            text : "Problème interne, merci de réessayer plus tard !"
          });
      })
    }

  //Fonction de vérificagtion du code si l'email n'est pas vérifier
  handleClickVerifCode = () => {
    var ctx = this;
    console.log("CodeData", ctx.state.codeData)
    console.log("Code Champ", ctx.state.codeText)

    //On compare lescode si ils conresponds
    //Si c'est les mêmes codes
    if(ctx.state.codeText === ctx.state.codeData){

      //Envoi des infos user dans redux
      ctx.props.setUser(ctx.state._idData, ctx.state.textData, ctx.state.usernameData, ctx.state.passwordData, ctx.state.emailData, ctx.state.descriptionData)

      // On stock des infomations dans le local Storage
      ApiLocalStorage.addLocalStorageLogin(ctx.state.tokenData, ctx.state._idData, ctx.state.emailData, ctx.state.usernameData)
      
      //On change le statut de l'émail vérifier par le backend 
      ApiBackend.emailVerifSatut(ctx.state._idData)
      //Si le statue à était bien changer on le redirige sur les dashboards
      .then(function(data){
        ctx.setState({
          bgAlert: false,
          text : "",
          redirect : true,
          emailData : "",
          codeData : "",
          usernameData: "",
          passwordData: "",
          descriptionData : "",
          _idData : "",
          textData : "",
          tokenData : "",
        })
      })
      //En cas d'erreur si le status n'a pas était envoyer
      .catch((err) => {
        console.log(err)
        ctx.setState({
          bgAlert : true,
          text : "Erreur interne merci de réessayer plus tard ! ",
        })
      }) 
    
    }else {
      //Si le code est inccorrect
      ctx.setState({
        bgAlert: true,
        text : "Le code est incorrect !"
      });
    }
  }

  render() {

    const { redirect } = this.state;
    //Si le state redirect est true on le redirige sur le dashboard
    if (redirect === true) {
      return <Redirect to='/dashboard'/>;
    }

    //Affichage de la page connextion
    if (this.state.viewFrom === true){
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
                    </div>
                  </div>
                </Row>
                {/* <Footer/> */}
              </Container>
            </div>
      </div>
      );
    }else{
      //Et si c'est false on redirage la page de vérification avec le code à vérifier
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
                      <Alert color="success" isOpen={this.state.bgAlertGreen}>
                        <h6>{this.state.textGreen}</h6>
                      </Alert>
                      <Alert color="danger" isOpen={this.state.bgAlert}>
                        <h6>{this.state.text}</h6>
                      </Alert>
                      <InputGroup>
                        <input type="code" className="fadeIn second" placeholder="Code de vérification" onChange={event=>this.setState({codeText:event.target.value})}/>
                      </InputGroup>
                      <br />
                      <input type="submit" value="Vérifier" onClick={this.handleClickVerifCode}/>
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
}

 //Réccupération des Messages par Redux.
 function mapStateToProps(state) {
  // console.log("SignUp::::",state.Signup) 
  console.log("state", state)
   return ({
    Users: state.Users,
 })
 }

//Listes des fonction dispatch 
function mapDispatchToProps(dispatch) {
  return {
    // Récupération des infos de l'User pour envoyerà redux
    setUser(id, text, username, password, email, description) { 
      dispatch({
      type: 'setUser',
      id : id,
      text : text,
      username : username,
      password: password,
      email: email,
      description : description,
    }) 
   },
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
//Import de React
import React from 'react';

//Import de la liste des composents pour reactstraps
import {
  Row,
  Container,
  Alert,
  InputGroup,
} from 'reactstrap';

//Import du composent NavBar
import NavBar from '../../Composent/NavBar'

//Import du composent SideBar
import SideBar from '../../Composent/SideBar';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent footer
// import Footer from '../Composent/Footer';

//Import du composent API Backend
import ApiBackend from '../../utils/ApiBackend';

//Import du composent API Local Storage
import ApiLocalStorage from '../../utils/ApiLocalStorage';

//Import des composent de react-router-dom
import { Link, Redirect  } from "react-router-dom";

class SignIn extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      //State de username.
      username : "",
      //State de password.
      password : "",
      //State Alert error
      bgAlert : false,
      //State Alert chargement
      bgAlertBlue : false,
      //State Text Error
      text : "",
      //State Redirection
      redirect: false,
      //State visible des champs pour la connexion si c'est false c'est pour mettre le code vérif de l'email
      viewFrom : true,
      viewFromChangeMdp : false,
      //! Les states suivant c'est pour garder les informations de l'user si il doit vérifier l'adresse mail ou changer le mot de passe
      emailData : "",
      codeData : "",
      usernameData: "",
      passwordData: "",
      descriptionData : "",
      _idData : "",
      textData : "",
      tokenData : "",
      //Pour le nouveau mot de passe seulement
      saltData :  "",
      //! Fin des states pour les informations à garder en cas si il doit vérifier l'adresse mail ou changer le mot de passe
      //State code champs
      codeText : "",
      //State  Alerte verte
      bgAlertGreen : false,
      //State text alert green
      textGreen : "",
      //State nouveau mot de passe
      passwordNew : "",
      //State nouveau mot de passe confirmation
      passwordNewConfirm : "",
      test : console.log("props", props),
    };
    
  }

  //A l'arrivé sur la page on vide bien le localstorage
  componentWillMount = () => {
    // console.log("test", this.state.test)
    //Apelle de la funtion logout qui se trouve dans le fichier API.
    //Pour forcer la déconnexion de la dernière session 
    console.log("PAGE LOGIN (Fonction componentWillMount)")
    if (ApiLocalStorage.isAuth()===true){
      console.log("Tu est connecté !")
      return window.location = "/dashboard"
    }else{
      return(console.log("Tu n'est pas connecté !"))
    }
  }

  handleClick = () => {

    console.log('click détecté !');
    console.log('Connexion en cours...');

    //On ne retourne rien si le champs username est vide.
    if(this.state.username.length === 0){
      this.setState({
        bgAlert: true,
        text : "Vous n'avez pas remplie la case username."
      });
      return;
    }

    //On ne retourne rien si le champs password est vide.
    if(this.state.password.length === 0){
      this.setState({
        bgAlert: true,
        text : "Vous n'avez pas remplie la case password."
      });
      return;
    }
    
    console.log("Username :", this.state.username)
    console.log("Password :", this.state.password)
    var ctx = this;

    //Stats d'attente
    this.setState({
      bgAlertRed: false,
      bgAlertBlue : true,
      text : "En cours de chargement, merci de patienter !"
    });

    //Démarage notre API pour utilisé la function login qui se trouve dans notre fichier API.
    ApiBackend.login(this.state.username, this.state.password)
    .then(function(data){
        console.log("Data :", data)
        // console.log("data dans data", data.data)
        // console.log("user", data.data.user)
        // console.log("Counts", data.data.user)
        // console.log("Text :", data)

        //Si l'username n'existe pas on lui met un message d'erreur
        if (data.data.code === 401){
          ctx.setState({
            bgAlertBlue : false,
            bgAlert: true,
            text : data.data.text
          });
        //Si le mot de passe n'est pas correct, on lui met un message d'erreur
        }else if (data.data.code === 402){
          ctx.setState({
            bgAlertBlue : false,
            bgAlert: true,
            text : data.data.text
          });
          //Et sit tous est bon on le connecte 
        }else{

          //On vérifie si son adresse email est vérifier 
          if (data.data.user.emailVerif === false){
            //On récupère les informations utile pour le mail de vérification
            var _send = {
              email : data.data.user.email,
              username: data.data.user.username,
              code: data.data.user.code,
            }
            //on envoie les infos au backend
            ApiBackend.emailVerif(_send)
            //Si l'émail à était bien envoyer
            .then(function(info){
              // console.log(info.data)
              ctx.setState({
                bgAlertBlue : false,
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
              console.log(err)
              ctx.setState({
                bgAlertBlue : false,
                bgAlert: true,
                viewFrom : false,
                text : "",
              })
            })

          }else if(data.data.user.changePassword === true){
            // console.log("Je suis dans changePassword true")
            ctx.setState({
              bgAlertBlue : false,
              bgAlert: false,
              text : "",
              emailData : data.data.user.email,
              codeData : data.data.user.code,
              usernameData: data.data.user.username,
              passwordData: data.data.user.password,
              descriptionData : data.data.user.description,
              _idData : data.data.user._id,
              textData : data.data.text,
              tokenData : data.data.token,
              saltData : data.data.user.salt,
              viewFrom : false,
              viewFromChangeMdp : true,
            })
          }else{

          //Envoi des infos user dans redux
          ctx.props.setUser(data.data.user._id, data.data.text, data.data.user.username, data.data.user.password, data.data.user.email, data.data.user.description)

          // On stock les information dans le Local Storage
          ApiLocalStorage.addLocalStorageLogin(data.data.token, data.data.user._id, data.data.user.email, data.data.user.username)
          
          //Redirection vers le dashboard par les states.
          ctx.setState({
            bgAlertBlue : false,
            bgAlert: false,
            text : "",
            redirect : true,
          });
        }
      }
    })
    //En cas d'erreur un message s'affiche 
    .catch((err) => {
      console.log(err)
      ctx.setState({
        bgAlert: true,
        text : "Problème interne, merci de réessayer plus tard !",
      });
    })
  }

  //Fonction de vérificagtion du code si l'email n'est pas vérifier
  handleClickVerifCode = () => {
    var ctx = this;
    console.log("CodeData", ctx.state.codeData)
    console.log("Code Champ", ctx.state.codeText)

    // Erreur si on met rien dans le champ code
    if(ctx.state.codeText.length === 0){
      ctx.setState({
        bgAlert: true,
        text : "Vous n'avez rien remplie dans le champ du code !"
      });
      return;
    };

    //On compare lescode si ils conresponds
    //Si c'est les mêmes codes
    if(ctx.state.codeText == ctx.state.codeData){

      //On change le statut de l'émail vérifier par le backend 
      ApiBackend.emailVerifSatut(ctx.state._idData)
        //Si le statue à était bien changer on le redirige sur les dashboards
        .then(function(data){
        //Envoi des infos user dans redux
        ctx.props.setUser(ctx.state._idData, ctx.state.textData, ctx.state.usernameData, ctx.state.passwordData, ctx.state.emailData, ctx.state.descriptionData)

        // On stock les information dans le Local Storage
        ApiLocalStorage.addLocalStorageLogin(ctx.state.tokenData, ctx.state._idData, ctx.state.emailData, ctx.state.usernameData)

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

  handleClickChangePassword = () => {
    console.log("test click")
    var ctx = this;

    // Erreur si on met rien dans le champ nouveau mot passe
    if (ctx.state.passwordNew.length === 0){
      ctx.setState({
        bgAlert: true,
        text : "Vous n'avez rien remplie dans le champ nouveau mot de passe !"
      });
      return;
    };

    // Erreur si on met rien dans le champ confirmation du nouveau mot de passe
    if (ctx.state.passwordNewConfirm.length === 0){
      ctx.setState({
        bgAlert: true,
        text : "Vous n'avez rien remplie dans le champ confirmation du nouveau mot de passe !"
      });
      return;
    };

    //On regarde si les deux mots de passes sont identique
    if (ctx.state.passwordNew == ctx.state.passwordNewConfirm){

      //On stock les informations que on a besion pour le backend 
      var _send = {
        password: ctx.state.passwordNewConfirm,
        salt : ctx.state.saltData,
        idUser: ctx.state._idData,
      }

      //On change le mot passe
      ApiBackend.newMdp(_send)
      //Si le statue à était bien changer on le redirige sur les dashboards
      .then(function(data){
        
        //Envoi des infos user dans redux
        ctx.props.setUser(ctx.state._idData, ctx.state.textData, ctx.state.usernameData, ctx.state.passwordData, ctx.state.emailData, ctx.state.descriptionData)

        // On stock les information dans le Local Storage
        ApiLocalStorage.addLocalStorageLogin(ctx.state.tokenData, ctx.state._idData, ctx.state.emailData, ctx.state.usernameData)
        
        ctx.setState({
          bgAlert: false,
          text : "",
          redirect : true,
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
    }else{
      //Si les mots de passes sont différent 
      ctx.setState({
        bgAlert: true,
        text : "Les mots de passes sont différent !"
      });
    }
  }

  render() {

    const { redirect } = this.state;
    //Si le state redirect passe à true on l'envois sur la page dashboard.
    if (redirect === true) {
      return <Redirect to='/dashboard'/>;
    }

    //Affichage de la page connextion
    if (this.state.viewFrom === true){
      return(
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
                        <Alert color="danger" isOpen={this.state.bgAlert}>
                          <h6>{this.state.text}</h6>
                        </Alert>
                        <Alert color="primary" isOpen={this.state.bgAlertBlue}>
                          <h6>{this.state.text}</h6>
                        </Alert>
                          <InputGroup>
                            <input type="login" className="fadeIn second" placeholder="Username" onChange={event=>this.setState({username:event.target.value})}/>
                          </InputGroup> 
                        <br />
                          <InputGroup>
                            <input type="password" className="fadeIn second" placeholder="Mot de passe" onChange={event=>this.setState({password:event.target.value})} />
                          </InputGroup>
                        <br />
                        <input type="submit" value="Connexion" onClick={this.handleClick}/>
                        <div id="formFooter">
                          <Link to={'/forgotten'}>Mot de passe oublié ?</Link>
                        </div>
                    </div>
                  </div>
              </Row>
            </Container>
            {/* <Footer/> */}
          </div>
    </div>
      )
    //On affiche un formulaire de changement de mot de passe si la personne a fait une demande de mot de passe oublier 
    }else if(this.state.viewFromChangeMdp === true){
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
                      <h5>Nouveau mot de passe</h5>
                    </div>
                      <Alert color="danger" isOpen={this.state.bgAlert}>
                        <h6>{this.state.text}</h6>
                      </Alert>
                      <div className="loginFormNewMdp">
                        <InputGroup>
                          <input type="password" className="fadeIn secon" placeholder="Nouveau mot de passe" onChange={event=>this.setState({passwordNew:event.target.value})} />
                        </InputGroup>
                        <br />
                        <InputGroup>
                          <input type="password" className="fadeIn secon" placeholder="Confirmation du nouveau mot de passe" onChange={event=>this.setState({passwordNewConfirm:event.target.value})} />
                        </InputGroup>
                        <br />
                      </div>
                      <input type="submit" value="Vérifier" onClick={this.handleClickChangePassword}/>
                  </div>
                </div>
            </Row>
          </Container>
          {/* <Footer/> */}
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
  // console.log("Messages::::",state.Messages) 
  console.log("state", state)
   return ({
    Users: state.Users,
  })
}

//Listes des fonction dispatch pour les messages
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

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

//Import du composent API
import API from '../../utils/API';

//Import des composent de react-router-dom
import { Link, Redirect  } from "react-router-dom";

class SignIn extends React.Component {
  
  constructor() {
    super();

    this.state = {
      //State de username.
      username : "",
      //State de password.
      password : "",
      //State Alert error
      bgAlert : false,
      //State Text Error
      text : "",
      //State Redirection
      redirect: false,
    };
    
  }

  //A l'arrivé sur la  page on vide bien le localstorage
  componentWillMount() {
    //Apelle de la funtion logout qui se trouve dans le fichier API.
    //Pour forcer la déconnexion de la dernière session 
    API.logout();
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
    //Démarage notre API pour utilisé la function login qui se trouve dans notre fichier API.
    API.login(this.state.username, this.state.password)
    .then(function(data){
        console.log("Data :", data)
        console.log("data dans data", data.data)
        console.log("user", data.data.user)
        console.log("Counts", data.data.user)
        console.log("Notes", data.data.user.notes)
        // console.log("Text :", data)

        //Si l'username n'existe pas on lui met un message d'erreur
        if (data.data.code === 401){
          ctx.setState({
            bgAlert: true,
            text : data.data.text
          });
        //Si le mot de passe n'est pas correct, on lui met un message d'erreur
        }else if (data.data.code === 402){
          ctx.setState({
            bgAlert: true,
            text : data.data.text
          });
          //Et sit tous est bon on le connecte 
        }else{

        //Envoi des infos user dans redux
        ctx.props.setUser(data.data.text, data.data.user.username, data.data.user.password, data.data.user.email, data.data.user.description)
        
        ctx.props.setNotes(data.data.user.notes)
        // Récupération du token que le backend nous envois.
        localStorage.setItem('token', data.data.token);

        ctx.setState({
          bgAlert: false,
          text : "",
          redirect : true,
        });
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
  render() {
    const { redirect } = this.state;
    //Si le state redirect passe à true on l'envois sur la page dashboard.
    if (redirect === true) {
      return <Redirect to='/dashboard'/>;
    }
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
                        <input type="submit" value="Signin" onClick={this.handleClick}/>
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
    // Récupération des infos de l'User
    setUser(text, username, password, email, description) { 
      dispatch({
      type: 'setUser',
      text : text,
      username : username,
      password: password,
      email: email,
      description : description,
    }) 
   },
      // Récupération des infos de l'User
      setNotes(notes) { 
      dispatch({
      type: 'setNotes',
      notes : notes,
    }) 
    },
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

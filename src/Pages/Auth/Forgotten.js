//Import de React
import React from 'react';

//Import de la liste des composent de reactstraps
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

//Import du composent Link de react-router-dom
import { Redirect } from "react-router-dom";

//Import du composent API
import API from '../../utils/API';

//Import du composent du Footer
// import Footer from '../Composent/Footer';

class User extends React.Component {

  constructor() {
    super();

    this.state = {
        //State Redirection
        redirect: false,
        //State affichage alert erreur
        bgAlertRed : false,
        //State affichage alert de chargement
        bgAlertBlue : false,
        //State affichage de l'alert valide
        bgAlertGreen : false,
        //State du text dans l'alert
        text : "",
        //State de l'username 
        username : "",
        //State de l'email
        email : "",
    };
    
  }

    //A l'arrivé sur la page on vide bien le localstorage
    componentWillMount = () => {
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
            bgAlertRed: true,
            text : "Vous n'avez pas remplie la case username."
          });
          return;
        }
    
        //On ne retourne rien si le champs password est vide.
        if(this.state.email.length === 0){
          this.setState({
            bgAlertRed: true,
            text : "Vous n'avez pas remplie la case email."
          });
          return;
        }
        
        //State si la demande est en cours
        this.setState({
            bgAlertRed: false,
            bgAlertBlue : true,
            text : "En cours de chargement, merci de patienter !"
        });

        console.log("Username :", this.state.username)
        console.log("Password :", this.state.email)
        var ctx = this;
        
        //Démarage notre API pour utilisé la function login qui se trouve dans notre fichier API.
        API.forgotten(this.state.username, this.state.email)
        .then(function(data){
            // console.log("Data :", data)
            // console.log("data dans data", data.data)
            // console.log("user", data.data.user)
            // console.log("Counts", data.data.user)
            // console.log("Notes", data.data.user.notes)
            // console.log("Text :", data)
    
            //Si l'username n'est pas correct, on lui met un message d'erreur
            if (data.data.code === 403){
                ctx.setState({
                    bgAlertBlue : false,
                    bgAlertRed: true,
                    text : data.data.text
                });

            //Si l'email n'est pas correct, on lui met un message d'erreur
            }else if (data.data.code === 404){
                ctx.setState({
                    bgAlertBlue : false,
                    bgAlertRed: true,
                    text : data.data.text
                });
                //Et si tous est bon on le connecte 
            }else{
                //on affiche la réponse  backend
                ctx.setState({
                    bgAlertBlue : false,
                    bgAlertRed: false,
                    bgAlertGreen : true,
                    text : data.data.text + " Redirection automatique dans quelque secondes...",
                });       
                //Redirection à la connexion dans quelques secondes
                setTimeout(function(){
                    ctx.setState({
                        redirect : true,
                    });     
                }, 6000);
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
    //Si le state redirect est true on leredirige de force sur la page connexion
    if (redirect === true) {
      return <Redirect to='/'/>;
    }
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid">
               <Row>
                    <div className="wrapper">
                        <div id="formContent">
                            <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03bHFfc3PT_fAdI7rcgrCGLyZIwy8koE-D2KqFzkN0SqAaDKR" id="icon" alt="User Icon" />
                            <h5>Mot de passe oublié ?</h5>
                            </div>
                            <Alert color="danger" isOpen={this.state.bgAlertRed}>
                                <h6>{this.state.text}</h6>
                            </Alert>
                            <Alert color="primary" isOpen={this.state.bgAlertBlue}>
                                <h6>{this.state.text}</h6>
                            </Alert>
                            <Alert color="success" isOpen={this.state.bgAlertGreen}>
                                <h6>{this.state.text}</h6>
                            </Alert>
                            <InputGroup>
                                <input type="login" className="fadeIn second" placeholder="Username" onChange={event=>this.setState({username:event.target.value})}/>
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <input type="emails" className="fadeIn second" placeholder="Email" onChange={event=>this.setState({email:event.target.value})} />
                            </InputGroup>
                            <br />
                            <input type="submit" value="envoyer" onClick={this.handleClick}/>
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

export default (User);
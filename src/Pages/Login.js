import React from 'react';
import {
  Row,
  Container,
  Alert,
  InputGroup,
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
import {connect} from 'react-redux';
// import Footer from '../Composent/Footer';
import API from '../utils/API';

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
    };
    
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
        // console.log("Text :", data)
        if (data.data.code === 401){
          ctx.setState({
            bgAlert: true,
            text : data.data.text
          });
        }else if (data.data.code === 402){
          ctx.setState({
            bgAlert: true,
            text : data.data.text
          });
        }else{
          ctx.setState({
            bgAlert: false,
            text : ""
          });
        // Récupération du token que le backend nous envois.
        localStorage.setItem('token', data.data.token);

        console.log(data.data)
        // Redirection vers le dashboard.
        window.location = "/dashboard"
        }
        
    })
    .catch((err) => {
      // this.setState({
      //   bgAlert: true,
      //   text : "L'username ou le password est incorrect !"
      // });
      console.log(err)
    })

    
    //Démarage notre API pour utilisé la function login qui se trouve dans notre fichier API.
  //   API.login(this.state.username, this.state.password)
  //   .then(res => res.json())
  //   .then(() => {
  //     console.log("test");
  //   })  
  //   .catch(function(err){
  //     console.log(err)
  //   })
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

export default SignIn;
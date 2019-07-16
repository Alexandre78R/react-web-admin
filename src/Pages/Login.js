import React from 'react';
import {
  Row,
  Container,
  Input,
  InputGroup,
  InputGroupAddon

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
    };
    
  }

  handleClick = () => {

    console.log('click détecté !');
    console.log('Connexion en cours...');

    //On ne retourne rien si le champs username est vide.
    if(this.state.username.length === 0){
      return;
    }

    //On ne retourne rien si le champs password est vide.
    if(this.state.password.length === 0){
        return;
    }
    
    console.log("Username :", this.state.username)
    console.log("Password :", this.state.password)

    //Démarage notre API pour utilisé la function login qui se trouve dans notre fichier API.
    API.login(this.state.username, this.state.password).then(function(data){

        console.log("Data :", data.data)
        console.log("Data config :", data.data.config)

        //Récupération du token que le backend nous envois.
        localStorage.setItem('token', data.data.token);

        //Redirection vers le dashboard.
        window.location = "/dashboard"

    },function(error){
        console.log(error);
        return;
    })
    
    //Code non utilisé.
    // var signinData = JSON.stringify({
    //   username: this.state.username,
    //   password: this.state.password,
    // });
    // console.log("Username :", this.state.username)
    // console.log("Password :", this.state.password)
  
    // fetch(`http://10.2.3.230:3000/signin`, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: signinData
    // }
    // ).then(function(res, err){
    //     console.log("Res",res)
    //     res.json()
    // }).then(function(data){
    //     console.log("DATA : ")
    //     console.log("FETCH BACK (Data) : ", data);
    // }).catch(function(err){
    //   console.log("Err",err)
    // })
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
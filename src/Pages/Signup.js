import React from 'react';

import {
  Row,
  Container, 
  InputGroup,

} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
import {connect} from 'react-redux';
import API from '../utils/API';
// import Footer from '../Composent/Footer';

class SignUp extends React.Component {
  
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    };
    
    handleClick(){
        console.log('Inscription en cours...');
        if(this.state.username.length === 0){
            return;
        }
        if(this.state.password.length === 0){
            return;
        }
        if(this.state.email.length === 0){
            return;
        }
        var _send = {
            username: this.state.username,
            password: this.state.password,
            email : this.state.email,
        }
        
        console.log("Username :", this.state.username)
        console.log("Password :", this.state.password)
        console.log("Email :", this.state.email)

        API.signup(_send).then(function(data){
            // console.log("Data :", data.data)
            // console.log("Data config :", data.data.config)
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
        // var signupData = JSON.stringify({
        //   username: this.state.username,
        //   email: this.state.email,
        //   password: this.state.password,
        // });
        // console.log("Username", this.state.username)
        // console.log("email", this.state.email)
        // console.log("password", this.state.password)
        // const ctx = this;
      
        // fetch(`http://192.168.43.236:3000/signup`, {
        //   method: 'POST',
        //   headers: {'Content-Type': 'application/json'},
        //   body: signupData
        // }
        // ).then(function(res, err){
        //   return res.json()
        // }).then(function(data){
        // //   console.log(ctx.state)
        //   console.log("FETCH BACK (Data) : ", data);
        // //   ctx.props.setUser(data.user.username, data.user.email, data.user.password)
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
                        <h5>Enregistrez-vous</h5>
                      </div>
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
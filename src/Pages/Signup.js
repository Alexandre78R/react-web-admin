import React from 'react';
import '../App.css';
import {
  Row,
  Container, 
  Button,

} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
import {connect} from 'react-redux';
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

        var signupData = JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        });
        console.log("Username", this.state.username)
        console.log("email", this.state.email)
        console.log("password", this.state.password)
        const ctx = this;
      
        fetch(`http://192.168.43.236:3000/signup`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: signupData
        }
        ).then(function(res, err){
          return res.json()
        }).then(function(data){
        //   console.log(ctx.state)
          console.log("FETCH BACK (Data) : ", data);
        //   ctx.props.setUser(data.user.username, data.user.email, data.user.password)
        }).catch(function(err){
          console.log("Err",err)
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
                      <form>
                        <input type="login" id="login" className="fadeIn second" placeholder="Username" onChange={event=>this.setState({username:event.target.value})}/>
                        <input type="password" id="password" className="fadeIn third" placeholder="Password" onChange={event=>this.setState({password:event.target.value})}/>
                        <input type="emails" id="email" className="fadeIn second" placeholder="Email" onChange={event=>this.setState({email:event.target.value})}/>
                        <input type="submit" value="Register" onClick={this.handleClick}/>
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
    setUser(username, email, password) { 
      dispatch({
      type: 'setUser',
      username : username,
      email : email,
      password : password,
    }) 
   },
  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
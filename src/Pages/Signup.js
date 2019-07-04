import React from 'react';
import '../App.css';
import {
  Row,
  Container, 

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
        console.log("Click détecté")
        console.log('Inscription en cours...');

        var signupData = JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
        });
      
        const ctx = this;
      
        fetch(`http://10.2.3.230:3000/signup`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: signupData
        }
        ).then(function(res, err){
          return res.json()
        }).then(function(data){
        //   console.log(ctx.state)
          console.log("Data : ", data);
        //   ctx.props.handleUserValid(data.user.user, data.user.first_name, data.user.email, data.user.token)
        }).catch(function(err){
          console.log(err)
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
                        <input type="textLogin" id="login" className="fadeIn second" placeholder="Username" onChange={e=>this.setState({username:e.target.value})}/>
                        <input type="password" id="password" className="fadeIn third" placeholder="Password" onChange={e=>this.setState({password:e.target.value})}/>
                        <input type="textLogin" id="login" className="fadeIn second" placeholder="Email" onChange={e=>this.setState({email:e.target.value})}/>
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
   setUser(username, password,) { 
    dispatch({
    type: 'user',
    username : username,
    password : password,
  }) 
 },
  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
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
     username : "",
     password : "",
    };
    
  }

  handleClick = () => {
    console.log('click détecté !');
    
    console.log('Connexion en cours...');

    if(this.state.username.length === 0){
      return;
    }
    if(this.state.password.length === 0){
        return;
    }
    
    console.log("Username :", this.state.username)
    console.log("Password :", this.state.password)

    API.login(this.state.username, this.state.password).then(function(data){
        console.log("Data :", data.data)
        console.log("Data config :", data.data.config)
        localStorage.setItem('token', data.data.token);
        window.location = "/dashboard"
    },function(error){
        console.log(error);
        return;
    })
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
// function mapStateToProps(state) {
//   console.log("User (state)", state)
//    return ({
//     Users: state.Users,
//  })
//  }

//  function mapDispatchToProps(dispatch) {
//   return {
//     user(username, password, email, description, token) { 
//       dispatch({
//       type: 'user',
//       username : username,
//       password : password,
//       email : email,
//       description : description,
//       token : token,
//     }) 
//    },
//    setUser(username, password,) { 
//     dispatch({
//     type: 'user',
//     username : username,
//     password : password,
//   }) 
//  },
//   }
//  }
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default SignIn;
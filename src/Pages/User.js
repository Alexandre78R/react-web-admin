//Import de React
import React from 'react';

//Import de la liste des composent de reactstraps
import {
  Row,
  Container,  
} from 'reactstrap';

//Import du composent NavBar
import NavBar from '../Composent/NavBar'

//Import du composent SideBar
import SideBar from '../Composent/SideBar';

//Import du composent Link de react-router-dom
import { Redirect } from "react-router-dom";

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent du Footer
// import Footer from '../Composent/Footer';

class User extends React.Component {

  constructor() {
    super();

    this.state = {
      //State Redirection
      redirect: false,
    };
    
  }

  componentWillMount(){
    var ctx = this;
    //Vérif si la personne est bien connecté
    if (ctx.props.Users.text === undefined){
    ctx.setState({
      bgAlert: false,
      text : "",
      redirect : true,
    });
    }
  }

  render() {
    const { redirect } = this.state;

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
                <h1>User</h1>
               </Row>
             </Container>
             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}

//Récupération des infos avec Redux.
function mapStateToProps(state) {
  // console.log("NavBar Message props", state.Messages)
  console.log("NavBar User props", state.Users)
   return ({
    Messages: state.Messages,
    Users: state.Users,
 })
}

export default connect(mapStateToProps, null)(User);
//Import de React
import React from 'react';

//Import de la liste des composent pour reactstrap
import {
  Row,
  Container, 
  Col, 
  ListGroup,
  ListGroupItem,
  TabPane,
  TabContent,
  Card,
  Button,
  CardHeader,
  CardBody,
} from 'reactstrap';

//Import du composent de NavBar
import NavBar from '../../Composent/NavBar'

//Import du composent de SideBar
import SideBar from '../../Composent/SideBar';

//Import du composent du Footer
// import Footer from '../Composent/Footer';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent Link de react-router-dom
import { Link, Redirect } from "react-router-dom";


class Setting extends React.Component {

  constructor(props) {
    super(props);
    //On blind le toggle
    this.toggle = this.toggle.bind(this);
    
    //State pour activé la section visible par défault la première 
    this.state = {
      activeTab: "1",
    };
  }

  //Gestion d'affichage de la tap pour le toggle
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  componentWillMount = () => {
    // var ctx = this;
    // //Vérif si la personne est bien connecté sinon redirection de force sur la page de connexion
    // if (ctx.props.Users.text === undefined){
    // ctx.setState({
    //   bgAlert: false,
    //   text : "",
    //   redirect : true,
    // });
    // }
  }

  render() {
    const { redirect } = this.state;
    
    //Si le state redirect est true on redirige de force sur la page connexion
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
                <Card className="CardMenuProfil">
                  <CardHeader>
                  <i className="fas fa-cogs"></i> Setting 
                  </CardHeader>
                  <CardBody>
                  <ListGroup>
                      <ListGroupItem onClick={() => { this.toggle("1");}}>Profil</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle("2");}}>Paramètre</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle("3");}}>Vos Stats</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle("4");}}>Nouveau mot de passe</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle("5");}}>Déconnexion</ListGroupItem>
                  </ListGroup>
                  </CardBody>
                </Card>
                <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Card className="ContentProfil">
                    <CardHeader>
                      <i className="fas fa-user"></i> Profil {this.props.Users.username}
                    </CardHeader>
                    <CardBody>
                      <h4>Profil</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="2">
                  <Card className="ContentProfil">
                    <CardHeader>
                      <i className="fas fa-cog"></i> Paramètre 
                    </CardHeader>
                    <CardBody>
                      <h4>Paramètre</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="3">
                  <Card className="ContentProfil">
                    <CardHeader>
                      <i className="fas fa-info-circle"></i> Vos stats 
                    </CardHeader>
                    <CardBody>
                      <h4>Stats</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="4">
                  <Card>
                    <CardHeader className="panel-title">
                      <i className="fas fa-key"></i> Nouveau mot de passe
                    </CardHeader>
                    <CardBody className="panel-body">
                      <h4>Nouveau mot de passe</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="5">
                  <Card className="ContentProfil">
                    <CardHeader>
                     <i className="fas fa-sign-out-alt"></i> Déconnexion
                    </CardHeader>
                    <CardBody>
                      <h4>Déconnexion</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                </TabContent>

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
  console.log("Paramètre User props", state.Users)
   return ({
    Users: state.Users,
 })
}

export default connect(mapStateToProps, null)(Setting);

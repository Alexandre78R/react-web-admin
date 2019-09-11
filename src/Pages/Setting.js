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
import NavBar from '../Composent/NavBar'

//Import du composent de SideBar
import SideBar from '../Composent/SideBar';

//Import du composent du Footer
// import Footer from '../Composent/Footer';

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
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  render() {
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
                      <ListGroupItem onClick={() => { this.toggle("1");}}>Profils</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle("2");}}>Setting</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle("3");}}>Stats</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle("4");}}>New Password</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle("5");}}>Disconnection</ListGroupItem>
                  </ListGroup>
                  </CardBody>
                </Card>
                <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Card className="ContentProfil">
                    <CardHeader>
                      <i className="fas fa-user"></i> Profils 
                    </CardHeader>
                    <CardBody>
                      <h4>Profils</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="2">
                  <Card className="ContentProfil">
                    <CardHeader>
                      <i className="fas fa-cog"></i> Setting 
                    </CardHeader>
                    <CardBody>
                      <h4>Setting</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="3">
                  <Card className="ContentProfil">
                    <CardHeader>
                      <i className="fas fa-info-circle"></i> Stats 
                    </CardHeader>
                    <CardBody>
                      <h4>Stats</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="4">
                  <Card className="ContentProfil">
                    <CardHeader>
                      <i className="fas fa-key"></i> New Password 
                    </CardHeader>
                    <CardBody>
                      <h4>New Password</h4>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="5">
                  <Card className="ContentProfil">
                    <CardHeader>
                     <i className="fas fa-sign-out-alt"></i> Disconnection
                    </CardHeader>
                    <CardBody>
                      <h4>Disconnection</h4>
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

export default Setting;
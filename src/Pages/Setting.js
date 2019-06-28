import React from 'react';
import '../App.css';
import {
  Row,
  Container,  
  ListGroup,
  ListGroupItem,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardHeader,
  CardBody,
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
// import Footer from '../Composent/Footer';

class Setting extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

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
                      <ListGroupItem onClick={() => { this.toggle('1'); }}>Profils</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle('2'); }}>Setting</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle('3'); }}>Stats</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle('4'); }}>New Password</ListGroupItem>
                      <ListGroupItem onClick={() => { this.toggle('5'); }}>Disconnection</ListGroupItem>
                  </ListGroup>
                  </CardBody>
                </Card>
               </Row>
             </Container>

             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}

export default Setting;
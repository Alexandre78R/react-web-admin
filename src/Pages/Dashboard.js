import React from 'react';
import '../App.css';
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardText,
  CardFooter,
  
} from 'reactstrap';

import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
import Footer from '../Composent/Footer';

class Dashboard extends React.Component {

  render() {
    return (

      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid page">
               <Row>

                <Col xs="12" sm="6" xl="3">
                 <Card className="card text-white bg-primary o-hidden ">
                   <CardBody>
                      <div className="card-body-icon">
                       <i className="fas fa-fw fa-comments"></i>
                      </div>
                      <CardText>0 Messages</CardText>
                      </CardBody>
                      <CardFooter>
                        <a className="text-white" href="/message">
                          <span>View Details</span>
                          <span className="float-right">
                          <i className="fas fa-angle-right"></i>
                          </span>
                        </a>
                      </CardFooter>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6" xl="3">
                    <Card className="card text-white bg-warning o-hidden ">
                      <CardBody>
                       <div className="card-body-icon">
                        <i className="fas fa-fw fa-users"></i>
                      </div>
                      <CardText>0 Clients</CardText>
                      </CardBody>
                      <CardFooter>
                      <a className="text-white" href="/user">
                        <span>View Details</span>
                        <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                        </span>
                     </a>
                    </CardFooter>
                  </Card>
                </Col>

                <Col xs="12" sm="6" xl="3">
                  <Card className="card text-white bg-danger o-hidden">
                    <CardBody>
                      <div className="card-body-icon">
                        <i className="fas fa-fw fa-list"></i>
                      </div>
                      <CardText>0 Alerts</CardText>
                    </CardBody>
                    <CardFooter>
                    <a className="text-white" href="/alert">
                      <span>View Details</span>
                      <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </a>
                    </CardFooter>
                  </Card>
                </Col>

                <Col xs="12" sm="6" xl="3">
                  <Card className="card text-white bg-success o-hidden">
                    <CardBody>
                      <div className="card-body-icon">
                      <i className="fas fa-fw fa-comments"></i>
                      </div>
                      <CardText>0 Tchat Online</CardText>
                    </CardBody>
                    <CardFooter>
                    <a className="text-white" href="/dashboard#Fake">
                      <span>View Details</span>
                      <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </a>
                    </CardFooter>
                  </Card>
                </Col>

          </Row>
        </Container>
        <Footer/>
      </div>
    </div>
    );
  }
}

export default Dashboard;
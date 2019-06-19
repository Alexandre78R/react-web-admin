import React from 'react';
import '../App.css';
import {
  Row,
  Container,  
  Col,
  Card,
  CardBody,
  Button,
  Badge,
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
// import Footer from '../Composent/Footer';

class MessageView extends React.Component {

  render() {
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid">
                <Row>	

                    <Col md="9">
                        <Row>
                            <Col md="12">
                                <Card className = "messageView">
                                    <CardBody>
                                        <Row>  
                                            <Col md="12">
                                                <div className="news-title">
                                                    <h2>Object</h2>
                                                </div>
                                                <hr></hr>
                                                <div className="news-content">
                                                    <p>text jejef efejjnefke efekefjbekee ef fekiefnkfe kldjddkdckdd dckdndkddnkdd dkndkndcknccddcd cdkdncldc,dcdvd dvlsds,ld,dvdvvd kddnvkdvnef efkebkefnkeffef ekfebkefnefkefneffe fekfenefnefkefnee efefinefkefnekfef  kefbefkefef</p>
                                                </div>
                                                <hr></hr>
                                                <Button className="buttonTable" color="dark">#Tag</Button>
                                                <Button className="buttonTable" color="dark">#Tag</Button>
                                                <Button className="buttonTable" color="dark">#Tag</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="messageView" md="3">
                        <Row mb="2">
                            <Col md="12">
                                <Card>
                                    <Row>
                                        <Col md="12">
                                            <Card>
                                            <div className="cardheader">
                                                <div className="profile_pic">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmakotPhkt-QXqcTdpIhlKydHVpTqNDZ7p-IxcbwpEhBRUujwV"/>
                                                </div>
                                                </div>
                                                <div className="cardBody">
                                                    <div className="d-lfex justify-content-center flex-column">
                                                        <div className="name_container">
                                                            <div className="name">Alexandre</div>
                                                        </div>
                                                        <div className="address">Description</div>
                                                    </div>
                                                </div>
                                                <div class="like">
                                                    <Button className="like_btn" color="success">Likes</Button>
                                                    <Button className="like_btn" color="danger">Likes</Button>
                                                </div>
                                                <div className="footer">

                                                    <a className="view_profile" href="#1">
                                                        <div>View profile</div>
                                                    </a>
                                                    <a className="message" href="#2">
                                                        Message
                                                    </a>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Footer/> */}
                </Row>
             </Container>
          </div>
    </div>
    );
  }
}

export default MessageView;
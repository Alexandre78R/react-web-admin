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
                                                <div class="cardBody">
                                                    <div class="d-lfex justify-content-center flex-column">
                                                        <div class="name_container">
                                                            <div class="name">Alexandre</div>
                                                        </div>
                                                        <div class="address">Description</div>
                                                    </div>
                                                </div>
                                                <div class="like">
                                                    <Button class="like_btn" color="success">Likes</Button>
                                                    <Button class="like_btn" color="danger">Likes</Button>
                                                </div>
                                                <div class="footer">
                                                    <div class="view_profile">
                                                        View profile
                                                    </div>
                                                    <div class="message">
                                                        Message
                                                    </div>
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
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
import {connect} from 'react-redux';


class MessageView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          key : props.match.params.key,
          object : "",
          expediteur : "",
          date : "",
          message : "",
        };
    }
    // componentWillMount() {
    //     var list = this.props.Tables
    //     console.log("List", list)
    //     for (var i = 0; i < list.lenght; i++) {
    //         // console.log("List", list[i])
    //       if (this.state.key === list[i].key) {
    //         //   console.log("List", list[i])
    //           this.setState({
    //           object : list[i].object,
    //           expediteur : list[i].expediteur,
    //           date : list[i].date,
    //           message : list[i].message,
    //         })
    //         // console.log("message", list[i].message)
    //       }
    //     //   console.log("message", list[i].message)
    //     }
    //     console.log("message :", list[i].message)
    //     console.log("message state : ", this.state.message)
    //   }

    componentWillMount() {
        var list = this.props.Tables
        for (var i = 0; i < list.length; i++) {
          if (this.state.key === list[i].key) {
              this.setState({
                key : list[i].key,
                object : list[i].object,
                expediteur : list[i].expediteur,
                date : list[i].date,
                message : list[i].message
            })
          }
        }
      }

  render() {
//   :
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
                                                    <h2>{this.state.object}</h2>
                                                </div>
                                                <hr></hr>
                                                <div className="news-content">
                                                    <p>{this.state.message}</p>
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

function mapStateToProps(state) {
    console.log("Table::::", state) 
     return ({
      Tables: state.Tables,
   
   })
   }
  
   export default connect(mapStateToProps, null)(MessageView);
//Import de React
import React from 'react';

//Import de la liste des composents pour reactstrap
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardText,
  CardFooter,
  Alert,
  
} from 'reactstrap';

//Import du composent de la NavBar 
import NavBar from '../../Composent/NavBar'

//Import du composent de la SideBar 
import SideBar from '../../Composent/SideBar';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent Link de react-router-dom
import { Link, Redirect } from "react-router-dom";

//Import du composent du Footer
// import Footer from '../Composent/Footer';

//Import du composent API
import API from '../../utils/API';

class Dashboard extends React.Component {

  constructor() {
    super();

    this.state = {
      //State Redirection
      redirect: false,
      userCount : 0,
    };
    
  }

  componentWillMount(){
    var ctx = this;
    //Vérif si la personne est bien connecté sinon redirection de force sur la page de connexion
    if (ctx.props.Users.text === undefined){
    ctx.setState({
      bgAlert: false,
      text : "",
      redirect : true,
    });    
    }

    //On utilisate la fonction userCount pour savoir le nombr d'user que on a dans la BDD
    API.userCount()
    .then(function(data){
      console.log(data.data)
      ctx.setState({
        userCount : data.data.UserCount
      }); 
    })
    //En cas d'erreur un message dans la console
    .catch((err) => {
      console.log(err)
    })
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

              <Container className="container-fluid page">
              <Row>
              <Alert color="secondary" className="alertDashboard">
                {this.props.Users.text}
              </Alert>
                <Col xs="12" sm="6" xl="3">
                 <Card className="card text-white bg-primary o-hidden ">
                   <CardBody>
                      <div className="card-body-icon">
                       <i className="fas fa-fw fa-comments"></i>
                      </div>
                      <CardText>0 Messages</CardText>
                      </CardBody>
                      <CardFooter>
                        <Link className="text-white" to='/message'>
                          <span>View Details</span>
                          <span className="float-right">
                          <i className="fas fa-angle-right"></i>
                          </span>
                        </Link>
                      </CardFooter>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6" xl="3">
                    <Card className="card text-white bg-warning o-hidden ">
                      <CardBody>
                       <div className="card-body-icon">
                        <i className="fas fa-fw fa-users"></i>
                      </div>
                      <CardText>
                        {/* Si le nombre d'utilisateur égale à 1 on mais en singulier sinon si c'est en pluriel */}
                      {
                        this.state.userCount === 1 ?
                        `${this.state.userCount} Utilisateur`
                        :
                        `${this.state.userCount} Utilisateurs`
                      }
                      </CardText>
                      </CardBody>
                      <CardFooter>
                      <Link className="text-white" to='/user'>
                        <span>Liste des utilisateurs </span>
                        <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                        </span>
                     </Link>
                    </CardFooter>
                  </Card>
                </Col>

                <Col xs="12" sm="6" xl="3">
                  <Card className="card text-white bg-danger o-hidden">
                    <CardBody>
                      <div className="card-body-icon">
                        <i className="fas fa-fw fa-list"></i>
                      </div>
                      <CardText>
                        { this.props.Notes.notes.length <= 1 ?
                          `${this.props.Notes.notes.length} Note`
                          :
                          `${this.props.Notes.notes.length} Notes`
                        }
                      </CardText>
                    </CardBody>
                    <CardFooter>
                    <Link className="text-white" to='/note'>
                    { this.props.Notes.notes.length <= 1 ?
                      <span>Regarder votre note </span>
                      :
                      <span>Regarder vos notes</span>
                    }
                      <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </Link>
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
                    <Link className="text-white" to='/dashboard#Fake'>
                      <span>View Details</span>
                      <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </Link>
                    </CardFooter>
                  </Card>
                </Col>
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
    Notes : state.Notes,
 })
}

export default connect(mapStateToProps, null)(Dashboard);
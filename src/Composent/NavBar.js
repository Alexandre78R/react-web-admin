import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../utils/API.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    //On blind les fonctions pour utilisé partout this.
    this.disconnect.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      messageCount : 0,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  //Fonction décconnexion quand on appuis sur le button déconnectin.
  disconnect (event){
    //Apelle de la funtion logout qui se trouve dans le fichier API.
    API.logout();

    //Puis redirection sur la page de login.
    window.location = "/";
  }

  componentWillMount() {
    // console.log("message", this.props.Messages.length)
    // setTimeout(function() {
      // console.log(this.props.Messages)
      // for (var i = 0; i < this.props.Messages.length; i++) {
        // console.log("message", this.props.Messages.length)
          //   this.setState({
          //     messageCount : this.props.Messages.length,
          // })
      // }
        //   this.setState({
        //     messageCount : this.props.Messages.length,
        // })
        // this.props.Messages.map(
        //   (message, i) => {
        //      this.props.addCountMessage(i)
        //   }
        // );    
        // console.log("Message :", this.props.Messages)  
    // },1000)
  }

  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">En Développement</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-item dropdown no-arrow mx-1">
              <Link className="nav-link" to={'#'}>
                <span className="badge badge-danger">0</span>
                <i className="fas fa-bell fa-fw"></i>
              </Link>
            </NavItem>
            <NavItem className="nav-item dropdown no-arrow mx-1">
            <Link className="nav-link" to={'/message/'}>
              <span className="badge badge-danger">{this.state.messageCount}</span>
              <i className="fas fa-envelope fa-fw"></i>
            </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav >
              <i className="fas fa-user-circle fa-fw"></i> 
              </DropdownToggle>
              <DropdownMenu right>
              <h6 className="dropdown-header">Hi Mike Doe</h6>
              <DropdownItem>
              <a className="dropdown-item" href="/setting">Settings Admin</a>
              </DropdownItem>
              <DropdownItem>
              {/* Si un utilisateur est connecté on affiche le button déconnexion et s'il n'est pas co on lui affiche rien. */}
              {
                API.isAuth()===true ? 
                <Button
                onClick={this.disconnect}
                color="danger"
                >
                Se déconnecter
                </Button>
                :
                ""
              }
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

//Récupération des liste de messages avec Redux.
function mapStateToProps(state) {
    // console.log("Message::::", state.Messages) 
     return ({
      Messages: state.Messages,
   })
}
  
   export default connect(mapStateToProps, null)(NavBar);
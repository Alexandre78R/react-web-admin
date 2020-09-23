//Import de React
import React from 'react';

//Import du composent API
import ApiBackend from '../utils/ApiBackend.js';

//Import du composent API
import ApiLocalStorage from '../utils/ApiLocalStorage.js';

//Import de la liste de scomposents pour reactstrap
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

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent Link de react-router-dom
import { Link, Redirect } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      messageCount : 0,
      redirect: false,
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  //Fonction décconnexion quand on appuis sur le button déconnectin.
  disconnect = (event) => {
    //Apelle de la funtion logout qui se trouve dans le fichier API.
    ApiLocalStorage.logout();

    //Puis redirection sur la page de login.
    window.location = "/";
  }
  
// }
  componentWillMount = () => {
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
    if (ApiLocalStorage.isAuth()===true){
      console.log("Nav bar Note", "Tu est connecté !")
      console.log("Notes Redux --->", this.props.Notes)

      this.props.Notes.splice(0)

      //On réupère l'id de l'user avec le localStorage
      var idUser = localStorage.getItem("id")

      //On stcok l'id dans un objet 
      var sendViewNote = {
        idUser :  idUser
      }

      var ctx = this

      //On envoie les informations au backend pour avoir la liste des notes.
      ApiBackend.viewNote(sendViewNote)
        .then(function(data){
          console.log("viewNote Data -->", data.data)
          
          //On stock dans la variable les notes reçus du back
          var Notes = data.data.notes;

          ctx.props.setNotes(Notes)

          console.log("Notes DATA -->", Notes)
          //On stock dans la variable un map des notes

        })
        //En cas d'erreur un message dans la console
        .catch((err) => {
          console.log("viewNote Err", err)
        })
      }else(
        console.log("Nav Bar Note ---> ", "Tu n'es pas connecté")
      )
  }
  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="md">
        {/* On vérifie si la personne est bien connecté */}
        {
          ApiLocalStorage.isAuth()===true ? 
          <NavbarBrand className="titleNavBar"><Link className="titleNavBar" to={'/dashboard'}>En Développement</Link></NavbarBrand>
          :
          <NavbarBrand className="titleNavBar"><Link className="titleNavBar" to={'/'}>En Développement </Link></NavbarBrand>
        }
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-item dropdown no-arrow mx-1">
              {/* On vérifie si la personne est bien connecté */}
              {
                ApiLocalStorage.isAuth()===true ? 
                <Link className="nav-link" to={'#'}>
                  <span className="badge badge-danger">0</span>
                  <i className="fas fa-bell fa-fw"></i>
                </Link>
                :
                ""
              }
            </NavItem>
            <NavItem className="nav-item dropdown no-arrow mx-1">
            {/* On vérifie si la personne est bien connecté */}
            {
              ApiLocalStorage.isAuth()===true ? 
              <Link className="nav-link" to={'/message/'}>
                <span className="badge badge-danger">{this.state.messageCount}</span>
                <i className="fas fa-envelope fa-fw"></i>
              </Link>
              :
              ""
            }
            </NavItem>
            <NavItem className="nav-item dropdown no-arrow mx-1">
            {/* On vérifie si la personne est bien connecté */}
            {
              ApiLocalStorage.isAuth()===true ? 
              <Link className="nav-link" to={'/note'}>
                <span className="badge badge-danger">{this.props.Notes.length}</span>
                <i className="far fa-clipboard"></i>
              </Link>
              :
              ""
            }
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav >
              <i className="fas fa-user-circle fa-fw"></i> 
              </DropdownToggle>
              <DropdownMenu right>
              {/* On vérifie si la personne est bien connecté */}
              {
                ApiLocalStorage.isAuth()===true ? 
                <h6 className="dropdown-header">Bonjour {localStorage.getItem("user")},</h6>
                :
                <h6 className="dropdown-header">Pas encore inscrit ?</h6>
              }
              <DropdownItem>
              {/* On vérifie si la personne est bien connecté */}
              {
                ApiLocalStorage.isAuth()===true ? 
                <Link className="link-navbar-profil" to='/setting'>Paramètre</Link>
                :
                <Link className="link-navbar-profil" to='/signup'>Inscription</Link>
              }
              </DropdownItem>
              <DropdownItem>
              {/* On vérifie si la personne est bien connecté */}
              {
                ApiLocalStorage.isAuth()===true ? 
                <Button
                onClick={this.disconnect}
                color="danger"
                >
                Déconnexion
                </Button>
                :
                null
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

//Récupération des infos avec Redux.
function mapStateToProps(state) {
    // console.log("NavBar Message props", state.Messages)
    // console.log("NavBar User props", state.Users)
     return ({
      Messages: state.Messages,
      Users: state.Users,
      Notes: state.Notes,
   })
}

function mapDispatchToProps(dispatch) {
  return {
   //Recupération des infos des notes pour envoyer à redux
   setNotes(notes){
     dispatch({
       type : 'setNotes',
       notes : notes,
     })
   },
  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
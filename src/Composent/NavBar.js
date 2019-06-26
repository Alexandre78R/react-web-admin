import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
} from 'reactstrap';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      key : "",
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillMount() {
    var list = this.props.Messages
    console.log("Table", list)
    for (var i = 0; i < list.length; i++) {
          this.setState({
            key : i,
        })
    }
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
              <span className="badge badge-danger">{this.state.key === "" ? 0 : this.state.key }</span>
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
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

function mapStateToProps(state) {
    // console.log("Message::::", state.Messages) 
     return ({
      Messages: state.Messages,
   })
   }
  
   export default connect(mapStateToProps, null)(NavBar);
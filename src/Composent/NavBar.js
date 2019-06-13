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

import '../vendor/bootstrap/css/bootstrap.min.css';

import '../vendor/fontawesome-free/css/all.min.css';

import '../vendor/datatables/dataTables.bootstrap4.css';

import '../css/sb-admin.css';
// import './App.css';



class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">En Développement</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link" href="/alert">
              <span className="badge badge-danger">0</span>
                <i class="fas fa-bell fa-fw"></i>
              </a>
            </li>
            </NavItem>
            <NavItem>
              {/* <NavLink className="fas fa-envelope fa-fw" href="#"></NavLink> */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link" href="/message">
              <span className="badge badge-danger">0</span>
              <i className="fas fa-envelope fa-fw"></i>
              </a>
            </li>
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

export default NavBar;
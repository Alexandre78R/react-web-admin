//Import de React
import React from 'react';

//Import des composents de reactstraps
import {
    NavItem,
    Row,
    Container,
  } from 'reactstrap';

//Import du composent Link de react-router-dom
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return (
      
    <div>
        {/* <!-- Sidebar --> */}
        <ul className="sidebar navbar-nav">
        <NavItem active>
          <Link to='/dashboard' className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span> Dashboard</span>
          </Link>
        </NavItem>
        <NavItem>
        <Link to='/user' className="nav-link">
            <i className="fas fa-fw fa-users"></i>
            <span> User</span>
        </Link>
        </NavItem>
        </ul>
    </div>
    );
  }
}

export default SideBar;
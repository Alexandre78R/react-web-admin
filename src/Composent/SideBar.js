import React from 'react';

import {
    NavItem,
  } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../vendor/bootstrap/css/bootstrap.min.css';

import '../vendor/fontawesome-free/css/all.min.css';

import '../vendor/datatables/dataTables.bootstrap4.css';

import '../css/sb-admin.css';
// import './App.css';



class SideBar extends React.Component {
  render() {
    return (
    <div>
          {/* <!-- Sidebar --> */}
        <ul className="sidebar navbar-nav">
        <NavItem active>
            <a className="nav-link" href="/dashboard">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span> Dashboard</span>
            </a>
        </NavItem>
        <NavItem>
        <a className="nav-link" href="/users-page">
            <i className="fas fa-fw fa-users"></i>
            <span> User</span>
        </a>
        </NavItem>
        <NavItem>
        <a className="nav-link" href="/*">
            <i className="fas fa-fw fa-table"></i>
            <span> ...</span>
        </a>
        </NavItem>
        <NavItem>
        <a className="nav-link" href="/*">
            <i className="fas fa-fw fa-table"></i>
            <span> ...</span>
        </a>
        </NavItem>
        </ul>
    </div>
    );
  }
}

export default SideBar;
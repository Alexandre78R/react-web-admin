import React from 'react';

import {
    NavItem,
  } from 'reactstrap';

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
        <a className="nav-link" href="/user">
            <i className="fas fa-fw fa-users"></i>
            <span> User</span>
        </a>
        </NavItem>
        </ul>
    </div>
    );
  }
}

export default SideBar;
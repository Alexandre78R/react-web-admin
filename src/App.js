import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import NavBar from './Composent/NavBar'
import SideBar from './Composent/SideBar';
import Footer from './Composent/Footer';
import './App.css';
import Home from './Pages/Home';
import Alert from './Pages/Alert';
import Message from './Pages/Message';
import Setting from './Pages/Setting';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';




class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <SideBar/>
            <div className = "contenu">
              <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/alert" component={Alert}/>
              <Route path="/message" component={Message}/>
              <Route path="/setting" component={Setting}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/user" component={User}/>
              </Switch>
            </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import NavBar from './Composent/NavBar'
import SideBar from './Composent/SideBar';
import Footer from './Composent/Footer';
import './App.css';



class App extends React.Component {

  render() {
    return (
      <div>
      <NavBar/>
      <SideBar/>
      <p className = "contenu">Home</p>
      <Footer/>
      </div>
    );
  }
}

export default App;

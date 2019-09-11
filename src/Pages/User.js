//Import de React
import React from 'react';

//Import de la liste des composent de reactstraps
import {
  Row,
  Container,  
} from 'reactstrap';

//Import du composent NavBar
import NavBar from '../Composent/NavBar'

//Import du composent SideBar
import SideBar from '../Composent/SideBar';

//Import du composent du Footer
// import Footer from '../Composent/Footer';

class User extends React.Component {

  render() {
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid">
               <Row>
                <h1>User</h1>
               </Row>
             </Container>
             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}

export default User;
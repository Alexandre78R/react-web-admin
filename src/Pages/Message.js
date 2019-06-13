import React from 'react';
import '../App.css';
import {
  Row,
  Container,  
  Table,
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
import Footer from '../Composent/Footer';

class Message extends React.Component {

  render() {
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid page">
               <Row>
               <Table class="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Objet</th>
                <th scope="col">Expediteur</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><i class="fas fa-envelope"></i></td>
                <td>Contenue de l'objet</td>
                <td>Username</td>
                <td>jj/mm/yyyy</td>
              </tr>
              <tr>
                <td><i class="fas fa-envelope"></i></td>
                <td>Contenue de l'objet</td>
                <td>Username</td>
                <td>jj/mm/yyyy</td>
              </tr>
              <tr>
                <td><i class="far fa-envelope-open"></i></td>
                <td>Contenue de l'objet</td>
                <td>Username</td>
                <td>jj/mm/yyyy</td>
              </tr>
              <tr>
                <td><i class="far fa-envelope-open"></i></td>
                <td>Contenue de l'objet</td>
                <td>Username</td>
                <td>jj/mm/yyyy</td>
              </tr>
              <tr>
                <td><i class="fas fa-envelope"></i></td>
                <td>Contenue de l'objet</td>
                <td>Username</td>
                <td>jj/mm/yyyy</td>
              </tr>
              <tr>
                <td><i class="far fa-envelope-open"></i></td>
                <td>Contenue de l'objet</td>
                <td>Username</td>
                <td>jj/mm/yyyy</td>
              </tr>
              <tr>
                <td><i class="fas fa-envelope"></i></td>
                <td>Contenue de l'objet</td>
                <td>Username</td>
                <td>jj/mm/yyyy</td>
              </tr>
              <tr>
                <td><i class="far fa-envelope-open"></i></td>
                <td>Contenue de l'objet</td>
                <td>Username</td>
                <td>jj/mm/yyyy</td>
              </tr>
            </tbody>
          </Table>
               </Row>
             </Container>
             <Footer/>
          </div>
    </div>
    );
  }
}

export default Message;
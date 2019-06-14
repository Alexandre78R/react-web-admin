import React from 'react';
import '../App.css';
import {
  Row,
  Container,  
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
import Footer from '../Composent/Footer';

class Message extends React.Component {
  constructor() {
    
    super();

    this.state = {
      currentPage: 0,
    };
    
  }

  handleClick(e, index) {
    
    e.preventDefault();

    this.setState({
      currentPage: index
    });
    
  }
  render() {
    var messageData = [ 
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
      {object : "Object", expediteur : "Username", date : "jj/mm/yyyy"},
   ];
    
   this.dataSet = messageData.map(
    (messages, i) => {
      return <Messages messageObject={messages.object} messageNumber={i+1} messageExpediteur={messages.expediteur} messageDate={messages.date} key={i}/>;
    }
  );

    const { currentPage } = this.state;
    this.pageSize = 5
    this.pagesCount = Math.ceil(messageData.length / this.pageSize);

    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid page">
               <Row>
               <Table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"> ... </th>
                <th scope="col">Objet</th>
                <th scope="col">Expediteur</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            {this.dataSet
            .slice(
              currentPage * this.pageSize,
              (currentPage + 1) * this.pageSize
            )
            .map((data, i) => 
            <tbody>
                {data}
            </tbody>
            )}
            </Table>
                     
      <div className="pagination-wrapper pagination">
        
        <Pagination aria-label="Page navigation example">
          
          <PaginationItem disabled={currentPage <= 0}>
            
            <PaginationLink
              onClick={e => this.handleClick(e, currentPage - 1)}
              previous
              href="#"
            />
            
          </PaginationItem>

          {[...Array(this.pagesCount)].map((page, i) => 
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
            
            <PaginationLink
              onClick={e => this.handleClick(e, currentPage + 1)}
              next
              href="#"
            />
            
          </PaginationItem>
          
        </Pagination>
        
      </div>
               </Row>
             </Container>
             <Footer/>
          </div>
    </div>
    );
  }
}


class Messages extends React.Component {
  render() {
    return (
      <tr>
        
          <td><i class="fas fa-envelope"></i></td>
          <td>{this.props.messageObject}{this.props.messageNumber}</td>
          <td>{this.props.messageExpediteur}{this.props.messageNumber}</td>
          <td>{this.props.messageDate}</td>
        
      </tr>
    );
  }
}
export default Message;
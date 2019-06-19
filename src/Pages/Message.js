import React from 'react';
import '../App.css';
import {
  Row,
  Container,  
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Alert,
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
import Footer from '../Composent/Footer';
import {connect} from 'react-redux';

class Message extends React.Component {
  constructor() {
    
    super();
    this.state = {
      currentPage: 0,
      messageData : [ 
        {object : "Object1", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object2", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object3", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object4", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object5", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object6", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object7", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object8", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object9", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object10", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object11", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object12", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object13", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object14", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object15", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object16", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object17", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object18", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object19", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object20", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object21", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object22", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object23", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object24", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object25", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object26", expediteur : "Username", date : "jj/mm/yyyy"},
        {object : "Object27", expediteur : "Username", date : "jj/mm/yyyy"},
     ],
     Alertvisible: true,
    };
    
  }
  
  componentWillMount(){
      
   var message_boucle =   this.state.messageData.map(
        (message, i) => {

          // console.log("messageData2",message.object, message.expediteur, message.date)
           this.props.tab(message.object, message.expediteur, message.date)

          return (message_boucle)
        }
      );
    // return message_boucle;
    }
  
  handleClick(e, index) {
    
    e.preventDefault();
    this.setState({
      currentPage: index
    });
    
  }
  render() {

    const { currentPage } = this.state;
    this.pageSize = 4
    this.pagesCount = Math.ceil(this.props.Tables.length / this.pageSize);    

    this.dataSet = this.props.Tables.map(
      (message, i) => {
// console.log("Posiotion Tables", i)
// console.log(this.pagesCount)

        return (
          // <div>
          //   {console.log("PageSize", this.pagesCount, this.pageSize)}
          //   {(this.pagesCount == currentPage - 1) ?
            <tr>
            <td><i className="fas fa-envelope"></i></td>
            <td>{message.object}</td>
            <td>{message.expediteur}</td>
            <td>{message.date}</td>
            <td><Button color="danger" href = {'#' + (i + 1)} onClick= {() => this.props.deleteTab(i)}>Delete</Button></td>
            </tr>
            // :
            // <td><Button color="danger" href = {'#' + (i + 1)} onClick= {() => this.props.deleteTab(i)}>Delete</Button></td>
            // }
            // </div>
        )
      }
    );    

    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid page">
               <Row>
               <Table className="table table-hover">
               {this.pagesCount === 0 ? 
                <tbody>
                  <Alert color="danger" className = "bgAlert">
                    <p className = "textAlert"> Vous n'avez pas de messages !</p>
                    <a href="/message/" className="alert-link"> Refresh Page</a>
                  </Alert>
                </tbody>
                :
                <thead>
                  <tr>
                    <th scope="col"> <i className ="fas fa-envelope"></i> </th>
                    <th scope="col">Objet</th>
                    <th scope="col">Expediteur</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>              
                }
                {this.dataSet
                .slice(
                  currentPage * this.pageSize,
                  (currentPage + 1) * this.pageSize
                )
                .map((data, i) => 
                <tbody key={i}>
                    {data}
                </tbody>
                )}
            </Table>
        
            <Pagination aria-label="Page navigation example">
              
              {[...Array(this.pagesCount)].map((page, i) => 
                <PaginationItem  active={i === currentPage} key={i}>
                { i >= 29 ? 
                ""
                :
                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                {i + 1} 
                </PaginationLink>
                }
                </PaginationItem>
              )}
            </Pagination>
        
               </Row>
             </Container>
             <Footer/>
          </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("Table::::",state.Tables) 
   return ({
    Tables: state.Tables,
 
 })
 }

function mapDispatchToProps(dispatch) {
  return {
    tab(object, expediteur, date, position) { 
      dispatch({
      type: 'table',
      object : object,
      expediteur: expediteur,
      date: date,
    }) 
   },
    deleteTab(position) { 
      dispatch({
        type: 'deleteTable',
        position : position,
      }) 
    },
  }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Message);
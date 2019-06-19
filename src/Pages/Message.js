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
// import Footer from '../Composent/Footer';
import {connect} from 'react-redux';

class Message extends React.Component {
  constructor() {
    
    super();
    this.state = {
      currentPage: 0,
      messageData : [ 
        {object : "Object1", expediteur : "Username", date : "jj/mm/yyyy", message : "message1"},
        {object : "Object2", expediteur : "Username", date : "jj/mm/yyyy", message : "message2"},
        {object : "Object3", expediteur : "Username", date : "jj/mm/yyyy", message : "message3"},
        {object : "Object4", expediteur : "Username", date : "jj/mm/yyyy", message : "message4"},
        {object : "Object5", expediteur : "Username", date : "jj/mm/yyyy", message : "message5"},
        {object : "Object6", expediteur : "Username", date : "jj/mm/yyyy", message : "message6"},
        {object : "Object7", expediteur : "Username", date : "jj/mm/yyyy", message : "message7"},
        {object : "Object8", expediteur : "Username", date : "jj/mm/yyyy", message : "message8"},
        {object : "Object9", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {object : "Object10", expediteur : "Username", date : "jj/mm/yyyy", message : "message10"},
        {object : "Object11", expediteur : "Username", date : "jj/mm/yyyy", message : "message11"},
        {object : "Object12", expediteur : "Username", date : "jj/mm/yyyy", message : "message12"},
        {object : "Object13", expediteur : "Username", date : "jj/mm/yyyy", message : "message13"},
        {object : "Object14", expediteur : "Username", date : "jj/mm/yyyy", message : "message14"},
        {object : "Object15", expediteur : "Username", date : "jj/mm/yyyy", message : "message15"},
        {object : "Object16", expediteur : "Username", date : "jj/mm/yyyy", message : "message16"},
        {object : "Object17", expediteur : "Username", date : "jj/mm/yyyy", message : "message17"},
        {object : "Object18", expediteur : "Username", date : "jj/mm/yyyy", message : "message18"},
        {object : "Object19", expediteur : "Username", date : "jj/mm/yyyy", message : "message19"},
        {object : "Object20", expediteur : "Username", date : "jj/mm/yyyy", message : "message20"},
        {object : "Object21", expediteur : "Username", date : "jj/mm/yyyy", message : "message21"},
        {object : "Object22", expediteur : "Username", date : "jj/mm/yyyy", message : "message22"},
        {object : "Object23", expediteur : "Username", date : "jj/mm/yyyy", message : "message23"},
        {object : "Object24", expediteur : "Username", date : "jj/mm/yyyy", message : "message24"},
        {object : "Object25", expediteur : "Username", date : "jj/mm/yyyy", message : "message25"},
        {object : "Object26", expediteur : "Username", date : "jj/mm/yyyy", message : "message26"},
        {object : "Object27", expediteur : "Username", date : "jj/mm/yyyy", message : "message27"},
     ],
     Alertvisible: true,
    };
    
  }
  
  componentWillMount(){
      
   var message_boucle =   this.state.messageData.map(
        (message, i) => {

          // console.log("messageData2",message.object, message.expediteur, message.date)
           this.props.tab(message.object, message.expediteur, message.date, message.message)

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
            <td>
              <Button className = "buttonTable" color="success" href = {"/messageView/" + (i + 1)} onClick= {() => this.props.deleteTab(i)}>View</Button>
              <Button color="danger" href = {'#' + (i + 1)} onClick= {() => this.props.deleteTab(i)}>Delete</Button>
            </td>
            
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
             {/* <Footer/> */}
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
    tab(object, expediteur, date, message) { 
      dispatch({
      type: 'table',
      object : object,
      expediteur: expediteur,
      date: date,
      message : message,
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
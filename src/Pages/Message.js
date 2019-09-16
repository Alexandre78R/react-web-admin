//Import de React
import React from 'react';

//Import de la liste des composents de reactstrap
import {
  Row,
  Container,  
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

//Import du composent de la NavBar
import NavBar from '../Composent/NavBar'

//Import du composent de la SideBar
import SideBar from '../Composent/SideBar';

//Import du composent du Footer
// import Footer from '../Composent/Footer';

//Import du composent de connect de react-redux
import {connect} from 'react-redux';

//import du composent de Link de react-router-dom
import { Link, Redirect } from "react-router-dom";

class Message extends React.Component {
 
  constructor() {
    super();
    this.state = {
      //State  de nombre de page dans la pagination
      currentPage: 0,
      //State de la liste des messages
      messageData : [ 
        {key : "1", object : "Object1", expediteur : "Username", date : "jj/mm/yyyy", message : "message1"},
        {key : "2", object : "Object2", expediteur : "Username", date : "jj/mm/yyyy", message : "message2"},
        {key : "3", object : "Object3", expediteur : "Username", date : "jj/mm/yyyy", message : "message3"},
        {key : "4", object : "Object4", expediteur : "Username", date : "jj/mm/yyyy", message : "message4"},
        {key : "5", object : "Object5", expediteur : "Username", date : "jj/mm/yyyy", message : "message5"},
        {key : "6", object : "Object6", expediteur : "Username", date : "jj/mm/yyyy", message : "message6"},
        {key : "7", object : "Object7", expediteur : "Username", date : "jj/mm/yyyy", message : "message7"},
        {key : "8", object : "Object8", expediteur : "Username", date : "jj/mm/yyyy", message : "message8"},
        {key : "9", object : "Object9", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : "10", object : "Object10", expediteur : "Username", date : "jj/mm/yyyy", message : "message10"},
        {key : "11", object : "Object11", expediteur : "Username", date : "jj/mm/yyyy", message : "message11"},
        {key : "12", object : "Object12", expediteur : "Username", date : "jj/mm/yyyy", message : "message12"},
        {key : "13", object : "Object13", expediteur : "Username", date : "jj/mm/yyyy", message : "message13"},
        {key : "14", object : "Object14", expediteur : "Username", date : "jj/mm/yyyy", message : "message14"},
        {key : "15", object : "Object15", expediteur : "Username", date : "jj/mm/yyyy", message : "message15"},
        {key : "16", object : "Object16", expediteur : "Username", date : "jj/mm/yyyy", message : "message16"},
        {key : "17", object : "Object17", expediteur : "Username", date : "jj/mm/yyyy", message : "message17"},
        {key : "18", object : "Object18", expediteur : "Username", date : "jj/mm/yyyy", message : "message18"},
        {key : "19", object : "Object19", expediteur : "Username", date : "jj/mm/yyyy", message : "message19"},
        {key : "20", object : "Object20", expediteur : "Username", date : "jj/mm/yyyy", message : "message20"},
        {key : "21", object : "Object21", expediteur : "Username", date : "jj/mm/yyyy", message : "message21"},
        {key : "22", object : "Object22", expediteur : "Username", date : "jj/mm/yyyy", message : "message22"},
        {key : "23", object : "Object23", expediteur : "Username", date : "jj/mm/yyyy", message : "message23"},
        {key : "24", object : "Object24", expediteur : "Username", date : "jj/mm/yyyy", message : "message24"},
        {key : "25", object : "Object25", expediteur : "Username", date : "jj/mm/yyyy", message : "message25"},
        {key : "26", object : "Object26", expediteur : "Username", date : "jj/mm/yyyy", message : "message26"},
        {key : "27", object : "Object27", expediteur : "Username", date : "jj/mm/yyyy", message : "message27"},
     ],
     Alertvisible: true,
     redirect : false,
    };
    
  }
  // Dés que la page est charger il exucute cette boucle pour lire les messages et surtout d'envoyer à Redux
  componentWillMount(){
    var ctx = this;
    //Vérif si la personne est bien connecté
    if (ctx.props.Users.text === undefined){
      ctx.setState({
        bgAlert: false,
        text : "",
        redirect : true,
      });
    }
    this.state.messageData.map(
        (message, i) => {
          // console.log("messageData2",message.object, message.expediteur, message.date)
           this.props.addMessage(message.key, message.object, message.expediteur, message.date, message.message)
        }
      );
    // return message_boucle;
    }
  
  //Fonction pour la Pagination
  handleClick(e, index){
    
    e.preventDefault();
    this.setState({
      currentPage: index
    });
    
  }

  render() {
    const { redirect } = this.state;
    //Si elle n'est pas co on le redirige sur la page de connexion
    if (redirect === true) {
      return <Redirect to='/'/>;
    }

    const { currentPage } = this.state;
    // PageSize limité le nombre de message par page.
    this.pageSize = 6
    // PagesCount prend la totalité du nombre des messages dans la boucle et le divise.
    // Pour afficher le nombre de pagination qui à créer.
    this.pagesCount = Math.ceil(this.props.Messages.length / this.pageSize);    

    // Pour afficher les messages.
    this.dataSet = this.props.Messages.map(
      (message, i) => {
// console.log("Posiotion", i)
// console.log(this.pagesCount)
        return (
            <tr>
            <td><i className="fas fa-envelope"></i></td>
            <td>{message.object}</td>
            <td>{message.expediteur}</td>
            <td>{message.date}</td>
            <td>
              <Button className = "buttonTable" color="success"><Link className="textBtnTableMessage" to={'/messageView/' + (message.key)}>View</Link></Button>
              <Button className = "buttonTable" color="danger" onClick= {() => this.props.deleteMessage(i)}><Link className="textBtnTableMessage" to={'/message/#' + (message.key)}>Delete</Link></Button>
            </td>
            
            </tr>
        )
      }
    );    

    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid page ">
               <Row>
                    {/* Si il n'a pas de message tu me retirele titre */}
                    {this.pagesCount === 0 ? 
                    ""
                    :                
                    <Breadcrumb className="breadcrumbBg">
                      <BreadcrumbItem active>Liste des messages</BreadcrumbItem>
                    </Breadcrumb>
                    }

                  <Table className="table table-hover listMessage">
                    {/* Si il n'a pas de messages tu m'affiche le message "Vous n'avez pas de messages" */}
                    {/* Et si il y a des message tu m'afiche le tableau des messages. */}
                  {this.pagesCount === 0 ? 
                    <tbody>
                      <Alert color="danger" className = "bgAlert">
                        <p className = "textAlert"> Vous n'avez pas de messages !</p>
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
                    // Récupération des messages  pour la mise en place de la pagination. + affichage des message par la data.
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
                  {/* Affichage de la pagination */}
                  {[...Array(this.pagesCount)].map((page, i) => 
                    <PaginationItem  active={i === currentPage} key={i}>
                      {/* Condition si on dépase de 29 pages de la pagination on ne r'ajoute plus de pagination */}
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
 //Réccupération des Messages par Redux.
function mapStateToProps(state) {
  // console.log("Messages::::",state.Messages) 
  console.log("state", state)
   return ({
    Messages: state.Messages,
    Users : state.Users,
 })
 }

//Listes des fonction dispatch pour les messages
function mapDispatchToProps(dispatch) {
  return {
    // Ajout d'un message (Plutôt affichage actuellement.)
    addMessage(key, object, expediteur, date, message) { 
      dispatch({
      type: 'addMessage',
      key : key,
      object : object,
      expediteur: expediteur,
      date: date,
      message : message,
    }) 
   },
   //Funtion suppresision de message.
    deleteMessage(position) { 
      dispatch({
        type: 'deleteMessage',
        position : position,
      }) 
    },
  }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Message);
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
import NavBar from '../../Composent/NavBar'

//Import du composent de la SideBar
import SideBar from '../../Composent/SideBar';

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
        {key : '1', object : "Object1", expediteur : "Username", date : "jj/mm/yyyy", message : "message1"},
        {key : '2', object : "Object2", expediteur : "Username", date : "jj/mm/yyyy", message : "message2"},
        {key : '3', object : "Object3", expediteur : "Username", date : "jj/mm/yyyy", message : "message3"},
        {key : '4', object : "Object4", expediteur : "Username", date : "jj/mm/yyyy", message : "message4"},
        {key : '5', object : "Object5", expediteur : "Username", date : "jj/mm/yyyy", message : "message5"},
        {key : '6', object : "Object6", expediteur : "Username", date : "jj/mm/yyyy", message : "message6"},
        {key : '7', object : "Object7", expediteur : "Username", date : "jj/mm/yyyy", message : "message7"},
        {key : '8', object : "Object8", expediteur : "Username", date : "jj/mm/yyyy", message : "message8"},
        {key : '9', object : "Object9", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '10', object : "Object10", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '11', object : "Object11", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '12', object : "Object12", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '13', object : "Object13", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '14', object : "Object14", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '15', object : "Object15", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '16', object : "Object16", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '17', object : "Object17", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '18', object : "Object18", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '19', object : "Object19", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '20', object : "Object20", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '21', object : "Object21", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '22', object : "Object22", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '23', object : "Object23", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '24', object : "Object24", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '25', object : "Object25", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '26', object : "Object26", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '27', object : "Object27", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '28', object : "Object28", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '29', object : "Object29", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '3O', object : "Object30", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '31', object : "Object31", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '32', object : "Object32", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '33', object : "Object33", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '34', object : "Object34", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '35', object : "Object35", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '36', object : "Object36", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '37', object : "Object37", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '38', object : "Object38", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '39', object : "Object39", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '40', object : "Object40", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '41', object : "Object41", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '42', object : "Object42", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '43', object : "Object43", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '44', object : "Object44", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '45', object : "Object45", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '46', object : "Object46", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '47', object : "Object47", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '48', object : "Object48", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
        {key : '49', object : "Object49", expediteur : "Username", date : "jj/mm/yyyy", message : "message9"},
     ],
     Alertvisible: true,
     redirect : false,
    };
    
  }
  // Dés que la page est charger il exucute cette boucle pour lire les messages et surtout d'envoyer à Redux
  componentWillMount = () => {
    var ctx = this;

      //On stock dans la variable les messages
      var Messages = this.state.messageData;
  
      //On stock dans la variable un map des message
      var messagesData = Messages.map(message => {
        //Sa nous retourne les informations
        return {
          key : message.key,
          object : message.object,
          expediteur : message.expediteur,
          date : message.date,
          message : message.message,
        }
      })
      console.log("MessagesData", messagesData)

      //Envoi des infos des notes dans redux + fonctionnement de la variable
      ctx.props.setMessage(messagesData)
    }

  paginationCountNegatif = (e, count) => {
    e.preventDefault();
    this.setState({
      currentPage: this.state.currentPage-count
    })
  }
  
  paginationCountPositif = (e, count) => {
    e.preventDefault();
    this.setState({
      currentPage: this.state.currentPage+count
    })
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
                    {this.props.Messages.length === 0 ? 
                    ""
                    :                
                    <Breadcrumb className="breadcrumbBg">
                      <BreadcrumbItem active>Liste des messages</BreadcrumbItem>
                    </Breadcrumb>
                    }

                  <Table className="table table-hover listMessage">
                    {/* Si il n'a pas de messages tu m'affiche le message "Vous n'avez pas de messages" */}
                    {/* Et si il y a des message tu m'afiche le tableau des messages. */}
                  {this.props.Messages.length === 0 ? 
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
            
                <Pagination aria-label="Page navigation example" className='paginationCenter'>
                  {currentPage <= 2 ? 
                    <div>
                      {/* {console.log("Oui multi par 3", "CurrentPage", currentPage)} */}
                      <PaginationItem disabled>
                        <PaginationLink first/>
                      </PaginationItem>
                    </div>
                  : 
                    <div> 
                      {/* {console.log("Non multi par 3 ", 'CurrentPage', currentPage)} */}
                      <PaginationItem  onClick={e=> this.paginationCountNegatif(e,3)}>
                        <PaginationLink first/>
                      </PaginationItem>
                    </div>
                  }
                  {currentPage <= 0?
                    <div>
                      {/* {console.log('Oui Negatif', 'CurentPage', currentPage, ' PageCount', this.pagesCount)} */}
                      <PaginationItem disabled>
                        <PaginationLink previous/>
                      </PaginationItem>
                    </div>
                   :
                    <div>
                      {/* {console.log('Non negatif', 'CurrentPage', currentPage, 'PageCount', this.pagesCount)} */}
                      <PaginationItem onClick={e=> this.paginationCountNegatif(e,1)}>
                        <PaginationLink previous/>
                      </PaginationItem>
                    </div>
                   }
                  {currentPage <= 0?
                    <div>
                      {/* {console.log('Oui Negatif', 'CurentPage', currentPage, ' PageCount', this.pagesCount)} */}
                    </div>
                   :
                    <div>
                      {/* {console.log('Non negatif', 'CurrentPage', currentPage, 'PageCount', this.pagesCount)} */}
                      <PaginationItem>
                        <PaginationLink onClick={e=> this.paginationCountNegatif(e,1)}>
                          {currentPage+1 - 1}
                        </PaginationLink>
                      </PaginationItem>
                    </div>
                   }
                  {/* Affichage de la pagination */}
                  {[...Array(this.pagesCount)].map((page, i) => 
                    <div>
                      {/* {console.log('Current Dans Map', this.state.currentPage)} */}
                      <PaginationItem  active={currentPage+1} key={i}>
                      {/* Condition si on dépase de 29 pages de la pagination on ne r'ajoute plus de pagination */}
                      { i <= 0? 

                          <PaginationLink>
                          {currentPage+ 1} 
                          </PaginationLink>
                      :
                      ""
                      }
                      </PaginationItem>
                    </div>
                  )}
                  { this.pagesCount-1 <= currentPage ?
                    <div>
                    {/* {console.log("test oui", "pageSige", this.pagesCount, "currentPage", currentPage)} */}
                    </div>
                   :
                    <div>
                    {/* {console.log("test non", "pageSige", this.pagesCount, "currentPage", currentPage)} */}
                    <PaginationItem>
                      <PaginationLink  onClick={e=> this.paginationCountPositif(e,1)}>
                        {currentPage+1 + 1}
                      </PaginationLink>
                    </PaginationItem>
                    </div>
                  }
                  {this.pagesCount-1 <= currentPage ?
                    <div>
                      {/* {console.log("test oui", "pageSige", this.pagesCount, "currentPage", currentPage)} */}
                      <PaginationItem disabled>
                        <PaginationLink next/>
                      </PaginationItem>
                    </div>
                  :
                    <div>
                      {/* {console.log("test non", "pageSige", this.pagesCount, "currentPage", currentPage)} */}
                      <PaginationItem>
                        <PaginationLink next onClick={e=> this.paginationCountPositif(e,1)} />
                      </PaginationItem>
                    </div>
                  }
                  {  currentPage >= this.pagesCount-3 ? 
                    <div>
                      {/* {console.log("Oui Page count", "PagesCount- Button de fin", this.pagesCount-1, "CurrentPages - Button de fin", currentPage)} */}
                      <PaginationItem disabled>
                        <PaginationLink last/>
                      </PaginationItem>
                    </div>
                  :
                    <div>
                      {/* {console.log("Non page count","PagesCount- Button de fin", this.pagesCount-1, "CurrentPages - Button de fin", currentPage)}       */}
                      <PaginationItem>
                        <PaginationLink last onClick={e=> this.paginationCountPositif(e,3)}/>
                      </PaginationItem>
                    </div>          
                  }
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
    setMessage(messages) { 
      dispatch({
      type: 'setMessage',
      messages : messages,
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
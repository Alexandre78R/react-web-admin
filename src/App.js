//Import de React
import React from 'react';

//Import de la liste des composents de react-router-dom
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Import du CSS
import './App.css';

//Import des Pages 
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Note from './Pages/Note';
import Message from './Pages/Message';
import MessageView from './Pages/MessageView';
import Setting from './Pages/Setting';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';

//Import de Bootstrap (version non react donc standard)
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './vendor/datatables/dataTables.bootstrap4.css';

//Import du CSS de template
import './css/sb-admin.css';

//Import des Reducers pour redux
import Messages from './Composent/Reducer/ReducerMessages';
import Notes from './Composent/Reducer/ReducerNotes';
import Users from './Composent/Reducer/ReducerUsers';

//Import du composent Provider de React-Redux
import {Provider} from 'react-redux';

//Import de la liste des composents de  redux
import {createStore, combineReducers}  from 'redux';

//Import du composent PrivateRoute
import { PrivateRoute } from './Composent/PrivateRoute.js';

//Import du composent API
import API from './utils/API';

//Store de Redux
const store = createStore(combineReducers({Messages, Notes, Users}));

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      redirect: "",
    };
    
  }
  //! Désactiv pour le momment
  //Fonction de redirection sur la connexion si tu refresh la page
  // componentWillMount() {
  //   var ctx = this;
  //   console.log("refresh")

  //     // if(API.isAuth()===false){
  //     //   ctx.setState({
  //     //     redirect : true,
  //     //   });
  //     // }  
  // }

  render() {
    //!Désactivé pour le moment !
    // const { redirect } = this.state;

    // if (redirect === true) {
    //   return <Redirect to='/'/>;
    // }
    return (
      <Provider store={store}>
        <Router>
          <Switch>  
            {/* On peut accèder partout même si on n'est pas connecté. */}
            <Route exact path="/" component={Login}/>
            <Route exact path ="/signup" component={SignUp}/>

            {/* Par contre la si tu n'est pas connecté sa ne marcheras pas. */}
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path="/note" component={Note}/>
            <PrivateRoute path="/message" component={Message}/>
            <PrivateRoute path="/messageView/:key" component={MessageView}/>
            <PrivateRoute path="/setting" component={Setting}/>
            <PrivateRoute path="/user" component={User}/>
            
          </Switch>
        </Router>
      </Provider>
    );
  }
}

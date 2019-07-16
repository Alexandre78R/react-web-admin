import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Note from './Pages/Note';
import Message from './Pages/Message';
import MessageView from './Pages/MessageView';
import Setting from './Pages/Setting';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './vendor/datatables/dataTables.bootstrap4.css';
import './css/sb-admin.css';
import Messages from './Composent/Reducer/ReducerMessages';
import Notes from './Composent/Reducer/ReducerNotes';
import Users from './Composent/Reducer/ReducerUsers';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
import { PrivateRoute } from './Composent/PrivateRoute.js';
const store = createStore(combineReducers({Messages, Notes, Users}));


export default class App extends React.Component {

  render() {
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

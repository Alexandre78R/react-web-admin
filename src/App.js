import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import SignIn from './Pages/Signin';
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
const store = createStore(combineReducers({Messages, Notes, Users}));


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/SignUp" exact component={SignUp}/>
            <Route path="/note" component={Note}/>
            <Route path="/message" component={Message}/>
            <Route path="/messageView/:key" component={MessageView}/>
            <Route path="/setting" component={Setting}/>
            <Route path="/user" component={User}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import SignIn from './Pages/Signin';
import Alert from './Pages/Alert';
import Message from './Pages/Message';
import Setting from './Pages/Setting';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './vendor/datatables/dataTables.bootstrap4.css';
import './css/sb-admin.css';

import Tables from './Composent/Reducer.js';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
const store = createStore(combineReducers({Tables}));


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/alert" component={Alert}/>
            <Route path="/message" component={Message}/>
            <Route path="/message/:id:" component={Message}/>
            <Route path="/setting" component={Setting}/>
            <Route path="/user" component={User}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

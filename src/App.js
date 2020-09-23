//Import de React
import React from 'react';

//Import de la liste des composents de react-router-dom
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

//Import du CSS de template
import './css/sb-admin.css';

//Import de Bootstrap (version non react donc standard)
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/datatables/dataTables.bootstrap4.css';

import './vendor/fontawesome-free/css/all.min.css';

//Import du CSS
import './App.css';

//Import des Pages 
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/Signup';
import Forgotten from './Pages/Auth/Forgotten'
import Note from './Pages/Note/Note';
import Message from './Pages/Message/Message';
import MessageView from './Pages/Message/MessageView';
import Setting from './Pages/User/Setting';
import Dashboard from './Pages/User/Dashboard';
import User from './Pages/User/User';

//Import du composent PrivateRoute
import { PrivateRoute } from './Composent/PrivateRoute.js';

// //Store de Redux
// const store = createStore(combineReducers({Messages, Notes, Users}));

export default class App extends React.Component {

  render() {
    return (
      // <Provider store={store}>
        <Router>
          <Switch>  
            {/* On peut accèder partout même si on n'est pas connecté. */}
            <Route exact path="/" component={Login}/>
            <Route exact path ="/signup" component={SignUp}/>
            <Route exact path ="/forgotten" component={Forgotten}/>
            {/* Par contre la si tu n'est pas connecté sa ne marcheras pas. */}
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path="/note" component={Note}/>
            <PrivateRoute path="/message" component={Message}/>
            <PrivateRoute path="/messageView/:key" component={MessageView}/>
            <PrivateRoute path="/setting" component={Setting}/>
            <PrivateRoute path="/user" component={User}/>
          </Switch>
        </Router>
      // </Provider>
    );
  }
}

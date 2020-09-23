import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

//Import des Reducers pour redux
import Messages from './Composent/Reducer/ReducerMessages';
import Notes from './Composent/Reducer/ReducerNotes';
import Users from './Composent/Reducer/ReducerUsers';

//Import du composent Provider de React-Redux
import {Provider} from 'react-redux';

//Import de la liste des composents de  redux
import {createStore, combineReducers, compose, applyMiddleware}  from 'redux';

import thunkMiddleware from 'redux-thunk';

// Ajout des Reducer
const reducer = combineReducers({
    Messages : Messages,
    Notes : Notes,
    Users : Users,
});

//Store de REDUX
const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

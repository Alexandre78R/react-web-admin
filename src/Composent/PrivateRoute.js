//Import de React
import React from 'react';

//Import du composent API
import API from '../utils/API.js';

//Import des composent route et redirect de react-router-dom
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        var path = props.location.pathname;
        //Si tu n'est pas connecté tu ne peut pas accéder aux pages. (A par celle de connexion et d'inscription)
        if(API.isAuth()===false){
            return(<Redirect to='/' />)
        }
        else{
            return( <Component {...props} /> )
        }
    }} />
)
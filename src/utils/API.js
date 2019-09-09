import axios from 'axios';

//Stockage du Content-Type dans une variable.(Headers)
const headers = {
    'Content-Type': 'application/json'
}

//Stockage de l'url du backend dans une variable. (burl)
const burl = "http://192.168.43.236:3000"

export default {

    //Fonction login 
    login : function(username,password) {
        //Envois des information de connexion aux backend (username, password).
        return axios.post(burl + '/user/login',{
            'username' : username,
            'password' : password
        },{
            headers: headers
        })
    },
    
    //Fonction d'enregistrement 
    signup : function(send){
        //Envois des informations de l'enregistrement vers le backend.
        return axios.post(burl + '/user/signup',send,{headers: headers})
    },
    
    //Fonction pour voir si on est bien co avec le token.
    isAuth : function() {
        //Vérification si la personne à un token pour bien prendre en compte qu'il est connecté.
        return (localStorage.getItem('token') !== null);
    },

    //Fonction déconnexion.
    logout : function() {
        //A la déconnection on clear tous  qui se retrouve sans informations du compte.
        localStorage.clear();
    }
}
//Import du module axios
import axios from 'axios';

//Stockage du Content-Type dans une variable.(Headers)
const headers = {
    'Content-Type': 'application/json'
}

//Stockage de l'url du backend dans une variable. (burl)
const burl = "http://192.168.43.236:3000"

export default {

    //! Les functions pour l'utilisation des infos sur l'user

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

    //Fonction counter user
    userCount : function(){
        //Envois des informations de l'enregistrement vers le backend.
        return axios.post(burl + '/user/count',{headers: headers})
    },
    
    //Fonction  changement status de l'email vérification 
    emailVerifSatut : function(idUser) {
        return axios.post(burl + '/status/emailVerif',{
            'idUser' : idUser,
        },{
            headers: headers
        })
    },

    //Fonction  d'envoie d'email
    emailVerif : function(send) {
        return axios.post(burl + '/user/emailVerif',send,{headers: headers})
    },

    //Fonction demande de changement de mot de passe
    forgotten : function(username,email) {
        //Envois des information de connexion aux backend (username, password).
        return axios.post(burl + '/user/forgottenPassword',{
            'username' : username,
            'email' : email
        },{
            headers: headers
        })
    },

    //Fonction changement du nouveau mot de passe de l'utilsateur  
    newMdp : function(send) {
        //Envois des information de connexion aux backend (username, password).
        return axios.post(burl + '/user/newMdp',send,{headers: headers})
    },
    //! Fin des functions pour l'utilisation des infos sur l'user

    //! Les functions pour l'utilisation des infos sur les notes

    //Fonction del Note 
    delNote : function(idUser, position) {
        //Envois des information pour del la note de l'utilisateur
        return axios.post(burl + '/note/del',{
            'idUser' : idUser,
            'position' : position,
        },{
            headers: headers
        })
    },

    //Fonction d'ajout des notes
    addNote : function(send){
        //Envois des informations de la note pour l'ajout vers le backend.
        return axios.post(burl + '/note/add',send,{headers: headers})
    },

    //Fonction pour récupérer les notes de l'utilisateur
    viewNote : function(send){
        //Envois des infomatios au backend pour récupéré les notes de l'utilisateur 
        return axios.post(burl + '/note/view',send,{headers : headers})
    },

    //Fonction pour edit une note 
    editNote : function(send){
        return axios.post(burl + '/note/edit',send,{headers : headers})
    }

    //! Fin des functions pour l'utilisation des infos sur les notes
}
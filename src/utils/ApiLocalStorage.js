export default {
    
    //Fonction pour voir si on est bien connecté  avec le token.
    isAuth : function() {
        //Vérification si la personne à un token pour bien prendre en compte qu'il est connecté.
        return localStorage.getItem('token') !== null
    },

    //Fonction déconnexion.
    logout : function() {
        //A la déconnection on clear tous  qui se retrouve sans informations du compte.
        localStorage.clear();
    },

    addLocalStorageLogin : function(token, id, email, user){
        localStorage.setItem('token', token)
        localStorage.setItem('id', id)
        localStorage.setItem('email', email)
        localStorage.setItem('user', user)
    }
}
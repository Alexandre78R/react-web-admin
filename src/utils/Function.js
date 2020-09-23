export default {
    
    //Fonction récupérer la date du jour
    addDate : function() {
        var date = new Date();
        var message = "";

        //Condition pour ajouter un 0 quand t'es sous 10 (Comme pour la vraie date) du jour.
        if(date.getDate() < 10){
        message += "0" + date.getDate() + "/"
        }else{
        message += date.getDate() + "/"
        }

        //Condition pour ajouter un 0 quand t'es sous 10 (Comme pour la vraie date) du mois
        if(date.getMonth() <10){
        message += "0" + (date.getMonth() + 1) + "/";
        }else{
        message += (date.getMonth() + 1) + "/"
        }

        //Récupération de l'année actuelle.
        message += date.getFullYear() + " ";

        //On renvoie l'information
        return message;
    },

    //Fonction pour récupérer l'heure et les minutes
    addTemps : function(){
        var date = new Date();
        var message = "";

        //Condition pour ajouter un 0 quand t'es sous 10 (Comme pour la vraie heure)
        if(date.getHours() < 10){
        message += "0" + date.getHours() + "h";
        }else{
        message += date.getHours() + "h";
        }

        //Condition pour ajouter un 0 quand t'es sous 10 (Comme pour la vraie minutes)
        if(date.getMinutes() < 10){
        message += "0" + date.getMinutes();
        }else{
        message += date.getMinutes();
        }

        //On renvoie l'information
        return message;
    },
    
    //Function barProgress
    barProgress : function(tempsAttente,tempsChargement){
        setTimeout(function() {
            var elem = document.getElementById("myBar");  
            var width = 1;
            var id = setInterval(frame, ( tempsAttente / (100 + tempsChargement) ));
            function frame() {
              if (width >= 100) {
                clearInterval(id);
              } else {
                width++; 
                elem.style.width = width + '%'; 
                elem.innerHTML = width * 1  + '%';
              }
            }
        }, tempsChargement);  
    },
    
}
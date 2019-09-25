export default function(Messages = [], action){
        // console.log("Action Reducer -->",action)
        // console.log("TableContent -->",TableContent) 
        
        //On une copie  des messages.
        var MessageContentCopy = [...Messages]
        
        //Action suppression du messgae sélectionné.
        if (action.type === 'deleteMessage') {
          // console.log("action.position", action.position)
          
          //Suppression du message de la positon que on reçois.
          MessageContentCopy.splice(action.position,1);
          return MessageContentCopy

          //Action d'ajout de message (Sutout affichage pour l'instant)
        } else if(action.type === 'setMessage'){
          console.log("Action", action)
    
          //On stock dans la variable les infos de l'action
          var results = action.messages
      
          //On boucle l'action
          for (var i = 0; i < results.length; i++) {
            //On envois la copy
            MessageContentCopy.push(results[i])
          }
      
          return MessageContentCopy;

          }else{
            return Messages;
          }
        }
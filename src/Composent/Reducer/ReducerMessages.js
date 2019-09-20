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
        } else if(action.type === 'addMessage'){

            // Copy des messages que on envois.
            MessageContentCopy.push({
            key : action.key,
            object : action.object,
            expediteur: action.expediteur,
            date: action.date,
            message : action.message,
            })
            return MessageContentCopy

            //Action qui n'est pas utilisé pour l'instant.
          } else if(action.type === 'addCountMessage'){
            // action.i++
            return Messages
            
          }else{
            return Messages;
          }
        }
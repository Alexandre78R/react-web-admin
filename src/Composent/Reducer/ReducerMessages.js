export default function(MessageContent = [], action){
        // console.log("Action Reducer -->",action)
        // console.log("TableContent -->",TableContent) 

        var MessageContentCopy = [...MessageContent]

        if (action.type === 'deleteMessage') {
            // console.log("action.position", action.position)
          MessageContentCopy.splice(action.position,1);
          return MessageContentCopy
        } else if(action.type === 'addMessage'){
            MessageContentCopy.push({
            key : action.key,
            object : action.object,
            expediteur: action.expediteur,
            date: action.date,
            message : action.message,
            })
            return MessageContentCopy
          } else if(action.type === 'viewMessage'){
            return MessageContentCopy
          } else {
            return MessageContentCopy;
          }
        }
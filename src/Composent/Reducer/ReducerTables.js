export default function(TableContent = [], action){
        // console.log("Action Reducer -->",action)
        // console.log("TableContent -->",TableContent) 

        var TableContentCopy = [...TableContent]

        if (action.type === 'deleteTable') {
            // console.log("action.position", action.position)
          TableContentCopy.splice(action.position,1);
        //   console.log("TableContentCopy - deleteTable", TableContentCopy)
          return TableContentCopy

        } else if(action.type === 'table'){
            // var TableContentCopy = [...TableContent]

            TableContentCopy.push({
            key : action.key,
            object : action.object,
            expediteur: action.expediteur,
            date: action.date,
            message : action.message,
            })

            // console.log("TableContentCopy - table", TableContentCopy)
            return TableContentCopy

          } else {

            return TableContent;
          }
        }
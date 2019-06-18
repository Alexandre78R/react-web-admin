export default function(TableContent = [], action){
        // console.log("Action Reducer -->",action)
        console.log("TableContent -->",TableContent) 

        

        if (action.type === 'deleteTable') {
            console.log("action.position", action.position)
            var TableContentCopy = [...TableContent]
          TableContentCopy.splice(action.position,1);
        //   console.log("TableContentCopy - deleteTable", TableContentCopy)
          return TableContentCopy

        } else if(action.type === 'table'){
            var TableContentCopy = [...TableContent]

            TableContentCopy.push({
            object : action.object,
            expediteur: action.expediteur,
            date: action.date,
            })

            console.log("TableContentCopy - table", TableContentCopy)
            return TableContentCopy

          } else {

            return TableContent;
          }
        }
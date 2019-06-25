export default function(NoteContent = [], action){

        var NoteContentCopy = [...NoteContent]
        if (action.type === 'deleteNote') {

          NoteContentCopy.splice(action.position,1);
          //   console.log("NoteContentCopy - deleteNote", NoteContentCopy)
            return NoteContentCopy

        } else if(action.type === 'addNote'){
            
            NoteContentCopy.push({
              title : action.title,
              note : action.note,
              })
              return NoteContentCopy;
                
        } else if(action.type === 'editNote'){
          // console.log("position ::: ", action.position)
          // console.log("title :::", action.title)
          // console.log("note :::", action.note)

          NoteContentCopy.splice(action.position, 1, ({
            title : action.title,
            note : action.note,
            }))

          return NoteContentCopy
        }else {
          
          return NoteContent;
        }
      }
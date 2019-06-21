export default function(NoteContent = [], action){

        var NoteContentCopy = [...NoteContent]
        if (action.type === 'deleteNote') {

          NoteContentCopy.splice(action.position,1);
          //   console.log("NoteContentCopy - deleteNote", NoteContentCopy)
            return NoteContentCopy

        } else if(action.type === 'note'){
            
            NoteContentCopy.push({
              title : action.title,
              note : action.note,
              })
              return NoteContentCopy;
          } else {

            return NoteContent;
          }
        }
export default function(NoteContent = [], action){

        //Action suppression de la note
        if (action.type === 'deleteNote') {

          // //Action suppression de la note avec la position.
          // NoteContentCopy.splice(action.position,1);

          // //   console.log("NoteContentCopy - deleteNote", NoteContentCopy)
            // return NoteContentCopy
        //Action d'une nouvelle note.
        } else if(action.type === 'addNote'){
            
            // //On envoie les infomations de la note.
            // NoteContentCopy.push({
            //   title : action.title,
            //   note : action.note,
            //   date : action.date,
            //   temps : action.temps,
            //   color : action.color,
            //   })
            //   return NoteContentCopy;
        }else if (action.type === 'setNotes') {
            // console.log("Action (NotesReducers)", action)

            //On fait une copie des Note qu'on stock dans une variable "NoteContentCopy".
            var NoteContentCopy = [...NoteContent]
            //On fait une copie des données de l'utilisateur
              NoteContentCopy = {
                notes : action.notes,
              }
              console.log("NotesCopy", NoteContentCopy)
            return NoteContentCopy
        //Action de la modification de la note.
        } else if(action.type === 'editNote'){
          // console.log("position ::: ", action.position)
          // console.log("title :::", action.title)
          // console.log("note :::", action.note)
          
          //On supprime l'ancienne note avec la possition et on la renplace directement par les nouvelles informations.
          // NoteContentCopy.splice(action.position, 1, ({
          //   title : action.title,
          //   note : action.note,
          //   date :  action.date,
          //   temps : action.temps,
          //   color : action.color,
          //   }))

          // return NoteContentCopy
        }else {
          
          return NoteContent;
        }
      }
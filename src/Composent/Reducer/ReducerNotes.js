export default function(Notes = [], action){

  console.log("Console Log reducer Notes ---> ", Notes)
  console.log("Console Log reducer Notes Actions ---> ", action.type)
  //On fait une copie des Note qu'on stock dans une variable "NoteContentCopy".
  var NoteContentCopy = [...Notes]

  //Action suppression de la note
  if (action.type === 'deleteNote') {
    //Action suppression de la note avec la position.
    NoteContentCopy.splice(action.position,1);
    //   console.log("NoteContentCopy - deleteNote", NoteContentCopy)
      return NoteContentCopy

  //Action d'une nouvelle note.
  } else if(action.type === 'setNotes'){
    console.log("Action", action)
    
    //On stock dans la variable les infos de l'action
    var results = action.notes

    //On boucle l'action
    for (var i = 0; i < results.length; i++) {
      //On envois la copy
      NoteContentCopy.push(results[i])
    }

    return NoteContentCopy;

  //Action d'une nouvelle note.
  } else if(action.type === 'addNote'){
    //On envoie les infomations de la note.
    NoteContentCopy.push({
      title : action.title,
      note : action.note,
      date : action.date,
      temps : action.temps,
      color : action.color,
      })
      return NoteContentCopy;

  //Action de la modification de la note.
  } else if(action.type === 'editNote'){

    //On supprime l'ancienne note avec la possition et on la renplace directement par les nouvelles informations.
    NoteContentCopy.splice(action.position, 1, ({
      title : action.title,
      note : action.note,
      date :  action.date,
      temps : action.temps,
      color : action.color,
      }))

    return NoteContentCopy
    
  }else {
    return Notes;
  }
}
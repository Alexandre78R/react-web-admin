export default function(Users = [], action){
  if (action.type === 'setUser') {
      console.log("Action (UserReducers)", action)
      //On fait une copie des données de l'utilisateur
        var UserCopy = {
          id : action.id,
          text : action.text,
          username : action.username,
          password : action.password,
          email : action.email,
          description : action.description,
        }
        console.log("UserCopy", UserCopy)
      return UserCopy
  }else{
    // console.log("ERROR reducerUSER")
    return Users;
  }
}
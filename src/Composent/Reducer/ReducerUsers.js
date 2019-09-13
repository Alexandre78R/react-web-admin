export default function(UserContent = [], action){

    // var UserContentCopy = [...UserContent]
    if (action.type === 'setUser') {
        console.log("Action (UserReducers)", action)
        var UserCopy = {
            username : action.username,
            password : action.password,
            email : action.email,
            description : action.description,
          }
          console.log("UserCopy", UserCopy)
        return UserCopy
    }else{
      // console.log("ERROR reducerUSER")
      return UserContent;
    }
  }
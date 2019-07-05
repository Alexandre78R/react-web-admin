export default function(UserContent = [], action){

    // var UserContentCopy = [...UserContent]
    if (action.type === 'setUser') {
        // console.log("Action (UserReducers)", action)
        var UserCopy = {
            username : action.username,
            email : action.email,
            password : action.password,
          }
          console.log("UserCopy", UserCopy)
        return UserCopy
    }else{
      return UserContent;
    }
  }
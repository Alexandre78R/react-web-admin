export default function(UserContent = [], action){

    // var UserContentCopy = [...UserContent]
    if (action.type === 'setUser') {
        // console.log("Action (UserReducers)", action)
        var UserCopy = {
            username : action.username,
            password : action.password,
          }
          console.log("UserCopy", UserCopy)
        return UserCopy
    }else if (action.type === 'user'){
        var UserContentCopy = [...UserContent]
        UserContentCopy.push({
            username : action.username,
            password : action.password,
            email : action.email,
            description : action.description,
            token : action.token,
            })
            return UserContentCopy;
    }else{
      return UserContent;
    }
  }
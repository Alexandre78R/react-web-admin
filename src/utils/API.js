import axios from 'axios';
const headers = {
    'Content-Type': 'application/json'
}
const burl = "http://192.168.43.236:3000"

export default {
    login : function(username,password) {
        return axios.post(burl + '/user/login',{
            'username' : username,
            'password' : password
        },{
            headers: headers
        })
    },
    signup : function(send){
        return axios.post(burl + '/user/signup',send,{headers: headers})
    },
    
    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },
    logout : function() {
        localStorage.clear();
    }
}
import {createContext} from 'react'

const AuthContext = createContext({
    loggedIn: false,
    userId: null,
    token: null,
    login: ()=>{},
    logout: ()=>{}
});


export default AuthContext;
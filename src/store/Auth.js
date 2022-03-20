import { createContext } from "react";
import { useState } from 'react'

const initialState  = {
    user : null , 
    setUser : (data) => {} , 
    logout : () => {} ,
    isLoggedIn : false  
}

export const AuthContext = createContext(initialState)

export default function AuthProvider({ children }){

    const [ user , setUser ] = useState(null) ;
    const [ isLoggedIn , setIsLoggedIn ] = useState(false) 

    const setUserInfo = ({ id , role , jobTitle , avatar , email }) => {
            setUser({
                id , avatar , email , jobTitle , role 
            }) ; 
            setIsLoggedIn( true )
    }

    const logout = () => {
        setUser( initialState )
    }

    const getUser = () => user ; 


    return (
        <AuthContext.Provider value={{ user , setUser , logout , isLoggedIn }}>
            { children }
        </AuthContext.Provider>
    )

} 
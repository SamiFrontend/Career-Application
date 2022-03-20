import { createContext } from "react";
import { useState } from 'react'

const initialState  = {
    show : false , 
    Message : '' , 
    removeNotification  : () => {} , 
    showMessage : ( message ) => {}
}

export const NotificationContext = createContext(initialState)

export default function NotificationProvider({ children }){

    const [ show , setShow ] = useState(false) ;
    const [ Message , setMessage  ] = useState('') ;

    const removeNotification = () => {
            setShow(false)
            setMessage('')
    }; 

    const showMessage = ( message ) => {
        setMessage(message)
        setShow(true)
    }

    return (
        <NotificationContext.Provider value={{ show , removeNotification , Message , showMessage }}>
            { children }
        </NotificationContext.Provider>
    )

} 
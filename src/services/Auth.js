import axios from "axios"
import { API_LINK } from "./conections"
import AsyncStorage from "@react-native-async-storage/async-storage" ; 

const endpoint = "/users/" ; 

export const login = (email) => {
    return axios.get(API_LINK + endpoint + '?email=' + email )
}


export const register = (data) => {
    return axios.post(API_LINK + endpoint , data)
}


const KEY_NAME_STORAGE = "user" ; 

export const saveUserData = async (data) => {
    await AsyncStorage.setItem(KEY_NAME_STORAGE , JSON.stringify( data ))
}


export const getUserData = async () => {
    return await AsyncStorage.getItem(KEY_NAME_STORAGE) ; 
}

export const Logout = async () => {
    await AsyncStorage.removeItem(KEY_NAME_STORAGE )
}
import axios from "axios"
import { API_LINK } from "./conections"

const endpoint = "/requests/" ; 

export const ApplyToJob = (data) => {
    return axios.post(API_LINK + endpoint , data) ; 
}



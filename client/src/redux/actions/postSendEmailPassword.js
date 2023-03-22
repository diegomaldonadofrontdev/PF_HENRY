import axios from "axios";
import { POST_SEND_EMAIL_PASSWORD } from './types'

export function postSendEmailPassword(payload) {
    return async function(dispatch){
        const post = await axios.post('clients/resetPassword',payload)
        return post;
    }
    
}
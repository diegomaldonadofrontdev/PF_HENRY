import axios from "axios";
import { POST_SEND_EMAIL_PASSWORD } from './types'

export function postSendEmailPasswordTrades(payload) {
    return async function(dispatch){
        const post = await axios.post('trades/resetPassword',payload)
        return post;
    }
    
}
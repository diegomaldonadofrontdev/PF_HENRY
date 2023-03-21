import axios from "axios";

export function postNewPasswordTrades(payload,token) {
    return async function(dispatch){
        const post = await axios.post(`trades/newPassword/${token}`,payload)
        return post;
    }
    
}
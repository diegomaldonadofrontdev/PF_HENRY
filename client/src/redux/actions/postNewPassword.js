import axios from "axios";

export function postNewPassword(payload,token) {
    return async function(dispatch){
        const post = await axios.post(`clients/newPassword/${token}`,payload)
        return post;
    }
    
}
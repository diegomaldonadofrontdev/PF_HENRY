import axios from "axios";

export function postCategory(payload) {
    return async function(dispatch){
        const post = await axios.post(`superadmins/newCategory`,payload)
        return post;
    }
    
}
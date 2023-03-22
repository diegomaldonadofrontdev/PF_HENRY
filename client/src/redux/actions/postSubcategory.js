import axios from "axios";

export function postSubcategory(payload) {
    return async function(dispatch){
        const post = await axios.post(`superadmins/newSubcategory`,payload)
        return post;
    }
    
}
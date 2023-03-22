import axios from "axios";

export function postSubcategory(payload) {
    const { subcategory, category } = payload
    return async function(dispatch){
        const post = await axios.post(`superadmins/newSubcategory`,payload)
        return post;
    }
    
}
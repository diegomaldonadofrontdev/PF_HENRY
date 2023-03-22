import axios from "axios";

export function postProductCategory(payload) {
    return async function(dispatch){
        console.log(payload);
        const post = await axios.post(`superadmins/newCategoryProducts`,payload)
        return post;
    }
    
}
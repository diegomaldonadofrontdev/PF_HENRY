import axios from "axios";

export function postDeliveryZone(payload) {
    return async function(dispatch){
        const post = await axios.post(`superadmins/newDeliveryZone`,payload)
        return post;
    }
    
}
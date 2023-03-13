import axios from "axios";
// const baseUrl = "http://localhost:3001/users/siginWhitGoogle";
const baseUrl = "http://localhost:3001/clients/siginWhitGoogle";

const siginWhitGoogle = async credentials => {
    try {
        const { data } = await axios.post(baseUrl, credentials);
    return data;
    } catch (error) {
        console.error(error);
    }
}

export default siginWhitGoogle;
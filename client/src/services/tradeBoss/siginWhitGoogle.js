import axios from "axios";
const baseUrl = "http://localhost:3001/tradeboss/siginWhitGoogle";

const siginWhitGoogle = async credentials => {
    try {
        const {data} = await axios.post(baseUrl, credentials);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default siginWhitGoogle;
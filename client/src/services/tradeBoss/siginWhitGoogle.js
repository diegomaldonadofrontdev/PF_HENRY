import axios from "axios";

const siginWhitGoogle = async credentials => {
    try {
        const {data} = await axios.post("/tradeboss/siginWhitGoogle", credentials);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default siginWhitGoogle;
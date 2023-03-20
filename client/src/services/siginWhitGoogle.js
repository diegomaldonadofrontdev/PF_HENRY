import axios from "axios";

const siginWhitGoogle = async credentials => {
    try {
        const { data } = await axios.post("/clients/siginWhitGoogle", credentials);

        //     [{dataUser},{token}]
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default siginWhitGoogle;
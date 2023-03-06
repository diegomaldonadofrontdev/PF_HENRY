import axios from "axios";
const baseUrl = "http://localhost:3001/users/sigin";

const sigin = async credentials => {
    const { data } = await axios.post(baseUrl, credentials);
    return data;
}

export default sigin;
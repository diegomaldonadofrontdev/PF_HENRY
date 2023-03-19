import axios from "axios";
const baseUrl = "http://localhost:3001/tradeboss/register";

const sigin = async credentials => {
    try {
        const { data } = await axios.post(baseUrl, credentials);
        return data;
    } catch (error) {
        alert("Por favor complete todos los campos!")
    }
}

export default sigin;
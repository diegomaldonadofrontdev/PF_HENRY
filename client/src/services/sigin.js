import axios from "axios";
// const baseUrl = "http://localhost:3001/users/sigin";
const baseUrl = "http://localhost:3001/clients/register";

const sigin = async credentials => {
    try {
        const { data } = await axios.post(baseUrl, credentials);
    return data;
    } catch (error) {
        alert("Por favor complete todos los campos!")
        // console.error(error);
    }
}

export default sigin;
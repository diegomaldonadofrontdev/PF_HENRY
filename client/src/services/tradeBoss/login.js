import axios from "axios";
const baseUrl = "http://localhost:3001/tradeboss/login";

const login = async credentials => {
    try {
        const { data } = await axios.post(baseUrl, credentials);
        return data;
    } catch (error) {
        alert("Usuario o contraseña incorrector!")
    }
}

export default login;
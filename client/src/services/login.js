import axios from "axios";
const baseUrl = "http://localhost:3001/users/login";

const login = async credentials => {
    try {
        const { data } = await axios.post(baseUrl, credentials);
        return data.token;
    } catch (error) {
        // alert("Usuario o contraseña incorrectos!")
        console.error(error);
    }
}

export default login;
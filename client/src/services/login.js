import axios from "axios";
// const baseUrl = "http://localhost:3001/users/login";
const baseUrl = "http://localhost:3001/clients/login";

const login = async credentials => {
    try {
        const { data } = await axios.post(baseUrl, credentials);

        //     [{dataUser},{token}]
        return data;
    } catch (error) {
        alert("Usuario o contraseña incorrectos!")
    }
}

export default login;
import axios from "axios";

const login = async credentials => {
    try {
        const { data } = await axios.post("/tradeboss/login", credentials);
        return data;
    } catch (error) {
        alert("Usuario o contraseña incorrector!")
    }
}

export default login;
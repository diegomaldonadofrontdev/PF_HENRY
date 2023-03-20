import axios from "axios";

const login = async credentials => {
    try {
        const { data } = await axios.post("/trades/login", credentials);

        //     [{dataUser},{token}]
        return data;
    } catch (error) {
        alert("Usuario o contraseña incorrectos!")
    }
}

export default login;
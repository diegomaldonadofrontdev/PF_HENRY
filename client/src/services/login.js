import axios from "axios";
import swal from "sweetalert";

const login = async credentials => {
    try {
        const { data } = await axios.post("/clients/login", credentials);

        //     [{dataUser},{token}]
        return data;
    } catch (error) {
        swal({
            title: "Error!",
            text: "Usuario o contraseña incorrectos",
            icon: "error",
            button: "Ok",
        });
    }
}

export default login;
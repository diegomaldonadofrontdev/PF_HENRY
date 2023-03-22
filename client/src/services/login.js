import axios from "axios";
import swal from "sweetalert";

const login = async credentials => {
    try {
        const { data } = await axios.post("/clients/login", credentials);

        //     [{dataUser},{token}]
        return data;
    } catch (error) {
        // error.response.data.error
        swal({
            title: "Error!",
            text: "Usuario o contraseña incorrectas, pro favor verifica los datos",
            icon: "error",
            button: "Ok",
        });
    }
}

export default login;
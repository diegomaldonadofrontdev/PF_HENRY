import axios from "axios";
import swal from "sweetalert";

const sigin = async credentials => {
    try {
        const { data } = await axios.post("/clients/register", credentials);

        //     [{dataUser},{token}]
        return data;
    } catch (error) {
        // error.response.data.error
        	swal({
				title: "Error!",
				text: "Ya existe el usuario, por favor inicia sesion",
				icon: "error",
				button: "Ok",
			});
    }
}

export default sigin;
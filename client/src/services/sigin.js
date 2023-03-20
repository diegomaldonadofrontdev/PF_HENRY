import axios from "axios";

const sigin = async credentials => {
    try {
        const { data } = await axios.post("/clients/register", credentials);

        //     [{dataUser},{token}]
        return data;
    } catch (error) {
        alert("Por favor complete todos los campos!")
        // console.error(error);
    }
}

export default sigin;
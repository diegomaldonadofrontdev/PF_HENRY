import axios from "axios";

const sigin = async credentials => {
    try {
        const { data } = await axios.post("/tradeboss/register", credentials);
        return data;
    } catch (error) {
        alert("Por favor complete todos los campos!")
    }
}

export default sigin;
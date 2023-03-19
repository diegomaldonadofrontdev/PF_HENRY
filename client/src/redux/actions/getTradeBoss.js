import axios from "axios";

export default function getTradeBoss (id) {
    return async function (dispatch) {
        const tradeBoss = await axios.get(`/tradeboss/search/${id}`);
        return dispatch ({
            type: "CURRENT_TRADEBOSS",
            payload: tradeBoss.data,
        });
    };
}

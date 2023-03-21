import axios from "axios";

export default function getTradesById (id) {
    console.log(id)
    return async function (dispatch) {
        const trade = (await axios.get(`/trades/trades/search/${id}`)).data;
        return dispatch({
            type: "CURRENT_TRADE",
            payload: trade
        })
    }
}
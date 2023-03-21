import axios from "axios";
import { UPDATE_COMMERCE } from "./types";


export function updateCommerceInfo(id, body) {
	return async (dispatch) => {
		await axios.put(`trades/trade/update/${id}`, body);
    
		dispatch({
			type: UPDATE_COMMERCE,
			payload: { body, id },
		});
	};
}
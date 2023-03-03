import { GET_COMERCIOS } from "./types";

const initialState = {
	users: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_COMERCIOS:
			return { ...state, users: payload };
		default:
			return { ...state };
	}
}

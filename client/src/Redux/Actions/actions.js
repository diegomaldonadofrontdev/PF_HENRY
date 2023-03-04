import axios from "axios";

const host = "http://localhost:3001";

export function getProductById(id) {
	return async function (dispatch) {
		if (id) {
			const response = await axios(`${host}/products/${id}`);
			dispatch({
				type: "GET_PRODUCT_BY_ID",
				payload: response.data,
			});
		} else {
			dispatch({
				type: "void",
			});
		}
	};
}

export function getProducts() {
	return async function (dispatch) {
		try {
			const products = await axios.get(`${host}/products`);
			return dispatch({ type: "GET_PRODUCTS", payload: products.data });
		} catch (e) {
			console.log(e);
		}
	};
}

export const getUsers = () => {
	return async function (dispatch) {
		try {
			const json = await axios.get(`${host}/users`);
			return dispatch({ type: "GET_USER", payload: json.data });
		} catch (e) {
			console.log(e);
		}
	};
};

export function getTrades() {
	return async function (dispatch) {
		try {
			const trades = await axios.get(`${host}/clients/trades`);
			return dispatch({ type: "GET_TRADES", payload: trades.data });
		} catch (e) {
			console.log(e);
		}
	};
}

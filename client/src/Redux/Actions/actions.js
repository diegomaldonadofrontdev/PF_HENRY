import axios from "axios";

const host = "http://localhost:3001";

export function getProductById(id) {
	return async function (dispatch) {
		if (id) {
			const response = await axios(`${host}/clients/trades/search/${id}`);
			dispatch({
				type: "GET_PRODUCT_BY_ID",
				payload: response.data,
			});
		}
	};
}

export function filterByAscOrDesc(payload) {
	return {
		type: "FILTER_BY_ASC_OR_DESC",
		payload,
	};
}

export function getTradesByName(commerceName) {
	return async function (dispatch) {
		const trades = await axios.get(`${host}/trades/search/${commerceName}`);
		return dispatch({ type: "GET_TRADES", payload: trades.data });
	};
}

export function getProducts() {
	return async function (dispatch) {
		const products = await axios.get(`${host}/products`);
		return dispatch({ type: "GET_PRODUCTS", payload: products.data });
	};
}

export const getUsers = () => {
	return async function (dispatch) {
		const json = await axios.get(`${host}/users`);
		return dispatch({ type: "GET_USER", payload: json.data });
	};
};

export const getCategories = () => {
	return async function (dispatch) {
		const json = await axios.get(`${host}/clients/categories`);
		return dispatch({ type: "GET_CATEGORIES", payload: json.data });
	};
};

export function getTrades() {
	return async function (dispatch) {
		const trades = await axios.get(`${host}/clients/trades/search`);
		return dispatch({ type: "GET_TRADES", payload: trades.data });
	};
}

export function postReview(payload) {
	return async function () {
		const reviewPost = await axios.post(`${host}/clients/feedback`, payload);
		return reviewPost;
	};
}

export const getReview = () => {
	return async function (dispatch) {
		const json = await axios.get(`${host}/clients/feedbacks`);
		return dispatch({ type: "GET_REVIEW", payload: json.data });
	};
};

export function filterByCategory(categoria) {
	return async function (dispatch) {
		dispatch({
			type: "FILTER_CATEGORY",
			payload: categoria,
		});
	};
}

export function getProductsFilter(name) {
	return async (dispatch) => {
		let filtredProd = await axios.get(
			`${host}/clients/products/search?name=${name}`
		);
		dispatch({
			type: "FILTER_CATEGORY",
			payload: filtredProd.data,
		});
	};
}

export function filterByTarjeta(valor) {
	return async function (dispatch) {
		dispatch({
			type: "FILTER_BY_TARJETA",
			payload: valor,
		});
	};
}

export function filterByCity(city) {
	if (city === "Todas") {
		return async function (dispatch) {
			return dispatch({
				type: "FILTER_BY_CITY",
				payload: "vacio",
			});
		};
	} else {
		return async function (dispatch) {
			const citys = await axios.get(
				`${host}/clients/trades/search?deliveryCity=${city}`
			);
			return dispatch({
				type: "FILTER_BY_CITY",
				payload: [citys.data],
			});
		};
	}
}

export function getTradesByCategory(ciudad, category) {
	return async function (dispatch) {
		const cat = await axios.get(
			`${host}/clients/trades/search?deliveryCity=${ciudad}&category=${category}`
		);
		return dispatch({
			type: "FILTER_BY_CITY",
			payload: [cat.data],
		});
	};
}

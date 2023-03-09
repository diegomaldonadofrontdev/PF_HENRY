import { Action } from "@remix-run/router";
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

// export function getCity(city) {
// 	return async function (dispatch){
// 		dispatch({
// 			type: "FILTER_BY_CITY",
// 			payload: payload,
// 		})
// 	}
// }

export function getTradesByCategory( category) {
	return async function (dispatch) {
		const cat = await axios.get(
			`${host}/clients/trades/search?category=${category}`
		);
		return dispatch({
			type: "GET_TRADES_BY_CATEGORIES",
			payload: cat.data,
		});
	};
}

export function getTradesBySubCategory( subcategory) {
	return async function (dispatch) {
		const cat = await axios.get(
			`${host}/clients/trades/search?subcategory=${subcategory}`
		);
		return dispatch({
			type: "FILTER_BY_CITY",
			payload: [cat.data],
		});
	};
}

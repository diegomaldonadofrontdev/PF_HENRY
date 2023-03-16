import axios from "axios";

export const TRADES_FILTERS = "TRADES_FILTERS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_TRADES_CATEGORIES = "GET_TRADES_CATEGORIES";
export const GET_TRADES = "GET_TRADES";
export const GET_REVIEW = "GET_REVIEW";
export const PRODUCT_FILTERS = "PRODUCT_FILTERS";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";
export const GET_ZONES = "GET_ZONES";
export const POST_PAYMENT = "POST_PAYMENT";
export const CURRENT_CLIENT = "CURRENT_CLIENT";

const host = "http://localhost:3001";

export function getProductById(id) {
	return async function (dispatch) {
		if (id) {
			const response = await axios(`${host}/clients/products/search/${id}`);
			dispatch({
				type: GET_PRODUCT_BY_ID,
				payload: [response.data],
			});
		}
	};
}

// export function getTradesByName(commerceName) {
// 	return async function (dispatch) {
// 		const trades = await axios.get(`${host}/trades/search?commerceName=${commerceName}`);
// 		return dispatch({ type: "GET_TRADES", payload: trades.data });
// 	};
// }

export function getAllProducts(tradeId) {
	return async function (dispatch) {
		const products = await axios.get(
			`${host}/clients/products/search?tradeId=${tradeId}`
		);
		return dispatch({ type: GET_ALL_PRODUCTS, payload: products.data });
	};
}
// User para revision
export const getUsers = () => {
	return async function (dispatch) {
		const json = await axios.get(`${host}/users`);
		return dispatch({ type: "GET_USER", payload: json.data });
	};
};

export const getTradesCategories = () => {
	return async function (dispatch) {
		const json = await axios.get(`${host}/clients/trades/categories`);
		return dispatch({ type: GET_TRADES_CATEGORIES, payload: json.data });
	};
};

export function getTrades() {
	return async function (dispatch) {
		const trades = await axios.get(`${host}/clients/trades/search`);
		return dispatch({ type: GET_TRADES, payload: trades.data });
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
		return dispatch({ type: GET_REVIEW, payload: json.data });
	};
};

export function getProductsFilter(tradeId, name, category) {
	return async (dispatch) => {
		let filtredProd;
		if (tradeId && name && category) {
			filtredProd = await axios.get(
				`${host}/clients/products/search?tradeId=${tradeId}&productName=${name}&productCategory=${category}`
			);
		} else if (tradeId && name) {
			filtredProd = await axios.get(
				`${host}/clients/products/search?tradeId=${tradeId}&productName=${name}`
			);
		} else if (tradeId && category) {
			filtredProd = await axios.get(
				`${host}/clients/products/search?tradeId=${tradeId}&productCategory=${category}`
			);
		} else {
			filtredProd = await axios.get(
				`${host}/clients/products/search?tradeId=${tradeId}`
			);
		}
		dispatch({
			type: PRODUCT_FILTERS,
			payload: filtredProd.data,
		});
	};
}

export function getTradesFilter(city, category, subcategory, epagos) {
	return async function (dispatch) {
		const result = await axios.get(
			`${host}/clients/trades/search?deliveryZone=${city}&category=${category}&subcategory=${subcategory}&epagos=${epagos}`
		);

		return dispatch({
			type: TRADES_FILTERS,
			payload: result.data,
		});
	};
}

export function postProduct(payload) {
	return async function () {
		const product = await axios.post(`${host}/trades/new-products`, payload);
		return product;
	};
}

export function getSubCategories(category) {
	return async function (dispatch) {
		const subCat = await axios.get(
			`${host}/clients/trades/subcategories?category=${category}`
		);
		return dispatch({ type: GET_SUBCATEGORIES, payload: subCat.data });
	};
}

export function getZonas() {
	return async function (dispatch) {
		const zonas = await axios.get(`${host}/clients/trades/deliveryZone`);
		return dispatch({
			type: GET_ZONES,
			payload: zonas.data,
		});
	};
}

export function getEpagos() {
	return async function (dispatch) {
		const zonas = await axios.get(`${host}/clients/trades/deliveryZone`);
		return dispatch({
			type: GET_ZONES,
			payload: zonas.data,
		});
	};
}

export function allFilters(a) {
	return async function (dispatch) {
		return dispatch({
			type: "FILTERS_RES",
			payload: a,
		});
	};
}

export function setCarrito(producto, idCommerce) {
	return async function (dispatch) {
		return dispatch({
			type: "SET_CARRITO",
			payload: { producto, idCommerce },
		});
	};
}

export function addAmount(idProduct, idCommerce) {
	return async function (dispatch) {
		return dispatch({
			type: "ADD_AMOUNT",
			payload: { idProduct, idCommerce },
		});
	};
}

export function substractAmount(idProduct, idCommerce) {
	return async function (dispatch) {
		return dispatch({
			type: "SUBSTRACT_AMOUNT",
			payload: { idProduct, idCommerce },
		});
	};
}

export function deleteProduct(idProduct, idCommerce) {
	return async function (dispatch) {
		return dispatch({
			type: "DELETE_AMOUNT",
			payload: { idProduct, idCommerce },
		});
	};
}

export function postPayment(idCommerce, idUser, carrito) {
	console.log(carrito);
	return async function (dispatch) {
		const data = await axios.post(
			`${host}/payment?idCommerce=${idCommerce}&idUser=${idUser}`,
			carrito.data
		);

		return dispatch({
			type: POST_PAYMENT,
			payload: data.data,
		});
	};
}

export function getCLient (id) {
	return async function (dispatch) {
		const client = await axios.get(`${host}/clients/clients/search/${id}`)
		return dispatch({
			type: CURRENT_CLIENT,
			payload: client.data
		})
	};
}

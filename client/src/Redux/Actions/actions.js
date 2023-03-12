import axios from "axios";

export const TRADES_FILTERS = "TRADES_FILTERS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_TRADES_CATEGORIES = "GET_TRADES_CATEGORIES";
export const GET_TRADES = "GET_TRADES";
export const GET_REVIEW = "GET_REVIEW";
export const PRODUCT_FILTERS = "PRODUCT_FILTERS";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";

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
		let result;
		if (city && category && subcategory && epagos) {
			result = await axios.get(
				`${host}/clients/trades/search?deliveryZone=${city}&category=${category}&subcategory=${subcategory}&epagos=${epagos}`
			);
		} else if (city && category && subcategory) {
			result = await axios.get(
				`${host}/clients/trades/search?deliveryZone=${city}&category=${category}&subcategory=${subcategory}`
			);
		} else if (city && category && epagos) {
			result = await axios.get(
				`${host}/clients/trades/search?deliveryZone=${city}&category=${category}&epagos=${epagos}`
			);
		} else if (city && category) {
			result = await axios.get(
				`${host}/clients/trades/search?deliveryZone=${city}&category=${category}`
			);
		} else if (city && epagos) {
			result = await axios.get(
				`${host}/clients/trades/search?deliveryZone=${city}&epagos=${epagos}`
			);
		} else {
			result = await axios.get(
				`${host}/clients/trades/search?deliveryZone=${city}`
			);
		}
		return dispatch({
			type: TRADES_FILTERS,
			payload: [result.data],
		});
	};
}

export function postProduct(payload) {
	return async function () {
		const product = await axios.post(`${host}/trades/new-products`, payload);
		return product;
	};
}

export function getSubcategories(category) {
	return async function (dispatch) {
		const subCat = await axios.get(
			`${host}/clients/trades/subcategories?category=${category}`
		);
		return dispatch({ type: GET_SUBCATEGORIES, payload: subCat.data });
	};
}

// export function filterByEpago(epago, city) {
//   return async function (dispatch) {
//     const tarj = await axios.get(
//       `${host}/clients/trades/search?deliveryZone=${city}&epago=${epago}`
//     );
//     dispatch({
//       type: "FILTER_BY_EPAGO",
//       payload: [tarj.data],
//     });
//   };
// }

// export function getTradesByCategory(category, city) {
//   return async function (dispatch) {
//     const cat = await axios.get(
//       `${host}/clients/trades/search?deliveryZone=${city}&category=${category}`
//     );
//     return dispatch({
//       type: "GET_TRADES_BY_CATEGORIES",
//       payload: [cat.data],
//     });
//   };
// }

// export function getTradesBySubCategory(category, subcategory, city) {
//   return async function (dispatch) {
//     const cat = await axios.get(
//       `${host}/clients/trades/search?deliveryZone=${city}&category=${category}&subcategory=${subcategory}`
//     );
//     return dispatch({
//       type: "GET_TRADES_BY_SUBCATEGORY",
//       payload: [cat.data],
//     });
//   };
// }

// export function getTradesByCity(city) {
//   return async function (dispatch) {
//     const citydata = await axios.get(
//       `${host}/clients/trades/search?deliveryZone=${city}`
//     );
//     return dispatch({
//       type: "GET_TRADES_BY_CITY",
//       payload: [citydata.data],
//     });
//   };
// }

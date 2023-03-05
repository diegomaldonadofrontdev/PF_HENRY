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
		
			const trades = await axios.get(`${host}/clients/trades`);
			return dispatch({ type: "GET_TRADES", payload: trades.data });
		
	};
}

export function postReview (payload) {
	return async function (){
	 
		const reviewPost = await axios.post(`${host}/clients/feedback`, payload)
		return reviewPost
	  
	}
	}
	
	export const getReview = () => {
	  return async function(dispatch){
		
		  const json = await axios.get(`${host}/clients/feedback`);
		  return dispatch({type:"GET_REVIEW", payload: json.data});
		
	  }
	};

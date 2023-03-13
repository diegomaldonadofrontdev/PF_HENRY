// import productReducer from "./productReducer";
// import userReducer from "./userReducer";
// import productsReducer from "./productsReducer";
// import { combineReducers } from "redux";
// import tradesReducer from "./tradesReducer";
// import categoriesReducer from "./categoriesReducer";
// import filterByCategoryReducer from "./filterCategoryReducer";

import {
	TRADES_FILTERS,
	GET_PRODUCT_BY_ID,
	GET_ALL_PRODUCTS,
	GET_TRADES_CATEGORIES,
	GET_SUBCATEGORIES,
	GET_TRADES,
	GET_REVIEW,
	PRODUCT_FILTERS,
	GET_ZONES,
} from "../actions/actions";

// export default allReducers;

const initialState = {
	product: [],
	products: [],
	allCommerces: [],
	tradesCategories: [],
	tradesSubCategories: [],
	feedback: [],
	zones: [],
	filters: {
		city: "default",
		category: "default",
		subcategory: "default",
		epagos: "default",
	},
	carritos: [],
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCT_BY_ID:
			return {
				...state,
				product: action.payload,
			};
		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case PRODUCT_FILTERS:
			return {
				...state,
				products: action.payload,
			};
		case "GET_USERS":
			return {
				...state,
				users: action.payload,
			};
		case GET_TRADES_CATEGORIES:
			return {
				...state,
				tradesCategories: action.payload,
			};
		case GET_TRADES:
			return {
				...state,
				allCommerces: action.payload,
			};
		case GET_REVIEW:
			return {
				...state,
				feedback: action.payload,
			};
		case TRADES_FILTERS:
			return {
				...state,
				allCommerces: action.payload,
			};
		case GET_SUBCATEGORIES:
			return {
				...state,
				tradesSubCategories: action.payload,
			};
		case GET_ZONES:
			return {
				...state,
				zones: action.payload,
			};
		case "FILTERS_RES":
			return {
				...state,
				filters: action.payload,
			};

		case "SET_CARRITO":
			const carritosCopy = state.carritos;
			const carritoSelect = carritosCopy.findIndex(
				(x) => x.idCommerce === action.payload.idCommerce
			);

			if (carritoSelect !== -1) {
				carritosCopy[carritoSelect].data.push(action.payload.producto);

				let total = 0;

				carritosCopy[carritoSelect].data.forEach((e) => {
					total += e.price;
				});

				carritosCopy[carritoSelect].total = total;
				return {
					...state,
					carritos: carritosCopy,
				};
			}
			carritosCopy.push({
				idCommerce: action.payload.idCommerce,
				data: [action.payload.producto],
				total: action.payload.producto.price,
			});
			return {
				...state,
				carritos: carritosCopy,
			};
		default:
			return state;
	}
}

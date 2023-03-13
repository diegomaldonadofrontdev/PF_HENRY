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
	 GET_ZONES
} from "../actions/actions"

// export default allReducers;

const initialState = {
	product: [],
	products: [],
	allCommerces: [],
	tradesCategories: [],
	tradesSubCategories: [],
	feedback: [],
	zones: []
	
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
				allCommerces: action.payload
			}
			case GET_SUBCATEGORIES:
				return {
					...state,
					tradesSubCategories: action.payload
				}
				case GET_ZONES:
				return {
					...state,
					zones: action.payload
				}		
		default:
			return state;
	}
}

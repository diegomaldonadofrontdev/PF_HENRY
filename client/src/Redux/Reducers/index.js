// import productReducer from "./productReducer";
// import userReducer from "./userReducer";
// import productsReducer from "./productsReducer";
// import { combineReducers } from "redux";
// import tradesReducer from "./tradesReducer";
// import categoriesReducer from "./categoriesReducer";
// import filterByCategoryReducer from "./filterCategoryReducer";

// const allReducers = combineReducers({
// 	product: productReducer,
// 	products: productsReducer,
// 	users: userReducer,
// 	trades: tradesReducer,
// 	categories: categoriesReducer,
// 	filter: filterByCategoryReducer,
// });

// export default allReducers;

const initialState = {
	product: [],
	products: [],
	allCommerces: [],
	category: [],
	categories: [],
	cities: [],
	users: [],
	feedback: [],
	filters: [],
	filterCategory: [],
};

export default function rootReducer(state = initialState, action) {
	
	

	switch (action.type) {
		case "GET_PRODUCT_BY_ID":
			return {
				...state,
				product: action.payload,
			};
		case "GET_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};
		case "PRODUCT_FILTER":
			return {
				...state,
				products: action.payload,
			};
		case "GET_USERS":
			return {
				...state,
				users: action.payload,
			};
		case "GET_TRADES_BY_CATEGORY":
			return {
				...state,
				allCommerces: action.payload,
			};
		case "GET_CATEGORIES":
			return {
				...state,
				categories: action.payload,
			};
		case "GET_TRADES":
			return {
				...state,
				allCommerces: action.payload,
			};
		case "GET_REVIEW":
			return {
				...state,
				feedback: action.payload,
			};
		case "FILTER_CATEGORY":
			return {
				 ...state,
				 allCommerces: action.payload 
				};

		case "FILTER_BY_TARJETA":
			
				return {
					...state,
					allCommerces: action.payload,
				};
			

		case "FILTER_BY_CITY":
			return {
				...state,
				allCommerces: action.payload
			}
		default:
			return state;
	}
}

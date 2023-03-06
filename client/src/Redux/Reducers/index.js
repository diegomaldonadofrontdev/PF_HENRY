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
	trades: [],
	product: [],
	products: [],
	allCommerces: [],
	category: [],
	categories: [],
	users: [],
	feedback: [],
	filters: [],
	filterCategory: [],
};

export default function rootReducer(state = initialState, action) {
	const allCommerces = state.allCommerces;
	const allTrades = state.trades;

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
		case "GET_CATEGORIES":
			return {
				...state,
				categories: action.payload,
			};
			case "GET_TRADES_BY_CATEGORY":
				return{
					...state,
					category: action.payload
				}
		case "GET_TRADES":
			const res = action.payload;
			const comercios = res.map((x) => x.comercios);
			return {
				...state,
				allCommerces: comercios,
				trades: res,
			};
		case "GET_REVIEW":
			return {
				...state,
				feedback: action.payload,
			};
		case "FILTER_CATEGORY":
			console.log(allTrades);
			if (action.payload === "Gastronomia") {
				const filtrado = allTrades.filter((x) => x.category === action.payload);

				return { ...state, filters: filtrado[0].comercios };
			} else if (action.payload === "Salud") {
				return { ...state, filters: allTrades[1] };
			} else if (action.payload === "Hogar") {
				return { ...state, filters: allTrades[2] };
			} else {
				return { ...state, filters: allCommerces };
			}

		case "FILTER_BY_TARJETA":
			let valor;

			if (action.payload === "Todos") {
				return {
					...state,
					filters: allCommerces,
				};
			} else if (action.payload === "Tarjeta") {
				valor = true;
				const resultado = allCommerces.map((x) =>
					x.filter((x) => x.epagos === valor)
				);
				return {
					...state,
					filters: resultado,
				};
			} else {
				valor = false;
				const resultado = allCommerces.map((x) =>
					x.filter((x) => x.epagos === valor)
				);
				return {
					...state,
					filters: resultado,
				};
			}

		case "FILTER_BY_CITY":
			if (action.payload === "Todas") {
				return { ...state, filters: allCommerces };
			}
			const filtrado = allCommerces.map((x) =>
				x.filter((x) => x.city === action.payload)
			);
			return { ...state, filters: filtrado };

		case "FILTER_BY_ASC_OR_DESC":
			console.log(allCommerces);
			const sortAZ =
				action.payload === "Asc"
					? allCommerces.sort(function (a, b) {
							console.log(a.rating);
							console.log(b.rating);

							if (a.rating > b.rating) {
								return 0;
							}
							if (b.rating > a.rating) {
								return -1;
							}
							return 0;
					  })
					: allCommerces.sort(function (a, b) {
							if (a.rating > b.rating) {
								return -1;
							}
							if (b.rating > a.rating) {
								return 1;
							}
							return 0;
					  });
			console.log(sortAZ);
			return {
				...state,
				filter: sortAZ,
			};
		default:
			return state;
	}
}

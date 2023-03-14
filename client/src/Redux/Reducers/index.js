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
} from "../Actions/actions";

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
	carritos: {},
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

			const value = action.payload.idCommerce;
			const product = action.payload.producto;

			if (carritosCopy[value]) {
				const index = carritosCopy[value].data.findIndex(
					(x) => x.id === product.id
				);
				let total = 0;
				if (index === -1) {
					product.cantidad = 1;
					const data = [...carritosCopy[value].data, product];
					data.forEach((x) => (total += x.price * x.cantidad));
					carritosCopy[value] = {
						data: data,
						total,
					};

					return {
						...state,
						carritos: { ...carritosCopy },
					};
				} else {
					carritosCopy[value].data[index].cantidad += 1;

					carritosCopy[value].data.forEach(
						(x) => (total += x.price * x.cantidad)
					);

					carritosCopy[value].total = total;

					return {
						...state,
						carritos: { ...carritosCopy },
					};
				}
			} else {
				product.cantidad = 1;

				carritosCopy[value] = {
					data: [product],
					total: product.price,
				};

				return {
					...state,
					carritos: { ...carritosCopy },
				};
			}

		case "ADD_AMOUNT":
			const carritosCopy2 = state.carritos;
			const idProduct = action.payload.idProduct;
			const idCommerce = action.payload.idCommerce;

			console.log(idProduct, idCommerce);

			const indexAdd = carritosCopy2[idCommerce].data.findIndex(
				(x) => x.id === idProduct
			);
			console.log(indexAdd);
			console.log(carritosCopy2[idCommerce].data);

			carritosCopy2[idCommerce].data[indexAdd].cantidad += 1;

			carritosCopy2[idCommerce].total +=
				carritosCopy2[idCommerce].data[indexAdd].price;

			return {
				...state,
				carritos: { ...carritosCopy2 },
			};

		case "SUBSTRACT_AMOUNT":
			const carritosCopy3 = state.carritos;
			const idProduct2 = action.payload.idProduct;
			const idCommerce2 = action.payload.idCommerce;

			const indexAdd2 = carritosCopy3[idCommerce2].data.findIndex(
				(x) => x.id === idProduct2
			);
			console.log(carritosCopy3[idCommerce2].data);

			if (carritosCopy3[idCommerce2].data[indexAdd2].cantidad > 1) {
				carritosCopy3[idCommerce2].data[indexAdd2].cantidad -= 1;

				carritosCopy3[idCommerce2].total -=
					carritosCopy3[idCommerce2].data[indexAdd2].price;

				return {
					...state,
					carritos: { ...carritosCopy3 },
				};
			}
			return {
				...state,
			};
		case "DELETE_AMOUNT":
			const carritosCopy4 = state.carritos;
			const idProduct3 = action.payload.idProduct;
			const idCommerce3 = action.payload.idCommerce;

			const total3 = carritosCopy4[idCommerce3].data.find(
				(x) => x.id === idProduct3
			);

			const resultTotal =
				carritosCopy4[idCommerce3].total - total3.cantidad * total3.price;

			const resultData = carritosCopy4[idCommerce3].data.filter(
				(x) => x.id !== idProduct3
			);

			const obj = { data: resultData, total: resultTotal };

			return {
				...state,
				carritos: { ...state.carritos, [idCommerce3]: { ...obj } },
			};

		default:
			return state;
	}
}

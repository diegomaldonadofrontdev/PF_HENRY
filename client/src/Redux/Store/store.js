import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "../Reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	allReducers,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./Redux/Store/store";
import reportWebVitals from "./reportWebVitals";
import axios from "axios"
// import { Provider } from "react-redux";
// import { store } from "./redux/store/index";
// axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.baseURL = "https://servidor-pedivery.onrender.com"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

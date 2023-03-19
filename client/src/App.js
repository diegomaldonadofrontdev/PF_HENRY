import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminOwner from "./views/DashboardAdmin/AdminOwner";
import CommerceDetail from "./views/CommerceDetail/CommerceDetail";
import Home from "./views/Home/Home";
import HomeLocal from "./views/HomeCommerce/HomeLocal";
import Login from "./views/Login/Login";
import OpinionForm from "./views/OpinionForm/OpinionForm";
import UserSearch from "./views/UserSearch/UserSearch";
import RegistrationForm from "./views/RegistrationForm/RegistrationForm";
import ProductCreationForm from "./views/ProductCreationForm/ProductCreationForm";
import CommerceRegistrationForm from "./views/CommerceRegistrationForm/CommerceRegistrationForm";
import DashboardClient from "./views/DasboardClient/DashboardClient";
import ResponsePayment from "./views/ResponsePayment/ResponsePayment";
import { useDispatch, useSelector } from "react-redux";
import getClient from "./redux/actions/getClient";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();

	const currentUser = useSelector((state) => state.currentClient);

	useEffect(() => {
		const idUser = window.localStorage.getItem("idUser");
		if (idUser) {
			dispatch(getClient(idUser));
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminowner" element={<AdminOwner />} />
				<Route path="/useradmin" element={<DashboardClient />} />

				<Route path="/login" element={<Login />} />
				<Route path="/s" element={<HomeLocal />} />
				<Route path="/search" element={<UserSearch />} />
				<Route path="/opinion" element={<OpinionForm />} />
				<Route path="/comercio/:id" element={<CommerceDetail />} />
				<Route path="/registration" element={<RegistrationForm />} />
				<Route path="/registration_product" element={<ProductCreationForm />} />
				<Route
					path="/registration_commerce"
					element={<CommerceRegistrationForm />}
				/>
				<Route path="/responsepayment/:status" element={<ResponsePayment />} />
			</Routes>
		</div>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminOwner from "./views/DashboardAdmin/AdminOwner";
import CommerceDetail from "./views/CommerceDetail/CommerceDetail";
import Home from "./views/Home/Home";
import HomeLocal from "./views/HomeCommerce/HomeLocal";
import Login from "./views/Login/Login";
import LoginTradeBoss from "./views/LoginTradeBoss/LoginTradeBoss";
import OpinionForm from "./views/OpinionForm/OpinionForm";
import UserSearch from "./views/UserSearch/UserSearch";
import RegistrationForm from "./views/RegistrationForm/RegistrationForm";
import ProductCreationForm from "./views/ProductCreationForm/ProductCreationForm";
import CommerceRegistrationForm from "./views/CommerceRegistrationForm/CommerceRegistrationForm";
import DashboardClient from "./views/DasboardClient/DashboardClient";
import ResponsePayment from "./views/ResponsePayment/ResponsePayment";
import { useDispatch, useSelector } from "react-redux";
import getCLient from "./redux/actions/getClient";
import { useEffect } from "react";
import RegistrationTradeBoss from "./views/RegistrationTradeBoss/RegistrationTradeBoss";
import LoginTrade from "./views/LoginTrade/LoginTrade";
import SuperAdmin from "./views/SuperAdmin/SuperAdmin";
import SendEmail from "./views/SendEmail/SendEmail";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import SendEmailTrades from "./views/SendEmailTrades/SendEmail";
import ResetPasswordTrades from "./views/ResetPasswordTrades/ResetPassword";
import ResponsePaymentCash from "./views/ResponsePaymentCash/ResponsePaymentCash";
import SuperAdmin2 from "./views/SuperAdmin2/SuperAdmin2";

function App() {
	const dispatch = useDispatch();

	const currentUser = useSelector((state) => state.currentClient);

	useEffect(() => {
		const idUser = window.localStorage.getItem("idUser");
		if (idUser) {
			dispatch(getCLient(idUser));
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminowner" element={<AdminOwner />} />
				<Route path="/useradmin" element={<DashboardClient />} />
				<Route path="/login" element={<Login />} />
				<Route path="/login/trades" element={<LoginTrade />} />
				<Route path="/login/tradeboss" element={<LoginTradeBoss />} />
				<Route path="/s" element={<HomeLocal />} />
				<Route path="/search" element={<UserSearch />} />
				<Route path="/opinion" element={<OpinionForm />} />
				<Route path="/comercio/:id" element={<CommerceDetail />} />
				<Route path="/registration" element={<RegistrationForm />} />
				<Route path="/registration_product" element={<ProductCreationForm />} />
				<Route
					path="/registration/tradeboss"
					element={<RegistrationTradeBoss />}
				/>
				<Route path="/registration_product" element={<ProductCreationForm />} />
				<Route
					path="/registration_commerce"
					element={<CommerceRegistrationForm />}
				/>
				<Route path="/responsepayment/:status" element={<ResponsePayment />} />
				{/* <Route path="/responsepayment/:status" element={<ResponsePayment />} /> */}
				<Route path="/superadmin" element={<SuperAdmin />} />
				<Route path="/resetpassword" element={<SendEmail />} />
				<Route path="/resetpassword2/:token" element={<ResetPassword />} />
				<Route path="/trades/resetpassword" element={<SendEmailTrades />} />
				<Route
					path="/trades/resetpassword2/:token"
					element={<ResetPasswordTrades />}
				/>
				<Route path="/responsepaymentcash" element={<ResponsePaymentCash />} />
				<Route path="/superadmins" element={<SuperAdmin2 />} />
			</Routes>
		</div>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminOwner from "./views/AdminOwner/AdminOwner";
import Home from "./views/home/Home";
import HomeLocal from "./views/HomeLocal/HomeLocal";
import Login from "./views/Login/Login";
import OpinionForm from "./views/OpinionForm/OpinionForm";
import UserSearch from "./views/UserSearch/UserSearch";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminowner" element={<AdminOwner />} />
				<Route path="/login" element={<Login />} />
				<Route path="/s" element={<HomeLocal />} />
				<Route path="/busqueda" element={<UserSearch />} />
				<Route path="/opinion" element={<OpinionForm />} />
			</Routes>
		</div>
	);
}

export default App;

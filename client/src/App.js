import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminOwner from "./views/AdminOwner/AdminOwner";
import Home from "./views/home/Home";
import Login from "./views/Login/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminowner" element={<AdminOwner />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;

// import { Route, Routes } from "react-router-dom";
import { Route, Switch } from "wouter";
import "./App.css";
import AdminOwner from "./views/AdminOwner/AdminOwner";
import Home from "./views/home/Home";
import HomeLocal from "./views/HomeLocal/HomeLocal";
import Login from "./views/Login/Login";
import OpinionForm from "./views/OpinionForm/OpinionForm";
import UserSearch from "./views/UserSearch/UserSearch";
import { UserContextProvider } from "./Context/userContext";

function App() {
	return (
		<UserContextProvider>
			<div className="App">
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/adminowner" component={AdminOwner} />
					<Route path="/login" component={Login} />
					<Route path="/s" component={HomeLocal} />
					<Route path="/busqueda" component={UserSearch} />
					<Route path="/opinion" component={OpinionForm} />
				</Switch>
			</div>
		</UserContextProvider>
	);
}

export default App;

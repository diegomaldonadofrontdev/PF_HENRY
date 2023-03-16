import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Header.module.css";
import { Link, useLocation} from "react-router-dom";
import useUser from "../../Hooks/useUser";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
	const { logout1 } = useUser();
	const { isAuthenticated, logout } = useAuth0();
	const location = useLocation();;

	const token = window.localStorage.getItem('token');

	const handleClick = (e) => {
		e.preventDefault();
		logout1();
		logout();
		window.localStorage.clear();
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to="/">
					<div className={styles.logo}>
						<h1>PEDI-VERY</h1>
					</div>
				</Link>
				<div>
					{location.pathname !== "/login" &&
						location.pathname !== "/registration" &&
						location.pathname !== "/registration_product" &&
						location.pathname !== "/registration_commerce" && <Navbar />}

					{(token || isAuthenticated) && (
						<div onClick={handleClick}>
							<ButtonPrimary texto="Logout" />
						</div>
					)}
					{!token && !isAuthenticated && location.pathname !== "/login" && (
						<div>
							<Link to="/login">
								<ButtonPrimary texto="Login" />
							</Link>
						</div>
					)}
					{!token &&
						!isAuthenticated &&
						location.pathname !== "/registration" && (
							<Link to="/registration">
								<ButtonPrimary texto="Register" />
							</Link>
						)}
				</div>
			</div>
		</header>
	);
}

import React, { useContext } from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../../Context/userContext";

export default function Header() {
	const { dataUser } = useContext(Context);
	const { isLogged, logout1 } = useUser();
	const { isAuthenticated, logout } = useAuth0();
	const location = useLocation();

	const handleClick = (e) => {
		e.preventDefault();
		logout1();
		logout();
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to="/">
					<div className={styles.logo}>
						<h1>PEDI-VERY</h1>
					</div>
				</Link>
				{location.pathname !== "/login" &&
					location.pathname !== "/registration" &&
					location.pathname !== "/registration_product" &&
					location.pathname !== "/registration_commerce" && <Navbar />}

				{(isLogged || isAuthenticated) && (
					<div onClick={handleClick}>
						<ButtonPrimary texto="Logout" />
					</div>
				)}
				{!isLogged && !isAuthenticated && location.pathname !== "/login" && (
					<div>
						<Link to="/login">
							<ButtonPrimary texto="Login" />
						</Link>
					</div>
				)}
				{!isLogged &&
					!isAuthenticated &&
					location.pathname !== "/registration" && (
						<div>
							<Link to="/registration">
								<ButtonPrimary texto="Register" />
							</Link>
						</div>
					)}
			</div>
		</header>
	);
}

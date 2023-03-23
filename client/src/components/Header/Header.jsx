// React and Hooks
import React, { useState } from "react";
import useUser from "../../Hooks/useUser";

// React Router
import { Link, useLocation, useNavigate } from "react-router-dom";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// Components
import Navbar from "../NavBar/Navbar";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

// Styles
import styles from "./Header.module.css";
import useTrade from "../../Hooks/useTrade";

export default function Header() {
	const { logout1 } = useUser();
	const { logoutTrade } = useTrade();
	const { isAuthenticated, logout } = useAuth0();
	const location = useLocation();
	const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);

	const token = window.localStorage.getItem("token");
	const idTrade = window.localStorage.getItem("idTrade");

	const handleClick = (e) => {
		e.preventDefault();
		logout1();
		logout();
	};

	const logoutHandler = (e) => {
		logoutTrade();
		navigate("/login/trades");
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to="/">
					<div className={styles.logo}>
						<h1>PEDI-VERY</h1>
					</div>
				</Link>
				<div className={`${styles.nav} ${isOpen && styles.open}`}>
					{location.pathname !== "/login" &&
						location.pathname !== "/registration" &&
						location.pathname !== "/registration_product" &&
						location.pathname !== "/registration_commerce" &&
						location.pathname !== "/adminowner" && <Navbar />}

					{ !idTrade && (token || isAuthenticated) && (
						<div className={styles.loggedButtons} onClick={handleClick}>
							<ButtonPrimary texto="Logout" />
						</div>
					)}
					{ !idTrade && (token || isAuthenticated) && (
						<Link to="/useradmin">
							<ButtonPrimary texto="Mi Perfil" />
						</Link>
					)}

					{idTrade &&
						<button style={{ border: "none" }} onClick={logoutHandler}>
							<ButtonPrimary texto="Cerrar sesion de comercio" />
						</button>
					}

					{!idTrade && !token && !isAuthenticated && location.pathname !== "/login" && (
						<div>
							<Link to="/login">
								<ButtonPrimary texto="Iniciar Sesión" />
							</Link>
						</div>
					)}
					{!idTrade && !token &&
						!isAuthenticated &&
						location.pathname !== "/registration" && (
							<Link to="/registration">
								<ButtonPrimary texto="Registrarse" />
							</Link>
						)}
				</div>
				<div className={styles.icon__menu} onClick={() => setIsOpen(!isOpen)}>
					<i class="bx bx-menu"></i>
				</div>
			</div>
		</header>
	);
}

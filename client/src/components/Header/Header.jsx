import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function Header() {

	const navigate = useNavigate();

	const logout = () => {
		window.localStorage.setItem(
			'loggedNoteAppUser', JSON.stringify(null)
		)
		navigate("/login");
	}

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link to="/"><h1>PEDI-VERY</h1></Link>
				</div>

				<Navbar />

				<button onClick={logout}>Logout</button>
			</div>
		</header>
	);
}

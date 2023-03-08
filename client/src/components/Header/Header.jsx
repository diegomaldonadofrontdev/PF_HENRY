import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";

export default function Header() {

	const { logout } = useUser();

	const handleClick = (e) => {
		e.preventDefault();
		logout();
	}

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link to="/"><h1>PEDI-VERY</h1></Link>
				</div>

				<Navbar />

				<button onClick={handleClick}>Logout</button>
			</div>
		</header>
	);
}

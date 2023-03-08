import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const location = useLocation();
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
			</div>
		</header>
	);
}

import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<Link className={styles.btn_market} to="/s">
				<i class="bx bx-store"></i>Registrá tu negocio
			</Link>
			{/* <i className={"bx bx-menu"}></i>
			<i className={"bx bx-cart-alt"}></i> */}
		</nav>
	);
}

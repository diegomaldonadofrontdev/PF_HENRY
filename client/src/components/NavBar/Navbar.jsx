import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<i className={"bx bx-menu"}></i>
			<i className={"bx bx-cart-alt"}></i>
		</nav>
	);
}

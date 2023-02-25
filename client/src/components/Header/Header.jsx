import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<h1>PEDI-VERY</h1>
				</div>

				<Navbar />
			</div>
		</header>
	);
}

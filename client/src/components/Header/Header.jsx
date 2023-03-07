import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to="/">
					<div className={styles.logo}>
						<h1>PEDI-VERY</h1>
					</div>
				</Link>
				<Navbar />
			</div>
		</header>
	);
}

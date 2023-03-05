import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link to="/"><h1>PEDI-VERY</h1></Link>
				</div>

				<Navbar />
			</div>
		</header>
	);
}

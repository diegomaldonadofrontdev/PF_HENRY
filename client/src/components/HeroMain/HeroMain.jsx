import React from "react";
import { useSelector } from "react-redux";
import styles from "./HeroMain.module.css";
import { Link } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function HeroMain() {

	const currentClient = useSelector(state => state.currentClient);

	return (
		<div className={styles.hero__main}>
			<div className={styles.container}>
				<div className={styles.searchContainer}>
					<h1>{currentClient.firstname ? `Bienvenido ${currentClient.firstname} ${currentClient.lastname}`: null}</h1>
					<h2>Pedí lo que quieras!</h2>
					<p>Restaurantes, mercados, farmacias, kioscos y mucho más</p>
					<div className={styles.buscador}>
						<p>Veamos que tenemos cerca</p>
						<Link to="/search" className={styles.hero__button}>
							<ButtonPrimary texto="Comprar" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

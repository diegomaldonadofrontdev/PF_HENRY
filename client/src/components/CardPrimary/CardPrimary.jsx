import React from "react";
import styles from "./CardPrimary.module.css";
import img from "../../images/feature__owner.jpg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function CardPrimary() {
	return (
		<div className={styles.card__primary}>
			<div className={styles.card__imgContainer}>
				<img src={img} alt="" />
			</div>
			<div className={styles.card__info}>
				<h3>Registrá tu restaurante</h3>
				<p>Descubrí los beneficios que tiene pertenecer a nuestro equipo</p>
				<ButtonPrimary texto="Conocer mas" />
			</div>
		</div>
	);
}

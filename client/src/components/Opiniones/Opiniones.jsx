import React from "react";
import styles from "./Opiniones.module.css";
import img from "../../images/opinion.jpg";
import OpinionCarrusel from "../OpinionCarrusel/OpinionCarrusel";

export default function Opiniones() {
	return (
		<div className={styles.opiniones}>
			<div className={styles.container}>
				<div className={styles.containerImg}>
					<img src={img} alt="" />
				</div>
				<div className={styles.texto}>
					<p className={styles.span}>Opiniones</p>
					<h2>Que dicen nuestros clientes sobre nosotros</h2>
					<OpinionCarrusel />
				</div>
			</div>
		</div>
	);
}

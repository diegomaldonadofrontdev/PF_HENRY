import React from "react";
import styles from "./HomeCard.module.css";
import img from "../../images/pizza.jpg";

export default function HomeCard() {
	return (
		<div className={styles.menu__card}>
			<div className={styles.fondo}>
				<img src={img} alt="" />
			</div>
			<div className={styles.card__info}>
				<h4>Pizza Italiana</h4>
				<p className={styles.precio}>$100</p>
				<p className={styles.comprar}>Agregar al carrito</p>
				<div className={styles.valoraciones}>
					<i class="bx bxs-star"></i>
				</div>
			</div>
		</div>
	);
}

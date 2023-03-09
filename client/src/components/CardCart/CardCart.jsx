import React from "react";
import styles from "./CardCart.module.css";

export default function CardCart() {
	return (
		<div className={styles.card__Cart}>
			<div className={styles.icon__container}>
				<i class="bx bx-trash"></i>
			</div>

			<div className={styles.img__container}>
				<img
					src="https://images.rappi.com.ar/restaurants_background/mcdonaldscol-1660251198623.jpg?e=webp&q=70&d=300x300"
					alt=""
				/>
			</div>
			<div className={styles.card__description}>
				<div className={styles.description__text}>
					<h4>Hamburguesa</h4>
					<p>$1.000</p>
				</div>
				<div className={styles.cantidad}>
					<p>1</p>
					<div className={styles.button__container}>
						<button><i class='bx bxs-up-arrow'></i></button>
						<button><i class='bx bxs-down-arrow'></i></button>
					</div>
				</div>
				<p>$3.000</p>
			</div>
		</div>
	);
}

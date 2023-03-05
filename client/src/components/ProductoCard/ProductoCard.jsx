import React from "react";
import styles from "./ProductoCard.module.css";
import img from "../../images/pizza.jpg";

export default function ProductoCard() {
	return (
		<div className={styles.product__card}>
			<div className={styles.producto__info}>
				<h3>Nombre de producto</h3>
				<p>$10.000</p>
			</div>
			<div className={styles.img__container}>
				<img src={img} alt="" />
			</div>
		</div>
	);
}

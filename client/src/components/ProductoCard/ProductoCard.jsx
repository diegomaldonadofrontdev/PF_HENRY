import React from "react";
import styles from "./ProductoCard.module.css";

export default function ProductoCard(props) {
	return (
		<div className={styles.product__card}>
			<div className={styles.producto__info}>
				<h3>{props.name}</h3>
				<p>{props.price}</p>
			</div>
			<div className={styles.img__container}>
				<img src={props.img} alt="" />
			</div>
		</div>
	);
}

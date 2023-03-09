import React from "react";
import { Link } from "react-router-dom";
import ButtonProduct from "../ButtonProduct/ButtonProduct";
import styles from "./ProductoCard.module.css";

export default function ProductoCard(props) {
	return (
		<div className={styles.product__card}>
			<div className={styles.producto__info}>
				<h3>{props.name}</h3>
				<p className={styles.description}> {props.description}</p>
				<p className={styles.price}>{props.price}</p>
				<Link>
					<ButtonProduct />
				</Link>
			</div>
			<div className={styles.img__container}>
				<img src={props.img} alt="" />
			</div>
		</div>
	);
}

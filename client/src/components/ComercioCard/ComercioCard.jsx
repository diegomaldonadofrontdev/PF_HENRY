import React from "react";
import styles from "./ComercioCard.module.css";
import img from "../../images/logo_burger.png";

export default function ComercioCard(props) {
	return (
		<div className={styles.card__store}>
			<div className={styles.logo}>
				<img src={img} alt="" />
			</div>
			<div className={styles.card__info} key={props.id}>
				<h3>{props.name}</h3>
				<p>Acepta pago online</p>
				<div className={styles.rating}>
					<i class="bx bxs-star"></i>
					<p>4.2</p>
				</div>
			</div>
		</div>
	);
}

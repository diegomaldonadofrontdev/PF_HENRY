import React from "react";
import styles from "./ComercioCard.module.css";
import img from "../../images/logo_burger.png";

export default function ComercioCard(props) {
	return (
		<div className={styles.card__store}>
			<div className={styles.logo}>
				<img
					src={
						props.img ||
						"https://static.vecteezy.com/system/resources/previews/001/500/415/original/burger-icon-free-vector.jpg"
					}
					alt=""
				/>
			</div>
			<div className={styles.card__info}>
				<h3>{props.name}</h3>
				<p>
					{props.pagoOnline === true
						? "Acepta pagos online"
						: "Solo efectivo en puerta"}
				</p>
				<p>{props.category}</p>
				<div className={styles.rating}>
					<i class="bx bxs-star"></i>
					<p>{props.rating}</p>
				</div>
			</div>
		</div>
	);
}

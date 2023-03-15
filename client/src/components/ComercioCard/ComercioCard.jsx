import React from "react";
import styles from "./ComercioCard.module.css";
import img from "../../images/logo_burger.png";

export default function ComercioCard(props) {
	return (
		<div className={styles.card__store}>
			<div className={styles.logo}>
				<img src={props.img} alt="" />
			</div>
			<div className={styles.card__info} key={props._id}>
				<h3>{props.name}</h3>
				<p>{props.descripcion}</p>
				<p className={styles.epagos}>
					{props.epagos === "Sólo efectivo" ? (
						<p>
							<i class="bx bx-money"></i>Sólo acepta pagos en efectivo
						</p>
					) : props.epagos === "Sólo tarjetas" ? (
						<p>
							<i class="bx bx-credit-card"></i>Sólo acepta pagos con tarjeta
						</p>
					) : props.epagos === "Efectivo/Tarjetas" ? (
						<div>
							<p>
								<i class="bx bx-money"></i>Acepta pagos en efectivo
							</p>
							<p>
								<i class="bx bx-credit-card"></i>Acepta pagos con tarjeta
							</p>
						</div>
					) : null}
				</p>
				<div className={styles.rating}>
					<i class="bx bxs-star"></i>
					<p>{props.rating}</p>
				</div>
			</div>
		</div>
	);
}

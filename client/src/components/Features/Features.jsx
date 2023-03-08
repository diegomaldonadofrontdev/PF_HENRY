import React from "react";
import styles from "./Features.module.css";
import logo from "../../images/logo.png";
import CardPrimary from "../CardPrimary/CardPrimary";

export default function Features() {
	return (
		<div className={styles.features}>
			<div className={styles.container}>
				<div className={styles.features__header}>
					<h2>
						Unite a <img src={logo} alt="" />
					</h2>
				</div>

				<div className={styles.features__container}>
					<CardPrimary />
					<CardPrimary />
					<CardPrimary />
				</div>
			</div>
		</div>
	);
}

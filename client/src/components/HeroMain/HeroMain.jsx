import React from "react";
import styles from "./HeroMain.module.css";

export default function HeroMain() {
	return (
		<div className={styles.hero__main}>
			<div className={styles.container}>
				<div>
					<h2>Pedí lo que quieras!</h2>
					<p>Restaurantes, mercados, farmacias, kioscos y mucho más</p>
				</div>
			</div>
		</div>
	);
}

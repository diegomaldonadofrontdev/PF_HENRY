import React from "react";
import styles from "./HeroMain.module.css";

export default function HeroMain() {
	return (
		<div className={styles.hero__main}>
			<div className={styles.container}>
				<div>
					<h2>Pedí lo que quieras!</h2>
					<p>Restaurantes, mercados, farmacias, kioscos y mucho más</p>
					<div className={styles.buscador}>
						<p>Veamos que tenemos cerca</p>
						<div className={styles.input}>
							<i class="bx bx-map"></i>
							<input type="text" placeholder="Dirección o referencia" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

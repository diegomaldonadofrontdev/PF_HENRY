import React from "react";
import styles from "./HeroMain.module.css";
import { Link } from "react-router-dom";

export default function HeroMain() {
	return (
		<div className={styles.hero__main}>
			<div className={styles.container}>
				<div className={styles.searchContainer}>
					<h2>Pedí lo que quieras!</h2>
					<p>Restaurantes, mercados, farmacias, kioscos y mucho más</p>
					<div className={styles.buscador}>
						<p>Veamos que tenemos cerca</p>
						<Link to="/busqueda" className={styles.btn__buscar}>
							Comprar
						</Link>
						{/* <div className={styles.input}>
							<i class="bx bx-map"></i>
							<input type="text" placeholder="Dirección o referencia" />
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

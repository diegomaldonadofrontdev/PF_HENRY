import React from "react";
import HomeCard from "../HomeCard/HomeCard";
import styles from "./MenuHome.module.css";

export default function MenuHome() {
	return (
		<div className={styles.menu__home}>
			<div className={styles.container}>
				<div className={styles.menu__header}>
					<p>Nuestro Menu</p>
					<h2>Un menu que siempre es tentador</h2>
				</div>
				<div className={styles.menu__nav}>
					<div className={styles.filtros}>
						<p>Filtrar por comida:</p>
						<select name="comida" id="">
							<option value="default">Inicio</option>
							<option value="default">Pizzas</option>
							<option value="default">Hamburguesas</option>
							<option value="default">Vegetariano</option>
							<option value="default">Pastas</option>
						</select>
					</div>
					<div className={styles.filtros}>
						<p>Filtrar por barrio:</p>
						<select name="zona" id="">
							<option value="default">Almagro</option>
							<option value="default">Recoleta</option>
							<option value="default">Caballito</option>
							<option value="default">Lanús</option>
							<option value="default">Boedo</option>
						</select>
					</div>
					<div className={styles.filtros}>
						<p>Ordenar por precio:</p>
						<select name="ordenamientos" id="">
							<option value="default">Inicio</option>
							<option value="default">A-z</option>
							<option value="default">Z-a</option>
							<option value="default">Menor precio</option>
							<option value="default">Mayor precio</option>
						</select>
					</div>
				</div>
				<div className={styles.menu__cards}>
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
					<HomeCard />
				</div>
			</div>
		</div>
	);
}

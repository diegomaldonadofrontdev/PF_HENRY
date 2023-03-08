import React from "react";
import styles from "./Filter__SearchView.module.css";

// Filtros que agregar: deliveryCity, category, subcategory, epago

export default function Filter__SearchView() {
	return (
		<div className={styles.filterSearchView}>
			<div className={styles.container}>
				<h3>Filtrar busqueda</h3>
				<div className={styles.filter__container}>
					<div className={styles.select__container}>
						<h4>Ciudad:</h4>
						<select name="" id="">
							<option value="">Ciudad</option>
						</select>
					</div>
					<div className={styles.select__container}>
						<h4>Categoria</h4>
						<select name="" id="">
							<option value="">Categoria</option>
						</select>
					</div>
					<div className={styles.select__container}>
						<h4>Subcategoria:</h4>
						<select name="" id="">
							<option value="">Subcategoria</option>
						</select>
					</div>
					<div className={styles.select__container}>
						<h4>Medio de pago:</h4>
						<select name="" id="">
							<option value="">Medio de pago</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

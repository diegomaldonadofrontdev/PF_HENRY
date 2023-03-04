import React from "react";
import styles from "./UserSearch.module.css";
import { Link } from "react-router-dom";
import ComercioCard from "../../components/ComercioCard/ComercioCard";
import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";

export default function UserSearch() {
	return (
		<div className={styles.user__search}>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.logo}>
						<h1>PEDI-VERY</h1>
					</div>

					<Link className={styles.btn_market} to="/s">
						<i class="bx bx-store"></i>Registrá tu negocio
					</Link>
				</div>
			</header>
			<div className={styles.barrio__container}>
				<p>Zona:</p>
				<select name="" id="">
					<option value="">Barrio 1</option>
					<option value="">Barrio 2</option>
					<option value="">Barrio 3</option>
					<option value="">Barrio 4</option>
				</select>
			</div>
			<div className={styles.search__container}>
				<div className={styles.filtros__container}>
					<div className={styles.categorias}>
						<div>Cat 1</div>
						<div>Cat 2</div>
						<div>Cat 3</div>
						<div>Cat 4</div>
						<div>Cat 1</div>
						<div>Cat 2</div>
						<div>Cat 3</div>
						<div>Cat 4</div>
					</div>
					<div className={styles.filtros}>
						<select name="" id="">
							<option value="">Mejor Puntuados</option>
							<option value="">Menor tiempo de entrega</option>
							<option value="">Tajerta</option>
							<option value="">Descuentos</option>
						</select>
					</div>
				</div>

				<div className={styles.cards__container}>
					<div className={styles.search__input}>
						<i class="bx bx-search"></i>
						<input type="text" placeholder="Buscar..." />
					</div>
					<div className={styles.search__results}>
						<p>600 Restaurantes</p>
						<ContainerSearchComercio />
					</div>
				</div>

				<div className={styles.filtros__container}>
					<div>
						<label htmlFor="">Medio de Pago</label>
						<select name="" id="">
							<option value="">Efectivo</option>
							<option value="">Pago online</option>
							<option value="">American Express</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Categorias</label>
						<select name="" id="">
							<option value="">Arepas</option>
							<option value="">Bebidas</option>
							<option value="">Cafeteria</option>
							<option value="">Calzones</option>
							<option value="">Carnes</option>
							<option value="">Lomitos</option>
							<option value="">Sushi</option>
							<option value="">Comida China</option>
							<option value="">Comida Vegetarian</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

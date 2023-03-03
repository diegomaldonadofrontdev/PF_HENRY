import React from "react";
import styles from "./UserSearch.module.css";
import { Link } from "react-router-dom";

import CardStoreContainer from "../../components/CardStoreContainer/CardStoreContainer";

export default function UserSearch() {
	const categorias = [
		{
			id: 1,
			category: "verduleria",
		},
		{
			id: 2,
			category: "farmacia",
		},
		{
			id: 3,
			category: "limpieza",
		},
		{
			id: 4,
			category: "hamburgueseria",
		},
		{
			id: 5,
			category: "Pizzeria",
		},
		{
			id: 6,
			category: "Restaurant",
		},
	];
	const citys = [
		{
			id: 1,
			city: "Rosario",
		},
		{
			id: 2,
			city: "Asuncion",
		},
		{
			id: 3,
			city: "Tucuman",
		},
		{
			id: 4,
			city: "Medellin",
		},
		{
			id: 5,
			city: "Montevideo",
		},
		{
			id: 6,
			city: "Posadas",
		},
		{
			id: 7,
			city: "Buenos Aires",
		},
	];

	return (
		<div className={styles.user__search}>
			<header className={styles.header}>
				<div className={styles.container}>
					<h1>Logo</h1>
					<select name="" id="">
						{citys.map((x) => (
							<option id={x.id} value={x.city}>
								{x.city}
							</option>
						))}
					</select>
					<Link className={styles.btn_market} to="/s">
						<i class="bx bx-store"></i>Registrá tu negocio
					</Link>
				</div>
			</header>
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

						<CardStoreContainer />
					</div>
				</div>

				<div className={styles.filtros__container}>
					<div>
						<label htmlFor="">Medio de Pago</label>
						<select name="" id="">
							<option value="Efectivo">Efectivo</option>
							<option value="Tajeta">Pago online</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Categorias</label>
						<select name="" id="">
							{categorias.map((x) => (
								<option id={x.id} value={x.category}>
									{x.category}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

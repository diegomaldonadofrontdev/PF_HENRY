import React, { useEffect } from "react";
import styles from "./UserSearch.module.css";
import { Link } from "react-router-dom";
import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";
import { getCategories } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../images/gastronomy_icon.png";
import img2 from "../../images/health_icon.png";
import img3 from "../../images/clean_icon.png";

export default function UserSearch() {
	const dispatch = useDispatch();

	const categories = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	console.log(categories);

	// let img;

	// for (let i = 0; i < categories.length; i++) {
	// 	if (categories[i] === "Gastronomia") {
	// 		img = "../../images/gastronomy_icon.png";
	// 	} else if (categories[i] === "Salud") {
	// 		img = "../../images/health_icon.png";
	// 	} else {
	// 		img = "../../images/clean_icon.png";
	// 	}
	// }

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
						{categories?.map((x) => (
							<div>
								<img
									src={
										x === "Gastronomia"
											? img1
											: x === "Salud"
											? img2
											: x === "Limpieza"
											? img3
											: null
									}
									alt=""
								/>
								<h3>{x}</h3>
							</div>
						))}
					</div>
					<div className={styles.filtros}>
						<select name="" id="">
							<option value="">Mejor Puntuados</option>
							<option value="">Menor tiempo de entrega</option>
							<option value="">Tajerta</option>
							<option value="">Descuentos</option>
						</select>
					</div>
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
			</div>
		</div>
	);
}

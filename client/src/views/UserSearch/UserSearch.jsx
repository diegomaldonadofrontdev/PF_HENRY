import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	getTrades,
	getTradesCategories,
	getTradesFilter,
	getSubCategories,
} from "../../redux/actions/actions";
import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";
import styles from "./UserSearch.module.css";
import ComercioCard from "../../components/ComercioCard/ComercioCard";

import Header from "../../components/Header/Header";

// import Filter__SearchView from "../../components/Filter__SearchView/Filter__SearchView";

export default function UserSearch() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTrades());
	}, []);
	const comercios = useSelector((state) => state.allCommerces);
	console.log(comercios);
	const categories = useSelector((state) => state.tradesCategories);
	const subCategories = useSelector((state) => state.tradesSubCategories);
	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");
	const [subcategory, setSubCategory] = useState("");

	useEffect(() => {
		dispatch(getTrades());
		dispatch(getTradesCategories());
		dispatch(getSubCategories());
	}, [dispatch]);

	const handleOnChange = (e) => {};

	// const citiesUnrepeat = [...new Set(cities)];

	return (
		<>
			<Header />
			<div className={styles.banner}>
				<div className={styles.container}>
					<h2>Encontrá lo que buscás</h2>
				</div>
			</div>

			<div className={styles.search__container}>
				<div className={styles.filtros__container}>
					<form action="">
						<div>
							<p>Filtrar por Zona:</p>
							<select>
								<option value="">Opcion</option>
							</select>
						</div>
						<div>
							<p>Filtrar por Categoria:</p>
							<select>
								{categories.map((x) => (
									<option value="">{x}</option>
								))}
							</select>
						</div>
						<div>
							<p>Agregar Subcategoria:</p>
							<select>
								<option value="">Opcion</option>
							</select>
						</div>

						<div>
							<p>Filtrar por Medio de pago:</p>
							<select>
								<option value="">Opcion</option>
							</select>
						</div>
						<input type="submit" value={"Filtrar"} className={styles.submit} />
					</form>
				</div>

				<div className={styles.cards__container}>
					<div className={styles.search__results}>
						<p>{comercios.length} Locales encontrados:</p>
						{comercios.map((e) => (
							<Link to={`/comercio/${e._id}`}>
								<ComercioCard
									id={e._id}
									name={e.commerceName}
									rating={e.rating}
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

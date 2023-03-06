import React, { useEffect, useState } from "react";
import styles from "./UserSearch.module.css";
import { Link } from "react-router-dom";
import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";
import {
	getCategories,
	getTrades,
	filterByAscOrDesc,
	filterByTarjeta,
	filterByCity,
	filterByCategory,
} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../images/gastronomy_icon.png";
import img2 from "../../images/health_icon.png";
import img3 from "../../images/clean_icon.png";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function UserSearch() {
	const dispatch = useDispatch();
	const [currentAscAndDesc, setCurrentAscAndDesc] = useState("");
	const categories = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getTrades());
	}, [dispatch]);

	const comercios = useSelector((state) => state.allCommerces);

	const cities = [];
	if (comercios)
		for (let i = 0; i < comercios.length; i++) {
			for (let j = 0; j < comercios[i].length; j++) {
				for (let k = 0; k < comercios[i][j].deliveryzone.length; k++) {
					cities.push(comercios[i][j].deliveryzone[k]);
				}
			}
		}

	const citiesUnrepeat = [...new Set(cities)];

	const filters = useSelector((state) => state.filters);

	function handlerFilterByAscOrDesc(ev) {
		ev.preventDefault();
		dispatch(filterByAscOrDesc(ev.target.value));
		// setCurrentStatePage(1);
		setCurrentAscAndDesc(ev.target.value);
	}

	function handlerFilterTarjeta(ev) {
		ev.preventDefault();
		dispatch(filterByTarjeta(ev.target.value));
		console.log(ev.target.value);
	}

	function handlerFilterByCity(ev) {
		ev.preventDefault();
		dispatch(filterByCity(ev.target.value));
	}

	// function handlerByCategory(categoria) {
	// 	ev.preventDefault();
	// 	dispatch(getTradesByCategory(ev.target.value));
	// }

	return (
		<div className={styles.user__search}>
			<Header />
			<div className={styles.banner}>
				<div className={styles.container}>
					<h2>Encontrá lo que buscás</h2>
				</div>
			</div>
			<div className={styles.barrio__container}>
				<p>Buscá por zona:</p>
				<select
					name=""
					id=""
					onChange={(ev) => {
						handlerFilterByCity(ev);
					}}
				>
					<option>Todas</option>
					{citiesUnrepeat.map((x) => (
						<option>{x}</option>
					))}
				</select>
			</div>
			<div className={styles.search__container}>
				<div className={styles.filtros__container}>
					<div className={styles.categorias}>
						<select name="" id="">
							<option value="Todas">Todas</option>
							{categories?.map((x) => (
								<option value={x}>{x}</option>
							))}
						</select>
					</div>
					<div className={styles.filtros}>
						<p className={styles.label_filtro}>Ordenar Por Rating:</p>
						<select
							name=""
							id=""
							onChange={(ev) => handlerFilterByAscOrDesc(ev)}
						>
							<option value="Asc">Mejor Puntuados</option>
							<option value="Desc">Menor Puntuado</option>
						</select>
					</div>
					<div>
						<p className={styles.label_filtro}>Filtrar por medio de pago:</p>

						<select name="" id="" onChange={(ev) => handlerFilterTarjeta(ev)}>
							<option value="Todos">Todos</option>
							<option value="Efectivo">Efectivo</option>
							<option value="Tarjeta">Tarjeta</option>
						</select>
					</div>
				</div>

				<div className={styles.cards__container}>
					<SearchBar />
					<div className={styles.search__results}>
						<p>{comercios.comercios?.length} Locales encontrados:</p>
						<ContainerSearchComercio
							comercios={filters.length ? filters : comercios}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

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
} from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../images/gastronomy_icon.png";
import img2 from "../../images/health_icon.png";
import img3 from "../../images/clean_icon.png";
import Header from "../../components/Header/Header";

export default function UserSearch() {
	const dispatch = useDispatch();
	const [currentAscAndDesc, setCurrentAscAndDesc] = useState("");
	const categories = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const comercios = useSelector((state) => state.allCommerces);

	const filters = useSelector((state) => state.filters);

	useEffect(() => {
		dispatch(getTrades());
	}, [dispatch]);

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

	function handlerCategory(categoria) {
		dispatch(filterByCategory(categoria));
	}

	return (
		<div className={styles.user__search}>
			{/* <header className={styles.header}>
				<div className={styles.container}>
					<Link to="../">
						<div className={styles.logo}>
							<h1>PEDI-VERY</h1>
						</div>
					</Link>

					<Link className={styles.btn_market} to="/s">
						<i class="bx bx-store"></i>Registrá tu negocio
					</Link>
				</div>
			</header> */}
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
					{comercios.map((x) => x.map((x) => <option>{x.city}</option>))}
				</select>
			</div>
			<div className={styles.search__container}>
				<div className={styles.filtros__container}>
					<div className={styles.categorias}>
						{categories?.map((x) => (
							<div
								onClick={() => {
									handlerCategory(x);
								}}
								key={x}
							>
								<img
									src={
										x === "Gastronomia"
											? img1
											: x === "Salud"
											? img2
											: x === "Hogar"
											? img3
											: null
									}
									alt=""
								/>
								<h3
									onClick={(x) => {
										handlerCategory(x);
									}}
								>
									{x}
								</h3>
							</div>
						))}
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

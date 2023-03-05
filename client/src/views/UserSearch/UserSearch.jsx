import React, { useEffect } from "react";
import styles from "./UserSearch.module.css";
import { Link } from "react-router-dom";
import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";
import { getCategories, getTrades } from "../../redux/actions/actions";
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

	const trades = useSelector((state) => state.trades);

	useEffect(() => {
		dispatch(getTrades());
	}, [dispatch]);

	console.log(categories);

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
					{trades?.map((x) =>
						x.comercios.map((x) => <option>{x.city}</option>)
					)}
				</select>
			</div>
			<div className={styles.search__container}>
				<div className={styles.filtros__container}>
					<div className={styles.categorias}>
						{categories?.map((x) => (
							<div onClick={() => {}}>
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
								<h3>{x}</h3>
							</div>
						))}
					</div>
					<div className={styles.filtros}>
						<select name="" id="">
							<option value="mejor">Mejor Puntuados</option>
							<option value="menor">Menor Puntuado</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Medio de Pago</label>
						<select name="" id="">
							<option value="">Efectivo</option>
							<option value="">Tarjeta</option>
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
						<ContainerSearchComercio trades={trades} />
					</div>
				</div>
			</div>
		</div>
	);
}

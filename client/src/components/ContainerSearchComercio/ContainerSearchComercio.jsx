import React, { useEffect, useState } from "react";
import styles from "./ContainerSearchComercio.module.css";
import ComercioCard from "../../components/ComercioCard/ComercioCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrades } from "../../redux/actions/actions";

export default function ContainerSearchComercio(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTrades());
	}, [dispatch]);

	const comercios = useSelector((state) => state.allCommerces);
	const { city, category, subcategory, epagos } = useSelector(
		(state) => state.filters
	);

	if (
		(!city || city === "default") &&
		(!category || category === "default") &&
		(!subcategory || subcategory === "default") &&
		(!epagos || epagos === "default") &&
		!comercios.length
	) {
		return (
			<div className={styles.container__search}>
				{" "}
				<p>{comercios.length} Comercios encontrados</p>
				<h3>NO HAY COMERCIOS CARGADOS</h3>
			</div>
		);
	} else if (
		(!city ||
			city === "default" ||
			!category ||
			category === "default" ||
			!subcategory ||
			subcategory === "default" ||
			!epagos ||
			epagos === "default") &&
		comercios.length
	) {
		return (
			<div className={styles.container__search}>
				<p>{comercios.length} Comercios encontrados</p>

				{comercios?.map((x) => (
					<Link to={`../comercio/${x._id}`} className={styles.commerce}>
						<ComercioCard
							name={x.commerceName}
							rating={x.rating}
							epagos={x.epagos}
						/>
					</Link>
				))}
			</div>
		);
	} else {
		return (
			<div className={styles.container__search}>
				<p>{comercios.length} Comercios encontrados</p>
				<h3>NO HAY COMERCIOS QUE COINCIDAN CON LA BUSQUEDA</h3>
			</div>
		);
	}
}

import React from "react";
import styles from "./UserSearch.module.css";
import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";


import { useSelector } from "react-redux";


import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter__SearchView from "../../components/Filter__SearchView/Filter__SearchView";

export default function UserSearch() {


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
					<Filter__SearchView />
				</div>

				<div className={styles.cards__container}>
					<SearchBar />
					<div className={styles.search__results}>
						<p>{comercios.comercios?.length} Locales encontrados:</p>
						<ContainerSearchComercio comercios={comercios} />
					</div>
				</div>
			</div>
		</>
	);
}

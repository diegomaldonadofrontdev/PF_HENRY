import React from "react";

import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";
import styles from "./UserSearch.module.css";
import Header from "../../components/Header/Header";

import Filter__SearchView from "../../components/Filter__SearchView/Filter__SearchView";

export default function UserSearch() {
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
					<div className={styles.search__results}>
						<ContainerSearchComercio />
					</div>
				</div>
			</div>
		</>
	);
}

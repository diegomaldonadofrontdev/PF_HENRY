import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	getTrades,
	getTradesCategories,
	getTradesFilter,
	getSubCategories,
	getZonas,
} from "../../Redux/Actions/actions";
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

// const handleOnChange = (e) => {};

////////////////////////////

// export default function UserSearch() {
// 	const dispatch = useDispatch();
// 	useEffect(() => {
// 		dispatch(getTrades());
// 	}, [dispatch]);

// 	const comercios = useSelector((state) => state.allCommerces);
// 	console.log(comercios);
// 	const categories = useSelector((state) => state.tradesCategories);
// 	const zonas = useSelector((state) => state.zones);
// 	const subCategories = useSelector((state) => state.tradesSubCategories);
// 	console.log(subCategories);
// 	const [currentInput, setCurrentInput] = useState({
// 		zone: "",
// 		category: "",
// 		subCategory: "",
// 	});
// 	const [filters, setFilters] = useState("");

// 	useEffect(() => {
// 		dispatch(getTrades());
// 		dispatch(getTradesCategories());
// 		dispatch(getSubCategories());
// 		dispatch(getZonas());
// 	}, [dispatch]);
// }

// const handleOnChange = (e) => {
// 	const property = e.target.name;
// 	const value = e.target.value;
// 	setCurrentInput({ ...currentInput, [property]: value });
// };

// // const onChangeCategory = (e) => {
// // setCategory(e.target.value)
// // }

// // const onChangeSubCategory = (e) => {
// // 	setSubCategory(e.target.value)
// // }

// const handleFilters = (e) => {
// 	e.preventDefault();
// 	if (currentInput.zone && currentInput.category && currentInput.subCategory) {
// 		dispatch(
// 			getTradesFilter(
// 				currentInput.zone,
// 				currentInput.category,
// 				currentInput.subCategory
// 			)
// 		);
// 	} else if (currentInput.zone && currentInput.category) {
// 		dispatch(getTradesFilter(currentInput.zone, currentInput.category));
// 	} else if (currentInput.zone && currentInput.subCategory) {
// 		dispatch(getTradesFilter(currentInput.zone, currentInput.subCategory));
// 	}
// }
// 	// const handleOnChange = (e) => {};

// 	return (
// 		<>
// 			<Header />
// 			<div className={styles.banner}>
// 				<div className={styles.container}>
// 					<h2>Encontrá lo que buscás</h2>
// 				</div>
// 			</div>

// 			<div className={styles.search__container}>
// 				<div className={styles.filtros__container}>
// 					<form action="" onSubmit={handleFilters}>
// 						<div>
// 							<p>Filtrar por Categoria:</p>
// 							<select
// 								name="category"
// 								value={currentInput.category}
// 								onChange={handleOnChange}
// 							>
// 								{categories.map((e) => (
// 									<option value="">{e}</option>
// 								))}
// 							</select>
// 						</div>
// 						<div>
// 							<p>Agregar Subcategoria:</p>
// 							<select
// 								name="subCategory"
// 								value={currentInput.subCategory}
// 								onChange={handleOnChange}
// 							>
// 								<option value="">Opcion</option>
// 							</select>
// 						</div>
// 						<div>
// 							<p>Filtrar por Zona:</p>
// 							<select
// 								name="zone"
// 								value={currentInput.zone}
// 								onChange={handleOnChange}
// 							>
// 								{zonas.map((e) => (
// 									<option value="">{e}</option>
// 								))}
// 							</select>
// 						</div>

// 						<div>
// 							<p>Filtrar por Medio de pago:</p>
// 							<select>
// 								<option value="">Opcion</option>
// 							</select>
// 						</div>
// 						<input type="submit" value={"Filtrar"} className={styles.submit} />
// 					</form>
// 				</div>

// 				<div className={styles.cards__container}>
// 					<div className={styles.search__results}>
// 						<p>{comercios.length} Locales encontrados:</p>
// 						{comercios.map((e) => (
// 							<Link to={`/comercio/${e._id}`}>
// 								<ContainerSearchComercio
// 									key={e._id}
// 									id={e._id}
// 									name={e.commerceName}
// 									rating={e.rating}
// 								/>
// 							</Link>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

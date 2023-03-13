import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { getProductsFilter } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
	const dispatch = useDispatch();

	const [currentSearch, setCurrentSearch] = useState("");

	function handleInputChange(e) {
		e.preventDefault();
		setCurrentSearch(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getProductsFilter(currentSearch));
		setCurrentSearch("");
	}

	return (
		<div className={styles.search__input}>
			<i class="bx bx-search"></i>
			<form
				action=""
				onSubmit={(e) => {
					handleSubmit(e);
				}}
				className={styles.form}
			>
				<input
					type="text"
					placeholder="Buscar lo que querés comer..."
					onChange={(e) => {
						handleInputChange(e);
					}}
				/>
			</form>
		</div>
	);
}

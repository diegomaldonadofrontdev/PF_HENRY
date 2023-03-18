// React and Hooks
import React, { useState } from "react";

// React Redux
import { useDispatch } from "react-redux";

// Actions
import { fastProductSearch } from "../../redux/actions/index";

// Styles
import styles from "./SearchBar.module.css";

export default function SearchBar() {
	const dispatch = useDispatch();

	const [currentSearch, setCurrentSearch] = useState("");

	function handleInputChange(e) {
		e.preventDefault();
		console.log(e.target.value);
		dispatch(fastProductSearch(e.target.value));
		// setCurrentSearch(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log("Enviado");

		// setCurrentSearch("");
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

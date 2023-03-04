import React from "react";
import styles from "./OpinionForm.module.css";

export default function OpinionForm() {
	return (
		<div className={styles.opinion__form}>
			<div className={styles.container}>
				<form action="">
					<h3>Dejanos tu opinion</h3>
					<div className={styles.input__nombreLocal}>
						<label htmlFor="">Nombre</label>
						<input type="text" />
					</div>
					<div className={styles.input__negocio}>
						<label htmlFor="">Opinion</label>
						<textarea type="text" />
					</div>
					<div>
						<label htmlFor="">Rating</label>
						<input type="number" />
					</div>

					<button className={styles.form__button}>Comenzar</button>
				</form>
			</div>
		</div>
	);
}

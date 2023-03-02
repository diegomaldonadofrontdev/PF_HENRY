import React from "react";
import styles from "./HeroForm.module.css";

export default function HeroForm() {
	return (
		<div className={styles.hero__form}>
			<div className={styles.container}>
				<div className={styles.texto__form}>
					<h2>
						Empezá a vender en la web{" "}
						<span>lider en delivery online de Latinoamerica</span>
					</h2>
					<ul>
						<li>El mejor canal de ventas para tu local</li>
						<li>En el bolsillo de millones de usuarios</li>
						<li>El sistema de entrega mas avanzado</li>
						<li>Todo tu menu online y autogestionable</li>
					</ul>
					<p>Registra tu local ahora mismo!</p>
				</div>
				<form action="">
					<h3>Registro de tu local</h3>
					<div className={styles.input__nombreLocal}>
						<label htmlFor="">Nombre del Local</label>
						<input type="text" />
					</div>
					<div className={styles.input__negocio}>
						<label htmlFor="">Tipo de negocio</label>
						<input type="text" />
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__nombre}>
							<label htmlFor="">Nombre</label>
							<input type="text" />
						</div>
						<div className={styles.input__apellido}>
							<label htmlFor="">Apellido</label>
							<input type="text" />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__telefono}>
							<label htmlFor="">Telefono</label>
							<input type="text" />
						</div>
						<div className={styles.input__mail}>
							<label htmlFor="">Mail</label>
							<input type="text" />
						</div>
					</div>
					<button className={styles.form__button}>Comenzar</button>
				</form>
			</div>
		</div>
	);
}

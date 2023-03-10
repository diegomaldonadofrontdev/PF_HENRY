import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
	return (
		<div className={styles.registration__form}>
			<Header />
			<div className={styles.container}>
				<form action="" className={styles.form}>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Apellido</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Usuario</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Email</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Password</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">País</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Ciudad</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Dirección</label>
							<input type="text" placeholder="" />
						</div>
					</div>

					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Teléfono</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Status</label>
							<input type="text" placeholder="" />
						</div>
					</div>

					<ButtonPrimary texto="CREAR CUENTA" />
				</form>
			</div>
		</div>
	);
}

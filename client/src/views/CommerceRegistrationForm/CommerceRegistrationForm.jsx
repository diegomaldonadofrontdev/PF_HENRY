import React from "react";
import styles from "./CommerceRegistrationForm.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
export default function CommerceRegistrationForm() {
	return (
		<div className={styles.commerceRegistration__form}>
			<Header />
			<div className={styles.container}>
				<form action="" className={styles.form}>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre Del Comercio</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Subcategoria</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Descripción</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre de usuario</label>
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
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Dirección</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Teléfono</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Zona Delivery</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Rating</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Medios de pago</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Status</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<ButtonPrimary texto="CREAR COMERCIO" />
				</form>
			</div>
		</div>
	);
}

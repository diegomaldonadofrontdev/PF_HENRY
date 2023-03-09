import React from "react";
import styles from "./ProductCreationForm.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
export default function ProductCreationForm() {
	return (
		<div className={styles.productCration__form}>
			<Header />
			<div className={styles.container}>
				<form action="" className={styles.form}>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Categoría</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Precio</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Imagen</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Rating</label>
							<input type="text" placeholder="" />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Stock</label>
							<input type="text" placeholder="" />
						</div>
					</div>

					<div className={styles.input__container}>
						<label htmlFor="">Descripción</label>
						<textarea type="text" placeholder="" />
					</div>

					<ButtonPrimary texto="REGISTRAR PRODUCTO" />
				</form>
			</div>
		</div>
	);
}

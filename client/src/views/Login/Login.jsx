import React from "react";
import styles from "./Login.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";

export default function Login() {
	return (
		<div className={styles.login}>
			<Header />
			<div className={styles.container}>
				<h2>Registrá o ingresá para continuar</h2>
				<ButtonPrimary texto="Registra tu negocio" />
				<form className={styles.form}>
					<div className={styles.user}>
						<label htmlFor="">Usuario</label>
						<input type="text" />
					</div>
					<div className={styles.password}>
						<label htmlFor="">Clave</label>
						<input type="password" />
					</div>
					<div className={styles.options}>
						<ButtonPrimary texto="Sing In" />
						<ButtonPrimary texto="Login" />
					</div>
				</form>
				<div className={styles.other}>
					<ButtonPrimary texto="Sing In con Google" />
					<ButtonPrimary texto="Sing In con Facebook" />
				</div>

				<div className={styles.faqs}>
					<a href="/">Que es pedivey?</a>
					<a href="/">Como funciona?</a>
					<a href="/">Tutoriales</a>
				</div>
			</div>
		</div>
	);
}

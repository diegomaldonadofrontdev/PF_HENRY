import React from "react";
import Header from "../../components/Header/Header";
import styles from "./ResetPassword.module.css";

export default function ResetPassword() {
	return (
		<div className={styles.resetPassword}>
			<Header />
			<div className={styles.container}>
				<form action="">
					<input type="text" placeholder="ingresar nueva clave" />
					<input type="submit" value={"Enviar"} />
				</form>
			</div>
		</div>
	);
}

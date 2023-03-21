import React from "react";
import Header from "../../components/Header/Header";
import styles from "./SendEmail.module.css";

export default function SendEmail() {
	return (
		<div className={styles.sendEmail}>
			<Header />
			<div className={styles.container}>
				<form action="">
					<input type="text" placeholder="ingresar mail" />
					<input type="submit" value={"Enviar"} />
				</form>
			</div>
		</div>
	);
}

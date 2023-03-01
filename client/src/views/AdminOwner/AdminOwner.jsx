import React from "react";
import ContainerPerfil from "../../components/ContainerPerfil/ContainerPerfil";
import Panel from "../../components/Panel/Panel";
import Resumen from "../../components/Resumen/Resumen";
import styles from "./AdminOwner.module.css";

export default function AdminOwner() {
	return (
		<>
			<header>
				<div className={styles.container}>
					<h1>Panel de autogestion</h1>
				</div>
			</header>
			<div className={styles.container2}>
				<ContainerPerfil />
				<Panel />
				<Resumen />
			</div>
		</>
	);
}

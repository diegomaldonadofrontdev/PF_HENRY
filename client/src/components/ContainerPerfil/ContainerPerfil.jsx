import React from "react";
import styles from "./ContainerPerfil.module.css";
import logo from "../../images/logo_owner.jpg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function ContainerPerfil() {
	return (
		<div className={styles.perfil}>
			<div className={styles.container}>
				<div className={styles.perfilHeader}>
					<div className={styles.logoContainer}>
						<img src={logo} alt="logo" className={styles.logo} />
					</div>

					<h2>
						Parrilla
						<br /> 'El Toro'
					</h2>
				</div>

				<h3>Usuario / Rol</h3>
				<div className={styles.buttons1}>
					<ButtonPrimary texto="Pedidos" />
					<ButtonPrimary texto="Mis Productos" />
					<ButtonPrimary texto="Caja Diaria" />
				</div>

				<div className={styles.buttons2}>
					<ButtonPrimary texto="Mi Negocio (Admin)" />

					<a href="/">Pedido de Prueba</a>
					<a href="/">Tutoriales</a>
					<a href="/">Soporte</a>
				</div>
			</div>
		</div>
	);
}

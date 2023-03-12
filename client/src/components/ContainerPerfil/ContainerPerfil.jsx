import React from "react";
import styles from "./ContainerPerfil.module.css";
import logo from "../../images/logo_owner.jpg";
import ButtonDashboard from "../ButtonDashboard/ButtonDashboard";

export default function ContainerPerfil() {
	return (
		<div className={styles.perfil}>
			<div className={styles.container}>
				<div className={styles.perfilHeader}>
					<div className={styles.logoContainer}>
						<img src={logo} alt="logo" className={styles.logo} />
					</div>
					<div className={styles.datos}>
						<h3>Parrilla 'El Toro'</h3>
						<p className={styles.rol}>Administrador</p>
					</div>
				</div>
				<div className={styles.buttons1}>
					<ButtonDashboard texto="Pedidos" />
					<ButtonDashboard texto="Mis Productos" />
					<ButtonDashboard texto="Caja Diaria" />
					<ButtonDashboard texto="Mi Negocio (Admin)" />
					<ButtonDashboard texto="Pedido de Prueba" />
					<ButtonDashboard texto="Tutoriales" />
					<ButtonDashboard texto="Soporte" />
				</div>
				<div className={styles.resumen}>
					<h4>Resumen / Anuncios</h4>
					<p>Tu negocio se encuentra:</p>
					<div>
						<p>Abierto</p>
						<ButtonDashboard texto="Cambiar" />
					</div>
					<div className={styles.pedidosNumbers}>
						<div className={styles.pedidos_aceptados}>
							<p>
								Tenes <span className={styles.pedidos_number}>10</span> pedidos
								sin aceptar
							</p>
						</div>
						<div>
							<p>
								Tenes <span className={styles.pedidos_number}>00</span> pedidos
								sin enviar
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

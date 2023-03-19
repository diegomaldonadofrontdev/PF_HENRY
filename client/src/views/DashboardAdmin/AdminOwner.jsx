import React, { useState } from "react";
import Header from "../../components/Header/Header";
import PanelCajaDiaria from "../../components/PanelCajaDiaria/PanelCajaDiaria";
import PanelMiNegocio from "../../components/PanelMiNegocio/PanelMiNegocio";
import PanelMisProductos from "../../components/PanelMisProductos/PanelMisProductos";
import PanelPedidos from "../../components/PanelPedidos/PanelPedidos";
import logo from "../../images/logoowner.avif";
import styles from "./AdminOwner.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import useTradeBoss from "../../Hooks/useTradeBoss";
import { useNavigate } from "react-router-dom";

export default function AdminOwner() {

	const { isLoggedTradeBoss, logoutTradeBoss } = useTradeBoss();
	const navigate = useNavigate();

	const [currentTab, setCurrentTab] = useState({ id: 0, title: "" });

	const handleTabClick = (id, title) => {
		setCurrentTab({ id: id, title: title });
	};

	const buttonHandler = (e) => {
		logoutTradeBoss();
		navigate("/registration/tradeboss")
	}

	return (
		<>
			<Header />
			<div className={styles.admin}>
				<div className={styles.container}>
					<h2>
						{currentTab.title === ""
							? "Panel de autogestion"
							: currentTab.title}
					</h2>
					<div className={styles.admin__grid}>
						<div className={styles.perfil}>
							<div className={styles.perfil__header}>
								<div className={styles.img__container}>
									<img src={logo} alt="" />
								</div>
								<div className={styles.owner__info}>
									<h4>Parrilla 'El Toro'</h4>
									<p>Administrador</p>
								</div>
							</div>
							<div className={styles.perfil__handlers}>
								<a
									href="#"
									onClick={(e) => {
										handleTabClick(1, "Pedidos");
									}}
								>
									<i class="bx bx-shopping-bag"></i>Pedidos
								</a>
								<a
									href="#"
									onClick={() => {
										handleTabClick(2, "Mis Productos");
									}}
								>
									<i class="bx bxs-package"></i>Mis Productos
								</a>
								<a
									href="#"
									onClick={() => {
										handleTabClick(3, "Caja Diaria");
									}}
								>
									<i class="bx bx-money"></i>Caja Diaria
								</a>
								<a
									href="#"
									onClick={() => {
										handleTabClick(4, "Mi Negocio");
									}}
								>
									<i class="bx bx-store"></i>Mi Negocio
								</a>
							</div>
							<div className={styles.perfil__resumen}>
								<p>Tu negocio se encuentra:</p>
								<div>
									<p className={styles.status}>Abierto</p>
									<a href="/">Cambiar</a>
								</div>
								<div className={styles.status__count}>
									<p>
										Tenés pedidos sin aceptar:<span>10</span>
									</p>
									<p>
										Tenés pedidos sin enviar:<span>10</span>
									</p>
								</div>
							</div>
							<div className={styles.perfil__links}>
								<a href="/">Pedido de prueba</a>
								<a href="/">Tutoriales</a>
								<a href="/">Soporte</a>
							</div>
						</div>
						<div className={styles.panel}>
							{currentTab.id === 1 ? (
								<PanelPedidos />
							) : currentTab.id === 2 ? (
								<PanelMisProductos />
							) : currentTab.id === 3 ? (
								<PanelCajaDiaria />
							) : currentTab.id === 4 ? (
								<PanelMiNegocio />
							) : null}
						</div>
					</div>
				</div>
			</div>
			{isLoggedTradeBoss && <button style={{ border: "none" }} onClick={buttonHandler}><ButtonPrimary texto="Logout TradeBoss" /></button>}
		</>
	);
}

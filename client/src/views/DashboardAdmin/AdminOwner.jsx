import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PanelCajaDiaria from "../../components/PanelCajaDiaria/PanelCajaDiaria";
import PanelMiNegocio from "../../components/PanelMiNegocio/PanelMiNegocio";
import PanelMisProductos from "../../components/PanelMisProductos/PanelMisProductos";
import PanelPedidos from "../../components/PanelPedidos/PanelPedidos";
import logo from "../../images/logoowner.avif";
import styles from "./AdminOwner.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import useTradeBoss from "../../Hooks/useTradeBoss";
import useTrade from "../../Hooks/useTrade";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getTradesById from "../../redux/actions/getTradesById";
import { getOrdersByCommerce } from "../../redux/actions/getOrdersByCommerce";

export default function AdminOwner() {
	const { isLoggedTradeBoss, logoutTradeBoss } = useTradeBoss();
	const { logoutTrade } = useTrade();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [currentTab, setCurrentTab] = useState({ id: 0, title: "" });

	const idTrade = window.localStorage.getItem("idTrade");

	useEffect(() => {
		dispatch(getOrdersByCommerce(idTrade));
	}, []);

	const ordersCommerce = useSelector((state) => state.ordersCommerces);

	useEffect(() => {
		if (idTrade) {
			dispatch(getTradesById(idTrade));
		} else {
			navigate("/login/trades");
		}
	}, [dispatch, idTrade, navigate]);

	const currentTrade = useSelector((state) => state.currentTrade);
	// console.log(currentTrade);

	const handleTabClick = (id, title) => {
		setCurrentTab({ id: id, title: title });
	};

	const buttonHandler = (e) => {
		logoutTradeBoss();
		// navigate("/registration/tradeboss")
	};

	const logoutHandler = (e) => {
		logoutTrade();
		navigate("/login/trades");
	};

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
									<h4>{currentTrade.commerceName}</h4>
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
								<div className={styles.status__count}>
									<p>
										Tenés pedidos sin aceptar:<span>10</span>
									</p>
								</div>
							</div>
							<div className={styles.perfil__links}>
								<a href="/">Soporte</a>
							</div>
							<button style={{ border: "none" }} onClick={logoutHandler}>
								<ButtonPrimary texto="Logout trade" />
							</button>
						</div>
						<div className={styles.panel}>
							{currentTab.id === 1 ? (
								<PanelPedidos orders={ordersCommerce} />
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
			{isLoggedTradeBoss && (
				<button style={{ border: "none" }} onClick={buttonHandler}>
					<ButtonPrimary texto="Logout TradeBoss" />
				</button>
			)}
		</>
	);
}

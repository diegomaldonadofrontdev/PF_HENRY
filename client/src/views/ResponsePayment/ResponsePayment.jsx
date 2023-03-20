import React, { useEffect } from "react";
import styles from "./ResponsePayment.module.css";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import check from "../../images/check.png";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { updateStatusAndPayment } from "../../redux/actions/updateStatusAndPayment";

export default function ResponsePayment() {
	const { status } = useParams();
	const dispatch = useDispatch();

	// dispatch(updateStatusAndPayment(orderId, { payment: "MercadoPago" }));

	useEffect(() => {
		if (status === "success") {
			localStorage.removeItem("carritos");
		}
	}, [status]);
	return (
		<div className={styles.responsePayment}>
			<Header />
			{status === "success" ? (
				<div className={styles.success_view}>
					<img src={check} alt="" />
					<h2>Compra realizada con exito</h2>
					<div>
						<Link to="/">
							<ButtonPrimary texto="Seguir comprando" />
						</Link>
					</div>
				</div>
			) : (
				<div>
					<h2>Algo salio mal con tu compra</h2>
				</div>
			)}
			<Footer />
		</div>
	);
}

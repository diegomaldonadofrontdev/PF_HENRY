import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getOrdersByCommerce } from "../../redux/actions/getOrdersByCommerce";

import styles from "./PanelMiNegocio.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { updateCommerceInfo } from "../../redux/actions/updateCommerceInfo";
import getTradesById from "../../redux/actions/getTradesById";
import swal from "sweetalert";

export default function PanelMiNegocio() {
	const dispatch = useDispatch();
	const tradeId = localStorage.idTrade;
	console.log(tradeId);
	const loggedTrade = useSelector((state) => state.currentTrade);
	console.log(loggedTrade._id);

	const [body, setBody] = useState({
		commerceName: "",
		description: "",
		address: "",
		phone: "",
		image: "",
	});
	console.log(body);

	useEffect(() => {
		if (tradeId) {
			dispatch(getTradesById(tradeId));
		}
	}, [dispatch, tradeId]);

	useEffect(() => {
		if (loggedTrade) {
			setBody({
				...body,
				commerceName: loggedTrade.commerceName,
				description: loggedTrade.description,
				address: loggedTrade.address,
				phone: loggedTrade.phone,
				image: loggedTrade.image,
			});
		}
	}, [loggedTrade]);

	const handleCommerceImgUpdate = async (e) => {
		const files = e.target.files;
		const datas = new FormData();
		datas.append("file", files[0]);
		datas.append("upload_preset", "PEDI-VERY");
		const res = await fetch("https://api.cloudinary.com/v1_1/sebov96/upload", {
			method: "POST",
			body: datas,
		});
		const file = await res.json();
		setBody({
			...body,
			image: file.secure_url,
		});
	};

	function handlerChange(e) {
		const { name, value } = e.target;
		setBody({ ...body, [name]: value });
	}

	function handlerSubmit(e) {
		e.preventDefault();
		const { phone, address, image, commerceName, description } = body;
		if (!phone || !address || !image || !commerceName || !description) {
			swal({
				title: "Error!",
				text: "Rellena todos los campos correctamente, por favor",
				icon: "error",
				button: "Ok",
			});
		} else {
			dispatch(updateCommerceInfo(tradeId, body));
			swal({
				title: "Listo!",
				text: "Los datos del comercio fueron actualizados",
				icon: "success",
				button: "Ok",
			});
		}
	}

	const ordersCommerce = useSelector((state) => state.ordersCommerces);
	console.log(ordersCommerce);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getOrdersByCommerce());
	// }, []);

	return (
		<div className={styles.panel__miNegocio}>
			<div className={styles.miNegocio__body}>
				<div className={styles.membresia}>
					<h4>Estado de membresia</h4>
					<p>
						La membresia del comercio se encuentra activa hasta el dia
						10/10/2023
					</p>
					<p>Gracias por su confianza!</p>
				</div>
			</div>
			<div className={styles.resultadosVentas}>
				<table>
					<tr>
						<th>Nro</th>
						<th>Usuario</th>
						<th>Compra</th>
						<th>Precio</th>
						<th>Fecha</th>
					</tr>
					{ordersCommerce?.map((x) => (
						<tr>
							<td>{x.orderId}</td>
							<td>{x.client.fullname}</td>
							<td>{x.products.map((x) => x.name)}</td>
							<td>{x.total}</td>
							<td>{x.createdAt}</td>
						</tr>
					))}
				</table>
				<div className={styles.form__commerce}>
					<form action="" onSubmit={handlerSubmit}>
						<h4>Modificá tu información</h4>
						<label htmlFor="">Nombre del Comercio</label>
						<input
							type="text"
							name="commerceName"
							placeholder={loggedTrade.commerceName}
							onChange={handlerChange}
						/>
						<label htmlFor="">Descripción</label>
						<input
							type="text"
							name="description"
							placeholder="Editá la descripción"
							onChange={handlerChange}
						/>
						<label htmlFor="">Dirección</label>
						<input
							type="text"
							name="address"
							placeholder={loggedTrade.address}
							onChange={handlerChange}
						/>
						<label htmlFor="">Teléfono</label>
						<input
							type="text"
							name="phone"
							placeholder={loggedTrade.phone}
							onChange={handlerChange}
						/>
						<label htmlFor="">Foto de Perfil</label>
						<input type="file" onChange={handleCommerceImgUpdate} />

						<button type="submit">
							<ButtonPrimary texto="Actualizar datos" />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

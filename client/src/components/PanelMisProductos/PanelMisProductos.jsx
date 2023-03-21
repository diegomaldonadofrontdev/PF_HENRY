import React, { useEffect, useState } from "react";
import styles from "./PanelMisProductos.module.css";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import MiniCardProduct from "../MiniCardProduct/MiniCardProduct";
import { getAllProducts } from "../../redux/actions/getAllProducts";

import ProductCreationForm from "../../views/ProductCreationForm/ProductCreationForm";

export default function PanelMisProductos() {
	const dispatch = useDispatch();
	const tradeId = useSelector((state) => state.currentTrade._id);
	const [flag, setFlag] = useState(null);
	const allProducts = useSelector((state) => state.products);

	const [product, setProduct] = useState(null);

	function handlerProductInfo(product) {
		setProduct(product);
	}

	function handlerFlag(x) {
		if (x !== "edit") {
			setProduct(null);
		}
		setFlag(x);
	}

	useEffect(() => {
		dispatch(getAllProducts(tradeId));
	}, [tradeId]);

	return (
		<div className={styles.panel__misProductos}>
			<div className={styles.container}>
				<div className={styles.misProductos__header}>
					<div className={styles.buscador__producto}>
						<p>Buscar Por Producto</p>
						<form action="">
							<input type="text" />
							<input type="submit" value={"buscar"} className={styles.button} />
						</form>
					</div>
					<div className={styles.header__buttons}>
						<a href="#" className={styles.button}>
							Disponibles
						</a>
						<a href="#" className={styles.button}>
							No Disponibles
						</a>
						<a href="#" className={styles.button}>
							Ver todos
						</a>

						<a
							onClick={() => {
								handlerFlag("create");
							}}
						>
							Agregar Producto
						</a>
					</div>
				</div>
				<div className={styles.productos__container}>
					<div className={styles.resultados__productos}>
						{allProducts?.map((x) => (
							<MiniCardProduct
								product={x}
								fc={handlerFlag}
								fc2={handlerProductInfo}
							/>
						))}
					</div>
					{flag !== null ? (
						<div className={styles.edicion__productos}>
							<ProductCreationForm
								flag={flag}
								fc={handlerFlag}
								product={product}
							/>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

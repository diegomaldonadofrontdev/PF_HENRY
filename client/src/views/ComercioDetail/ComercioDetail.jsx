import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import { getProductById } from "../../redux/actions/actions";
import styles from "./ComercioDetail.module.css";

export default function ComercioDetail() {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch]);

	return (
		<div className={styles.comercio_detail}>
			<header className={styles.header}>
				<div className={styles.container}>
					<Link to="/busqueda">Volver</Link>
				</div>
			</header>
			<div className={styles.container}>
				<div className={styles.comercio__header}>
					<h2>Nombre del Comercio</h2>
					<div className="rating">Rating del comercio</div>
				</div>
				<div className={styles.results}>
					<div className={styles.subcategorias}>
						<h3>Categorias:</h3>
						<div>
							<p>Categoria 1</p>
							<p>Categoria 2</p>
							<p>Categoria 3</p>
							<p>Categoria 4</p>
							<p>Categoria 5</p>
							<p>Categoria 6</p>
						</div>
					</div>
					<div className={styles.productCard__container}>
						<ProductoCard />
					</div>
				</div>
			</div>
		</div>
	);
}

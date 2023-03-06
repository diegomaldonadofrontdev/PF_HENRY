import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import { getProductById } from "../../Redux/actions/actions";
import styles from "./ComercioDetail.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

export default function ComercioDetail() {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch]);

	const commerce = useSelector((state) => state.product[0]);

	console.log(commerce);

	const categorias = commerce?.productos.map((x) => x.category);

	const unicos = categorias?.filter((valor, indice) => {
		return categorias.indexOf(valor) === indice;
	});

	return (
		<div className={styles.comercio_detail}>
			<Header />

			<div className={styles.container}>
				<div className={styles.comercio__header}>
					<h2>{commerce?.commerceName}</h2>
					<div className="rating">
						Rating: {commerce?.rating} <i class="bx bxs-star"></i>
					</div>
					<Link to="/busqueda" className={styles.btn__volver}>
						<ButtonPrimary texto="Volver" />
					</Link>
				</div>
				<SearchBar />

				<div className={styles.results}>
					<div className={styles.subcategorias}>
						<h3>Categorias:</h3>
						<ul>
							{unicos?.map((x) => (
								<li>{x}</li>
							))}
						</ul>
					</div>
					<div className={styles.productCard__container}>
						{commerce?.productos.map((x) => (
							<ProductoCard name={x.name} price={x.price} img={x.image} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

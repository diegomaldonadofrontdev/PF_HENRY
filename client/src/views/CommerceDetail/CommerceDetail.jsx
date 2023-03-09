import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import { getProductById } from "../../redux/actions/actions";
import styles from "./CommerceDetail.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import CardCart from "../../components/CardCart/CardCart";

export default function CommerceDetail() {
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
			<div className={styles.comercio__header}>
				<div className={styles.container}>
					<h2>{commerce?.commerceName}</h2>
					<div className={styles.rating}>
						<p>
							{" "}
							Rating: {commerce?.rating} <i class="bx bxs-star"></i>
						</p>
					</div>
					<Link to="/busqueda" className={styles.btn__volver}>
						<ButtonPrimary texto="Volver" />
					</Link>
				</div>
			</div>
			<div className={styles.container}>
				<SearchBar />
				<div className={styles.subcategorias}>
					<h3>Categorias:</h3>
					<ul>
						<li>Categoria 1</li>
						<li>Categoria 2</li>
						<li>Categoria 3</li>
						<li>Categoria 4</li>
						<li>Categoria 5</li>
					</ul>
				</div>
				<div className={styles.results}>
					<div className={styles.productCard__container}>
						<ProductoCard
							name="Producto 1"
							price="$1.000"
							description="Alta hambuerguesa con queso. Combo papas y gaseosa grandes"
							img="https://images.rappi.com.ar/restaurants_background/mcdonaldscol-1660251198623.jpg?e=webp&q=70&d=300x300"
						/>
						<ProductoCard
							name="Producto 1"
							price="$1.000"
							description="Alta hambuerguesa con queso. Combo papas y gaseosa grandes"
							img="https://images.rappi.com.ar/restaurants_background/mcdonaldscol-1660251198623.jpg?e=webp&q=70&d=300x300"
						/>
						<ProductoCard
							name="Producto 1"
							price="$1.000"
							description="Alta hambuerguesa con queso. Combo papas y gaseosa grandes"
							img="https://images.rappi.com.ar/restaurants_background/mcdonaldscol-1660251198623.jpg?e=webp&q=70&d=300x300"
						/>
						<ProductoCard
							name="Producto 1"
							price="$1.000"
							description="Alta hambuerguesa con queso. Combo papas y gaseosa grandes"
							img="https://images.rappi.com.ar/restaurants_background/mcdonaldscol-1660251198623.jpg?e=webp&q=70&d=300x300"
						/>
					</div>
					<div className={styles.cart}>
						<div className={styles.cart__header}>
							<h3>Tu pedido</h3>
						</div>
						<ul>
							<li>
								<CardCart />
							</li>
							<li>
								<CardCart />
							</li>
							<li>
								<CardCart />
							</li>
						</ul>
						<div className={styles.total__container}>
							<p>
								Total: <span>$100.000</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

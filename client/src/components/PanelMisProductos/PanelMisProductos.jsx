import React from "react";
import styles from "./PanelMisProductos.module.css";
import img from "../../images/pizza.jpg";
import MiniCardProduct from "../MiniCardProduct/MiniCardProduct";

export default function PanelMisProductos() {
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
						<div>
							<a href="#" className={styles.button__green}>
								Disponibles
							</a>
							<a href="#" className={styles.button__red}>
								No Disponibles
							</a>
						</div>
						<div>
							<a href="#">Ver todos</a>
							<a href="#">Ver promos</a>
						</div>
						<a href="#" className={styles.button__agregar}>
							Agregar <br />
							Producto
						</a>
					</div>
				</div>
				<div className={styles.productos__container}>
					<div className={styles.resultados__productos}>
						<MiniCardProduct />
					</div>
					<div className={styles.card__productDetail}>
						<div className={styles.infoProducto}>
							<div className={styles.img__container}>
								<img src={img} alt="" />
							</div>
							<div className={styles.infoText}>
								<h4>Pizza a la piedra</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Officiis veritatis beatae excepturi provident cumque quisquam
									voluptas, corporis deleniti ea, laborum cupiditate delectus
									ducimus suscipit facilis? Cum et odit amet alias!
								</p>
								<p>Precio: $1.500</p>
							</div>
						</div>

						<div className={styles.product__status}>
							<p>Estado:</p> <p>Disponible</p>
							<input type="checkbox" />
						</div>
						<div>
							<div className={styles.buttons__editdelete}>
								<a href="#" className={styles.editarProducto}>
									Editar producto
								</a>
								<a href="#" className={styles.eliminarProducto}>
									Eliminar producto
								</a>
							</div>
						</div>
					</div>
					<div className={styles.productos__editForm}>
						<h4>Editá tu producto</h4>
						<form action="">
							<div>
								<label htmlFor="">Nombre</label>
								<input type="text" />
							</div>
							<div>
								<label htmlFor="">Resumen</label>
								<textarea name="" id=""></textarea>
							</div>
							<div>
								<label htmlFor="">Descripcion</label>
								<textarea name="" id=""></textarea>
							</div>
						</form>
						<div className={styles.form__edit}>
							<div className={styles.buttons__editdelete}>
								<a href="#" className={styles.eliminarProducto}>
									Cancelar
								</a>
								<a href="#" className={styles.editarProducto}>
									Actualizar
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

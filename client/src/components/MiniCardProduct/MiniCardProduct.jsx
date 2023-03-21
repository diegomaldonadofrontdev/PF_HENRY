import React from "react";
import styles from "./MiniCardProduct.module.css";
import mila from "./../../images/milanesa.avif";

export default function MiniCardProduct({ product, fc, fc2 }) {
	return (
		<div className={styles.miniCardProduct}>
			<div className={styles.img__container}>
				<img src={mila} alt="" />
			</div>
			<div className={styles.info}>
				<h4>{product.name}</h4>
				<div className={styles.buttons}>
					<button
						onClick={() => {
							fc("edit");
							fc2(product);
						}}
					>
						Editar
					</button>
					<button>Eliminar</button>
				</div>
			</div>
		</div>
	);
}

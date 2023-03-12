import React from "react";
import styles from "./MiniCardProduct.module.css";
import mila from "./../../images/milanesa.avif";

export default function MiniCardProduct() {
	return (
		<div className={styles.miniCardProduct}>
			<div className={styles.img__container}>
				<img src={mila} alt="" />
			</div>
			<div className={styles.info}>
				<h4>Mila napo con fritas</h4>
			</div>
		</div>
	);
}

import React, { useState } from "react";
import styles from "./ContainerSearchComercio.module.css";
import ComercioCard from "../../components/ComercioCard/ComercioCard";
import { Link } from "react-router-dom";

export default function ContainerSearchComercio(props) {
	return (
		<div className={styles.container__search}>
			{comercios?.map((x) =>
				x.map((x) => (
					<Link to={`../comercio/${x.id}`} className={styles.commerce}>
						<ComercioCard
							name={x.commerceName}
							rating={x.rating}
							epagos={x.epagos}
						/>
					</Link>
				))
			)}
		</div>
	);
}

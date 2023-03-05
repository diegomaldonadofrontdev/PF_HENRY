import React from "react";
import styles from "./ContainerSearchComercio.module.css";
import ComercioCard from "../../components/ComercioCard/ComercioCard";
import { Link } from "react-router-dom";

export default function ContainerSearchComercio(props) {
	const { comercios} = props;
	return (
		<div className={styles.container__search}>
			{comercios?.map((x) =>
				x.comercios.map((x) => (
					<Link to={`../comercio/${x.id}`}>
						<ComercioCard name={x.commerceName} />
					</Link>
				))
			)}
		</div>
	);
}

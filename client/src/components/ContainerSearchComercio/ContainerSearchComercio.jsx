import React from "react";
import styles from "./ContainerSearchComercio.module.css";
import ComercioCard from "../../components/ComercioCard/ComercioCard";

export default function ContainerSearchComercio(props) {
	const { trades } = props;
	return (
		<div className={styles.container__search}>
			{trades?.map((x) =>
				x.comercios.map((x) => <ComercioCard name={x.commerceName} />)
			)}
		</div>
	);
}

import React, { useEffect } from "react";
import styles from "./ContainerSearchComercio.module.css";
import { getTrades } from "../../redux/actions/actions";
import ComercioCard from "../../components/ComercioCard/ComercioCard";

import { useSelector, useDispatch } from "react-redux";

export default function ContainerSearchComercio() {
	const dispatch = useDispatch();

	const trades = useSelector((state) => state.trades);

	useEffect(() => {
		dispatch(getTrades());
	}, [dispatch]);

	console.log("Esto es: trades: " + trades);

	return (
		<div className={styles.container__search}>
			{trades?.map((x) =>
				x.comercios.map((x) => <ComercioCard name={x.commerceName} />)
			)}
		</div>
	);
}

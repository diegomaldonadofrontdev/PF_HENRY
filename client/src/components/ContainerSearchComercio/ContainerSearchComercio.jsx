import React, { useEffect } from "react";
import ComercioCard from "../ComercioCard/ComercioCard";
import styles from "./ContainerSearchComercio.module.css";
import { getTrades } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function ContainerSearchComercio() {
	const dispatch = useDispatch();

	const trades = useSelector((state) => state);

	useEffect(() => {
		dispatch(getTrades());
	}, [dispatch]);

	console.log(trades);
	return (
		<div className={styles.container__search}>
			{/* {trades.trades[0]?.map((x) => (
					<ComercioCard name={x.commerceName} />
				))} */}
		</div>
	);
}

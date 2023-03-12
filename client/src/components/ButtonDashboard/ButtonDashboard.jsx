import React from "react";
import styles from "./ButtonDashboard.module.css";

export default function ButtonDashboard(props) {
	return <div className={styles.ButtonDashboard}>{props.texto}</div>;
}

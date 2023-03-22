import React from "react";
import styles from "./ButtonPrimary.module.css";

export default function ButtonPrimary(props) {
  return <div className={styles.buttonPrimary}>{props.texto}</div>;
}

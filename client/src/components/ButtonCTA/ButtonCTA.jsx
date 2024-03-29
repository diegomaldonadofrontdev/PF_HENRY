import React from "react";
import styles from "./ButtonCTA.module.css";
export default function ButtonCTA(props) {
  return (
    <div
      className={`${styles.buttonCTA} ${props.background}`}
      onClick={() => {
        props.fc();
      }}
    >
      <i class="bx bx-credit-card"></i>
      {props.title}
    </div>
  );
}

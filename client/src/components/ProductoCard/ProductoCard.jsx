// React and Hooks
import React from "react";

// React Redux
import { useDispatch } from "react-redux";

// Actions
import { setCarrito } from "../../redux/actions/index";

// Components
import ButtonProduct from "../ButtonProduct/ButtonProduct";

// Styles
import styles from "./ProductoCard.module.css";

export default function ProductoCard(props) {
  const dispatch = useDispatch();

  function agregarCarrito() {
    dispatch(
      setCarrito(
        {
          id: props.idProduct,
          name: props.name,
          price: props.price,
          description: props.description,
          img: props.img,
        },
        props.idCommerce
      )
    );
  }

  return (
    <div className={styles.product__card}>
      <div>
        <div className={styles.img__container}>
          <img src={props.img} alt="" />
        </div>
        <div className={styles.producto__info}>
          <h3>{props.name}</h3>
          <p className={styles.description}> {props.description}</p>
          <p className={styles.price}>${props.price}</p>
        </div>
      </div>

      <ButtonProduct fc={agregarCarrito} />
    </div>
  );
}

import React from "react";
import styles from "./ResponsePaymentCash.module.css";
import Header from "../../components/Header/Header";
import check from "../../images/check.png";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Footer from "../../components/Footer/Footer";

export default function ResponsePaymentCash() {
  return (
    <div className={styles.responsePayment}>
      <Header />

      <div className={styles.success_view}>
        <img src={check} alt="" />
        <h2>Compra realizada con éxito</h2>

        <div>
          <Link to="/search">
            <ButtonPrimary texto="Seguir comprando" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

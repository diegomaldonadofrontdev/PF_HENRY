import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.faqs}>
          <div>
            <Link className={styles.faq} to="/">
              Quienes somos?
            </Link>
            <Link className={styles.faq} to="/registration">
              Se parte de Pedi-Very
            </Link>
            <Link className={styles.faq} to="/registration_commerce">
              Registra tu negocio
            </Link>
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="" className={styles.logo} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.firma}>
        <p>Desarrollado por PediVery</p>
      </div>
    </footer>
  );
}

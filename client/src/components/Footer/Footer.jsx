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
						<Link className={styles.faq}>Quienes somos?</Link>
						<Link className={styles.faq}>Se parte de Pedi-Very</Link>
						<Link className={styles.faq}>Registra tu negocio</Link>
					</div>
					<div>
						<Link>
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

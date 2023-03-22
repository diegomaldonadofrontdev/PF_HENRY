import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.faqs}>
					<div>
						<Link className={styles.faq}>Quienes somos?</Link>
						<Link className={styles.faq}>Terminos y condiciones</Link>
						<Link className={styles.faq}>Privacidad</Link>
						<Link className={styles.faq}>Se parte de Pedi-Very</Link>
						<Link className={styles.faq}>Blog</Link>
					</div>
					<div>
						<Link className={styles.faq}>Top comidas</Link>
						<Link className={styles.faq}>Top cadenas</Link>
						<Link className={styles.faq}>Top ciudades</Link>
					</div>
					<div>
						<Link className={styles.faq}>Registra tu negocio</Link>
						<Link className={styles.faq}>Centro de Socios</Link>
					</div>
					<div>
						<Link className={styles.faq}>Acuerdos corporativos</Link>
					</div>
				</div>
			</div>
			<div className={styles.container}>
				<p>Desarrollado por PediVery</p>
			</div>
		</footer>
	);
}

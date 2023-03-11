import React from "react";
import ButtonDashboard from "../ButtonDashboard/ButtonDashboard";
import mila from "./../../images/milanesa.avif";

import styles from "./Resumen.module.css";
export default function Resumen() {
	return (
		<div className={styles.resumen}>
			<div className={styles.container}>
				<div className={styles.img__container}>
					<img src={mila} alt="" />
				</div>
				<div>
					<h4>Milanesa Napolitana con Fritas</h4>
					<p className={styles.idPedido}>Pedido numero: #012393</p>
				</div>

				<div className={styles.infoPedido}>
					<p>
						Usuario: <span>FrancoRodriguez</span>
					</p>
					<p>
						Email: <span>francorodriguez@gmail.com</span>
					</p>
					<div>
						<p>
							Teléfono: <span>11-4509-1234</span>
						</p>
						<ButtonDashboard texto="Whatsapp" />
					</div>

					<p>
						Hora del pedido: <span>12:00 Hs.</span>
					</p>
					<p>
						Zona: <span>Almagro.</span>
					</p>
					<p>
						Dirección de entrega: <span>Av. Medrano 600.</span>
					</p>

					<p>
						Forma de pago: <span>MercadoPago.</span>
					</p>
					<div>
						<p>
							Estado del Pedido: <span></span>
						</p>
						<ButtonDashboard texto="Cambiar" />
					</div>
					<div>
						<p>
							Estado del envio: <span></span>
						</p>
						<ButtonDashboard texto="Cambiar" />
					</div>
					<div>
						<p>
							Estado del pago: <span></span>
						</p>
						<ButtonDashboard texto="Cambiar" />
					</div>
				</div>
			</div>
		</div>
	);
}

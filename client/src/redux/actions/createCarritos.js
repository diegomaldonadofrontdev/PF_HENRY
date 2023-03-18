import { ARMADO_CARRITO } from "../actions/types";

export default function armadoCarrito(carritos) {
	return (dispatch) =>
		dispatch({
			type: ARMADO_CARRITO,
			payload: carritos,
		});
}

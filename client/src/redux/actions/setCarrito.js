import { SET_CARRITO } from "../actions/types";

export function setCarrito(producto, idCommerce) {
  return async function (dispatch) {
    return dispatch({
      type: SET_CARRITO,
      payload: { producto, idCommerce },
    });
  };
}

export function armadoCarrito(carritos) {
  return (dispatch) =>
    dispatch({
      type: "ARMADO_CARRITO",
      payload: carritos,
    });
}

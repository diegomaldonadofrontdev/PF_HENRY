import { ADD_AMOUNT, SUBSTRACT_AMOUNT } from "../actions/types";

export function addAmount(idProduct, idCommerce) {
  return async function (dispatch) {
    return dispatch({
      type: ADD_AMOUNT,
      payload: { idProduct, idCommerce },
    });
  };
}

export function substractAmount(idProduct, idCommerce) {
  return async function (dispatch) {
    return dispatch({
      type: SUBSTRACT_AMOUNT,
      payload: { idProduct, idCommerce },
    });
  };
}

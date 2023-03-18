import axios from "axios";

import { GET_ZONES } from "../actions/types";

export function getEpagos() {
  return async function (dispatch) {
    const zonas = await axios.get(`/clients/trades/deliveryZone`);
    return dispatch({
      type: GET_ZONES,
      payload: zonas.data,
    });
  };
}

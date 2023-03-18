import axios from "axios";

import { GET_DELIVERY_ZONES } from "../actions/types";

export function getDeliveryZones() {
  return async function (dispatch) {
    const zones = await axios.get(`/clients/trades/deliveryZone`);
    return dispatch({
      type: GET_DELIVERY_ZONES,
      payload: zones.data,
    });
  };
}

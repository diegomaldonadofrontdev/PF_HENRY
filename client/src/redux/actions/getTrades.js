import axios from "axios";

import { GET_TRADES } from "../actions/types";

export function getTrades() {
  return async function (dispatch) {
    const trades = await axios.get(`/clients/trades/search`);
    return dispatch({ type: GET_TRADES, payload: trades.data });
  };
}

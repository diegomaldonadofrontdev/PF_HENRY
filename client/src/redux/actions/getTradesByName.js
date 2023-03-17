import axios from "axios";
export const GET_TRADES_BY_NAME = "GET_TRADES_BY_NAME";

export function getTradesByName(commerceName) {
  return async function (dispatch) {
    const trades = await axios.get(
      `/trades/search?commerceName=${commerceName}`
    );
    return dispatch({ type: GET_TRADES_BY_NAME, payload: trades.data });
  };
}

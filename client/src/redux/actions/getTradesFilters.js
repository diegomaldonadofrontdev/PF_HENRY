import axios from "axios";

import { TRADES_FILTERS } from "../actions/types";

export function getTradesFilter(city, category, subcategory, epagos) {
  return async function (dispatch) {
    const result = await axios.get(
      `/clients/trades/search?deliveryZone=${city}&category=${category}&subcategory=${subcategory}&epagos=${epagos}`
    );

    return dispatch({
      type: TRADES_FILTERS,
      payload: result.data,
    });
  };
}

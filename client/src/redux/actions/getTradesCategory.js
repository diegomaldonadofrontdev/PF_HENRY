import axios from "axios";

import { GET_TRADES_CATEGORIES } from "../actions/types";

export const getTradesCategories = () => {
  return async function (dispatch) {
    const json = await axios.get(`/clients/trades/categories`);
    return dispatch({ type: GET_TRADES_CATEGORIES, payload: json.data });
  };
};

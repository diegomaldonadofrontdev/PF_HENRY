import axios from "axios";

import { GET_ALL_PRODUCTS } from "../actions/types";

export function getAllProducts(tradeId) {
  return async function (dispatch) {
    const products = await axios.get(
      `/clients/products/search?tradeId=${tradeId}`
    );
    return dispatch({ type: GET_ALL_PRODUCTS, payload: products.data });
  };
}

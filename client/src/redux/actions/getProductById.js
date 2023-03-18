import axios from "axios";

import { GET_PRODUCT_BY_ID } from "../actions/types";

export function getProductById(id) {
  return async function (dispatch) {
    if (id) {
      const response = await axios(`/clients/products/search/${id}`);
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: [response.data],
      });
    }
  };
}

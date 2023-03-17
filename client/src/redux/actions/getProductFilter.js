import axios from "axios";
import { PRODUCT_FILTERS } from "../actions/types";

export function getProductsFilter(tradeId, name, category) {
  return async (dispatch) => {
    let filtredProd;
    if (tradeId && name && category) {
      filtredProd = await axios.get(
        `/clients/products/search?tradeId=${tradeId}&productName=${name}&productCategory=${category}`
      );
    } else if (tradeId && name) {
      filtredProd = await axios.get(
        `/clients/products/search?tradeId=${tradeId}&productName=${name}`
      );
    } else if (tradeId && category) {
      filtredProd = await axios.get(
        `/clients/products/search?tradeId=${tradeId}&productCategory=${category}`
      );
    } else {
      filtredProd = await axios.get(
        `/clients/products/search?tradeId=${tradeId}`
      );
    }
    dispatch({
      type: PRODUCT_FILTERS,
      payload: filtredProd.data,
    });
  };
}

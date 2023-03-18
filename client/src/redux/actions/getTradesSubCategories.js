import axios from "axios";
import { GET_TRADES_SUBCATEGORIES } from "../actions/types";

export function getSubCategories(category) {
  return async function (dispatch) {
    const subCat = await axios.get(
      `/clients/trades/subcategories?category=${category}`
    );
    return dispatch({ type: GET_TRADES_SUBCATEGORIES, payload: subCat.data });
  };
}

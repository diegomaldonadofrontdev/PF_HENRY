import { SET_FILTER_CATEGORY_COMMERCE } from "../actions/types";

export function filterCategoryCommerce(category) {
  return async function (dispatch) {
    return dispatch({
      type: SET_FILTER_CATEGORY_COMMERCE,
      payload: { category },
    });
  };
}

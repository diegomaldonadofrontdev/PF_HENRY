import { HANDLER_TRADES_FILTERS } from "../actions/types";

export function handlerTradesFilter(a) {
  return async function (dispatch) {
    return dispatch({
      type: HANDLER_TRADES_FILTERS,
      payload: a,
    });
  };
}

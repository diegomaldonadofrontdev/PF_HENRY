function tradesReducer(state = [], action) {
	if (action.type === "GET_TRADES") {
		return action.payload;
	}
	return state;
}

export default tradesReducer;

// function tradesReducer(state = { categories: [], trades: [] }, action) {
//   if (action.type === "GET_TRADES") {
//     return action.payload;
//   }
//   return { ...state, trades: action.payload };
// }

// export default tradesReducer;

function filterCategoryReducer(state = [], action) {
	if (action.type === "FILTER_CATEGORY") {
		
		return action.payload;
	}
	return state;
}

export default filterCategoryReducer;

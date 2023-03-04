function tradesReducer(state=[],action){
    if(action.type === "GET_TRADES"){
      return action.payload;
    }
    return state;
  };
  
  export default tradesReducer;
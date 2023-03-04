export default function productReducer(state = {}, action) {
    if (action.type === "GET_PRODUCT_BY_ID") {
      return action.payload
    }
    if (action.type === "void") {
      return {}
    }
    
    return state;
  }
  
  
  
   
  
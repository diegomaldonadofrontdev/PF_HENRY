import productReducer from "./productReducer";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import {combineReducers} from 'redux';



const allReducers = combineReducers({
    product: productReducer,
    products: productsReducer,
    users: userReducer,
  });
  
  export default allReducers;
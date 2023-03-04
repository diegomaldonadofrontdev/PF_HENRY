import productReducer from "./productReducer";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import {combineReducers} from 'redux';
import tradesReducer from "./tradesReducer";



const allReducers = combineReducers({
    product: productReducer,
    products: productsReducer,
    users: userReducer,
    trades: tradesReducer,
  });
  
  export default allReducers;
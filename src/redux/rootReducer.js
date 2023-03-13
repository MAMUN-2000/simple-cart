import { combineReducers } from "redux";

import addProductReducer from "./addProduct/reducer";
import addToCartReducer from './addToCart/reducer';

const rootReducer = combineReducers({
	addProduct: addProductReducer,
	addToCart: addToCartReducer,
} );

export default rootReducer;
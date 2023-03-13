/** @format */

import * as actionType from "./actionsType";

export const addProduct = (item) => {
	return {
		type: actionType.ADD_PRODUCT,
		payload: item,
	};
};

export const addToCart = (item) => {
	return {
		type: actionType.ADD_CART,
		payload: item,
	};
};

export const removeProduct = (item) => {
	return {
		type: actionType.DELETE,
		payload: item,
	};
};

export const incrementProduct = (id) => {
	return {
		type: actionType.INCREMENT,
		payload:id
	};
};
export const decrementProduct = ( id ) =>
{
	return {
		type: actionType.DECREMENT,
		payload:id
	}
}
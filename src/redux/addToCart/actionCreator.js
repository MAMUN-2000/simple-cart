/** @format */

import * as actionType from "./actionsType";

export const addToCart = (item) => {
	return {
		type: actionType.ADD_CART,
		payload: item,
	};
};

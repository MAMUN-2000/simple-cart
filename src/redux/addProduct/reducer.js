/** @format */

import * as actionsType from "./actionsType";
import initialState from "./initialState";

function uniqeId(arr) {
	const newId = arr.reduce((acc, cur) => {
		const updated = Math.max(acc, cur.id);

		return updated + 1;
	}, 0);

	return newId;
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionsType.ADD_PRODUCT:
			return {
				...state,
				productList: [
					...state.productList,
					{
						id: uniqeId(state.productList),
						imgUrl: action.payload.productImg,
						price: action.payload.productPrice,
						name: action.payload.productName,
						category: action.payload.productCategory,
						quantity: action.payload.productQuantity,
					},
				],
			};

		case actionsType.ADD_CART:
			const itemIndex = state.cart.findIndex((c) => c.id === action.payload.id);

			if (itemIndex >= 0) {
				state.cart[itemIndex].quantity += 1;
				return {
					...state,
					cart: [...state.cart],
				};
			} else {
				const temp = { ...action.payload, quantity: 1 };
				return {
					...state,
					cart: [...state.cart, temp],
				};
			}

		case actionsType.DELETE:
			const updated = state.cart.filter((item) => item !== action.payload);

			return {
				...state,
				cart: updated,
			};

		case actionsType.DECREMENT:
			const itemIndex2 = state.cart.findIndex( ( c ) => c.id === action.payload.id );

			if ( state.cart[ itemIndex2 ].quantity > 0 )
			{
				state.cart[ itemIndex2 ].quantity -= 1;
				return {
					...state,
					cart: [ ...state.cart ],
				};
			} else if ( state.cart[ itemIndex2 ].quantity <=0 )
			{
				const updated = state.cart.filter( ( item ) => item.id !== action.payload.id );

				return {
					...state,
					cart: updated,
				};
			}
			break;
		default:
			return state;
	}
}

export default reducer;

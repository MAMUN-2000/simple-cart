import React from "react";
import { useSelector } from 'react-redux';
import CartItem from "./CartItem";



function CartList ()
{

	const {cart} = useSelector( ( state ) => state.addProduct );
	// console.log(cart);


   return (
			<div className='space-y-6'>
				{cart.map((item, idx) => (
					<CartItem  key={idx} cartItem={item} />
				))}
			</div>
		);
}

export default CartList;

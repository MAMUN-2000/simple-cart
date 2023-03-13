/** @format */

import { useDispatch } from "react-redux";

import * as actionCreator from '../redux/addProduct/actionCreator';
function ProductItem({product}) {
   const { category, imgUrl, name, price, quantity } = product;

   const dispatch = useDispatch();

   const handleAddToCart = (e) => {
			dispatch(actionCreator.addToCart(e));
		};

	return (
		<div className='lws-productCard'>
			<img className='lws-productImage' src={imgUrl} alt='product' />
			<div className='p-4 space-y-2'>
				<h4 className='lws-productName'>{name}</h4>
				<p className='lws-productCategory'>{category}</p>
				<div className='flex items-center justify-between pb-2'>
					<p className='productPrice'>
						BDT <span className='lws-price'>{price}</span>
					</p>
					<p className='productQuantity'>
						QTY <span className='lws-quantity'>{quantity}</span>
					</p>
				</div>
				<button className='lws-btnAddToCart' onClick={()=>handleAddToCart(product)}>
					Add To Cart
				</button>
			</div>
		</div>
	);
}

export default ProductItem;

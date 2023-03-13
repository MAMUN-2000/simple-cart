/** @format */

import ProductItem from "./ProductItem";

import { useSelector } from "react-redux";

function ProductList() {
	const  {productList}  = useSelector((state) => state.addProduct);

	return (
		<div className='productContainer' id='lws-productContainer'>
			{productList.map((product, index) => (
				<ProductItem key={index} product={product} />
			))}
			{/* <ProductItem /> */ }
		</div>
	);
}

export default ProductList;
// rsj178
/**
 * @format
 * @htmlFormat
 */

import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../component/ProductList";
import * as actionCreator from "../redux/addProduct/actionCreator";

function Home() {
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productImg, setProductImg] = useState("");
	const [productQuantity, setProductQuantity] = useState("");
	const [productCategory, setProductCategory] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newProduct = {
			productName,
			productImg,
			productQuantity,
			productCategory,
			productPrice,
		};

		dispatch(actionCreator.addProduct(newProduct));

		setProductCategory("");
		setProductImg("");
		setProductName("");
		setProductPrice("");
		setProductQuantity("");
	};

	return (
		<main className='py-16'>
			<div className='productWrapper'>
				<ProductList />
				<div>
					{/* <!-- Product Input htmlForm --> */}
					<div className='htmlFormContainer'>
						<h4 className='htmlFormTitle'>Add New Product</h4>
						<form
							className='space-y-4 text-[#534F4F]'
							id='lws-addProducthtmlForm'
							onSubmit={handleSubmit}>
							{/* <!-- product name --> */}
							<div className='space-y-2'>
								<label htmlFor='lws-inputName'>Product Name</label>
								<input
									className='addProductInput'
									id='lws-inputName'
									type='text'
									required
									value={productName}
									onChange={(e) => setProductName(e.target.value)}
								/>
							</div>
							{/* <!-- product category --> */}
							<div className='space-y-2'>
								<label htmlFor='lws-inputCategory'>Category</label>
								<input
									className='addProductInput'
									id='lws-inputCategory'
									type='text'
									required
									value={productCategory}
									onChange={(e) => setProductCategory(e.target.value)}
								/>
							</div>
							{/* <!-- product image url --> */}
							<div className='space-y-2'>
								<label htmlFor='lws-inputImage'>Image Url</label>
								<input
									className='addProductInput'
									id='lws-inputImage'
									type='text'
									required
									value={productImg}
									onChange={(e) => setProductImg(e.target.value)}
								/>
							</div>
							{/* <!-- price & quantity container --> */}
							<div className='grid grid-cols-2 gap-8 pb-4'>
								{/* <!-- price --> */}
								<div className='space-y-2'>
									<label htmlFor='ws-inputPrice'>Price</label>
									<input
										className='addProductInput'
										type='number'
										id='lws-inputPrice'
										required
										value={productPrice}
										onChange={(e) => setProductPrice(e.target.value)}
									/>
								</div>
								{/* <!-- quantity --> */}
								<div className='space-y-2'>
									<label htmlFor='lws-inputQuantity'>Quantity</label>
									<input
										className='addProductInput'
										type='number'
										id='lws-inputQuantity'
										required
										value={productQuantity}
										onChange={(e) => setProductQuantity(e.target.value)}
									/>
								</div>
							</div>
							<button type='submit' id='lws-inputSubmit' className='submit'>
								Add Product
							</button>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;

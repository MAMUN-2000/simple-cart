/** @format */

import { useSelector } from "react-redux";
import CartList from "../component/CartList";

function Cart() {
	const { cart } = useSelector((s) => s.addProduct);

	const totalAmount = () => {
		const subTotal = cart.map( i => i.price * i.quantity )
		const totals = subTotal.reduce( ( p, c ) =>
		{
			 return p+c
		}, 0 )

		const vat = totals * .05
		const total = totals+vat

return {totals, total,vat}
	};



	return (
		<main className='py-16'>
			<div className='container 2xl:px-8 px-2 mx-auto'>
				<h2 className='mb-8 text-xl font-bold'>Shopping Cart</h2>
				<div className='cartListContainer'>
					<CartList />

					<div>
						<div className='billDetailsCard'>
							<h4 className='mt-2 mb-8 text-xl font-bold text-center'>Bill Details</h4>
							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<p>Sub Total</p>
									<p>
										BDT <span className='lws-subtotal'>{totalAmount().totals}</span>
									</p>
								</div>
								<div className='flex items-center justify-between'>
									<p>Discount</p>
									<p>
										BDT <span className='lws-discount'>0</span>
									</p>
								</div>
								<div className='flex items-center justify-between'>
									<p>VAT <span> 5% </span></p>
									<p>
										BDT <span className='vat'>{totalAmount().vat}</span>
									</p>
								</div>
								<div className='flex items-center justify-between pb-4'>
									<p className='font-bold'>TOTAL</p>
									<p className='font-bold'>
										BDT <span className='lws-total'>{totalAmount().total}</span>
									</p>
								</div>
								<button className='placeOrderbtn'>place order</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Cart;

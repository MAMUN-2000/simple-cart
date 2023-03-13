import Navbar from "./component/Navbar";
import Cart from "./page/Cart";
import Home from "./page/Home";

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
		<div className='App'>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>

		</div>
	);
}

export default App;

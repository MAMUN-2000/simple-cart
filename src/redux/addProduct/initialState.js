const initialProduct = [
	{
		id: 1,
		name: "Appex footware",
		category: "footware",
		price: '3500',
		quantity: 5,
		imgUrl: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
	},
	{
		id: 2,
		name: "Spring and summershoes",
		category: "Mens shoes",
		price: 3500,
		quantity: 5,
		imgUrl: `https://i.dummyjson.com/data/products/59/thumbnail.jpg`,
	},
	{
		id: 3,
		name: "Appex footware",
		category: "footware",
		price: 3500,
		quantity: 5,
		imgUrl: `https://i.dummyjson.com/data/products/40/thumbnail.jpg`,
	},
];



const initialState = {

	productList: initialProduct,
	cart: [],


}


export default initialState;
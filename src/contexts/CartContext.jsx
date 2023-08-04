import React, {useState, useEffect, createContext,} from "react";

export const CartContext = createContext()


function CartProvider({children}) {
	const [cart, setCart] = useState([])

	const addToCart = function (product, id) {
		const newItem = {...product, amount: 1}
		// console.log(newItem)
		const cartItem = cart.find(item => {
			return item.id === id;
		})
		if (cartItem) {
			const newCart = [...cart].map(item => {
				if (item.id === id) {
					return {...item, amount: cartItem.amount + 1}
				} else {
					return item
				}
			})
			setCart(newCart)
		} else {
			setCart([...cart, newItem])
		}
	}

	console.log(cart)

	return (
		<CartContext.Provider value={{cart, addToCart}}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
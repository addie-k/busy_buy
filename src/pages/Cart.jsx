import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

const Cart = () => {
    let { cart, setCart, setToastMessage, setOrders } = useOutletContext();
    cart.map(cartItem => cartItem.quantity = 1)// map qty prop to each cartItem
    const [cartItems, setCartItems] = useState(cart);

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const updateQuantity = (id, increment) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + (increment ? 1 : -1)) } : item
            )
        );
    };

    const placeOrderBtn = () => {
        setToastMessage("Order Placed.")
        setOrders(prevState => [...prevState, { cart: cartItems, total: calculateTotal(),date:new Date() }]
        )
        setCart([])
        setCartItems([])
    }

    return (
        <div className="max-w-4xl mx-auto mt-[5rem] p-4 sm:p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
                Shopping Cart
            </h1>
            {cartItems.length > 0 ? (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-100 p-4 rounded-md shadow"
                        >
                            <div className="w-full sm:w-auto">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600">
                                    Price: ₹{item.price.toFixed(2)} | Quantity: {item.quantity}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    className="px-2 py-1 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
                                    onClick={() => updateQuantity(item.id, false)}
                                >-</button>
                                <span className="text-lg font-bold text-gray-700">
                                    {item.quantity}
                                </span>
                                <button
                                    className="px-2 py-1 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
                                    onClick={() => updateQuantity(item.id, true)}
                                > +</button>
                            </div>
                            <p className="mt-2 sm:mt-0 text-lg font-bold text-gray-700 sm:text-right">
                                ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}
                    <div className="border-t pt-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-lg font-semibold">
                            <span className="text-gray-700">Total</span>
                            <span className="mt-2 sm:mt-0 text-gray-800">
                                ₹{calculateTotal().toFixed(2)}
                            </span>
                        </div>
                        <Link to="/orders">
                            <button onClick={placeOrderBtn} className="w-full mt-4 py-2 px-4 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-200">
                                Place Order.
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <p className="text-gray-600 text-center">Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;

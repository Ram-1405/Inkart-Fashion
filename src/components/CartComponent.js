import React from 'react';

export default function CartComponent({ cartItems, removeFromCart }) {
 
    const totalPrice = cartItems.reduce((total, item) => {

        const priceValue = parseInt(item.price.replace('₹', '').replace(',', ''), 10);
        return total + (isNaN(priceValue) ? 0 : priceValue);
    }, 0);
    
    const handleRemove = (index) => {
        if (window.confirm("Are you sure you want to remove this item from the cart?")) {
            removeFromCart(index);
        }
    };

    return (
        <div className="bg-gray-100 p-8 mt-10 h-screen">
            <h2 className="font-bold text-xl mb-6">Cart</h2>
            <div className="space-y-4">
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-4 border rounded-lg bg-white">
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-gray-500">Price: ₹{item.price}</p>
                            </div>
                            <div className="flex gap-2">
                                <button 
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                    onClick={() => {
                                        alert(`Proceeding to buy ${item.name}.`);
                                    }}
                                >
                                    Buy Now
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    onClick={() => handleRemove(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="mt-6 font-bold text-lg">
                    Total Price: ₹{totalPrice}
                </div>
            )}
        </div>
    );
}

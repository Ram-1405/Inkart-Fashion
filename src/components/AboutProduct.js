import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa';

export default function AboutProduct({ addToCart }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1); 
    const { product, category } = location.state || {}; 

    // Check if product exists
    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <p className="text-lg">Product not found. Please go back to the gallery.</p>
                <button 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => navigate('/products')}
                >
                    Back to Gallery
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        const productWithQuantity = { ...product, quantity: parseInt(quantity) }; 
        addToCart(productWithQuantity); 
    };

    return (
        <div className="w-4/5 mx-auto mt-8">
            <button 
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => navigate('/products')}
            >
                Back to Gallery
            </button>

            <div className="flex">
                <div className="w-1/2">
                    {/* Change this line to use imageUrl instead of images[0] */}
                    <img 
                        src={product.imageUrl} // Use imageUrl directly
                        alt={product.name} 
                        className="w-full h-[75%] object-contain rounded-md"
                    />
                </div>

                <div className="w-1/2 pl-8">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description || "No description available."}</p>

                    <div className="flex items-center mb-4">
                        <span className="text-xl font-bold">Price: ₹{product.price}</span>
                        <span className="ml-4 text-yellow-500">★★★★★</span>
                    </div>

                    <div className="flex items-center mb-4">
                        <span className="text-green-600 flex items-center">
                            <FaTruck className="mr-2 h-6 w-6 text-green-500" /> {/* Delivery Icon */}
                            Free Delivery
                        </span>
                    </div>

                    <div className="flex items-center mb-4">
                        <div className="mr-4">
                            <label className="block text-gray-700 mb-2">Select Quantity:</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-16 p-2 border rounded"
                            />
                        </div>
                        <button 
                            className="bg-red-500 text-white px-6 py-2 rounded"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Other products from {category?.category || 'this category'}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {category?.products?.map((suggestion, index) => (
                        <div key={index} className="relative border rounded-lg p-4 shadow-md bg-white">
                            <img src={suggestion.imageUrl} alt={suggestion.name} className="w-full h-48 object-cover rounded-md" />
                            <h2 className="mt-2 font-semibold text-lg">{suggestion.name}</h2>
                            <p className="text-gray-500">Price: ₹{suggestion.price}</p>
                            <button
                                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                                onClick={() => navigate('/about-product', { state: { product: suggestion, category } })}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function Products_Gallery({ searchTerm, addToCart }) {
    const [categories, setCategories] = useState([]); // To store Firestore data
    const [selectedCategory, setSelectedCategory] = useState(null); // Current category
    const [visibleProducts, setVisibleProducts] = useState(4); // Number of products to display
    const [loading, setLoading] = useState(true); // Loading state

    const navigate = useNavigate();

    // Fetch product categories from Firestore
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'products'));
                const firestoreData = querySnapshot.docs.map(doc => doc.data());

                setCategories(firestoreData);
                setSelectedCategory(firestoreData[0] || null); // Default to the first category
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchCategories();
    }, []);

    // Handle category selection
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setVisibleProducts(4); // Reset product count when switching categories
    };

    // Handle navigation to the product details page
    const handleProductClick = (product) => {
        navigate('/about-product', { state: { product, category: selectedCategory } });
    };

    // Filter products based on search term
    const filteredProducts = selectedCategory?.products?.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    // Load more products for the selected category
    const loadMoreProducts = () => {
        setVisibleProducts(prev => prev + 4);
    };

    // Display loading screen
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex w-full gap-8 flex-grow items-start justify-center">

                {/* Sidebar: Category List */}
                <div className="w-1/4 h-full p-8">
                    <h1 className="font-bold text-2xl mb-10">Product Categories</h1>
                    <div className="flex flex-col gap-5">
                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                className={`p-3 text-gray-700 hover:text-white hover:bg-red-700 rounded-lg text-left 
                                    ${selectedCategory?.category === category.category ? 'bg-red-700 text-white' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content: Product List */}
                <div className="w-3/4 h-full p-8 bg-gray-50">
                    <h1 className="font-bold text-2xl mb-10">{selectedCategory?.category || "No Category Selected"}</h1>

                    {/* Check if there are filtered products */}
                    {filteredProducts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {filteredProducts.slice(0, visibleProducts).map((product, index) => (
                                    <div
                                        key={index}
                                        className="relative border rounded-lg p-4 shadow-md bg-white cursor-pointer"
                                        onClick={() => handleProductClick(product)}
                                    >
                                        {/* Correctly reference the image URL */}
                                        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                                        <h2 className="mt-2 font-semibold text-lg">{product.name}</h2>
                                        <p className="text-gray-500">Price: ₹{product.price}</p>
                                        <button
                                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(product);
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {visibleProducts < filteredProducts.length && (
                                <div className="flex justify-center mt-8">
                                    <button
                                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                                        onClick={loadMoreProducts}
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center mt-4">No products available in this category.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

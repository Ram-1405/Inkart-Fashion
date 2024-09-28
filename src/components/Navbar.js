import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser,FaPlus } from 'react-icons/fa';

export default function Navbar({ cartItems, setSearchTerm }) {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e) => {
        e.preventDefault(); 
        setSearchTerm(searchInput);
        navigate('/products');
        setSearchInput(''); 
    };

    return (
        <nav className="bg-light shadow">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <a 
                    className="text-xl font-bold text-gray-800 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    Inkart Fashion
                </a>
                <ul className="hidden md:flex md:items-center md:space-x-6 ml-8">
                    <li>
                        <a 
                            className="text-gray-700 hover:text-blue-600 cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            className="text-gray-700 hover:text-blue-600 cursor-pointer"
                            onClick={() => navigate("/products")} 
                        >
                            Men's
                        </a>
                    </li>
                    <li>
                        <a 
                            className="text-gray-700 hover:text-blue-600 cursor-pointer"
                            onClick={() => navigate("/products")} 
                        >
                            Women's
                        </a>
                    </li>
                    <li>
                        <a 
                            className="text-gray-700 hover:text-blue-600 cursor-pointer"
                            onClick={() => navigate("/products")} 
                        >
                            Kids
                        </a>
                    </li>
                    <li>
                        <a 
                            className="text-gray-700 hover:text-blue-600 cursor-pointer"
                            onClick={() => navigate("/products")}
                        >
                            Accessories
                        </a>
                    </li>
                </ul>
                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search products..."
                        className="border rounded-l-md p-2"
                        aria-label="Search products"
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white rounded-r-md p-2"
                        aria-label="Search"
                    >
                        <FaSearch size={20} />
                    </button>
                </form>
                <div className="flex items-center space-x-6">
                    <FaShoppingCart size={20} color="black" onClick={() => navigate('/cart')} />
                    {cartItems.length > 0 && (
                        <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                            {cartItems.length}
                        </span>
                    )}
                    <FaPlus size={20} color='black' onClick={()=>navigate('/additems')}/>
                     <FaUser size={20} color="black" onClick={() => navigate('/login')} />
                </div>
            </div>
        </nav>
    );
}

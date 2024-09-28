import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home_page from './components/Home_page'; 
import Products_Gallery from './components/Products_Gallery'; 
import CartComponent from './components/CartComponent';
import AboutProduct from './components/AboutProduct';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import AddItems from './components/AddItems';
function App() {
    const [cartItems, setCartItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        alert(`${product.name} added to cart!`);
    };

    const removeFromCart = (index) => {
        const updatedCart = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCart);
    };

    return (
      <>
        <Router>
            <div>
                <Navbar cartItems={cartItems} setSearchTerm={setSearchTerm} />
                <Routes>
                    <Route path="/" element={<Home_page />} /> 
                    <Route path="/products" 
                        element={
                            <Products_Gallery 
                                searchTerm={searchTerm} 
                                addToCart={addToCart} 
                            />
                        } 
                    />
                    <Route path="/about-product" element={<AboutProduct addToCart={addToCart} />} />
                    <Route 
                        path="/cart" 
                        element={
                            <CartComponent 
                                cartItems={cartItems} 
                                removeFromCart={removeFromCart} 
                            />
                        } 
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/additems' element={<AddItems/>}/>
                </Routes>
            </div>
        </Router>
        <Footer/>
        </>
    );
}

export default App;
// import React from 'react';
// import Testing from './Testing'; // Adjust the path as necessary
// import Home_page from './components/Home_page';

// function App() {
//     return (
//         <div className="App">
//             {/* Other components */}
//             <Testing/>
//         </div>
//     );
// }

// export default App;

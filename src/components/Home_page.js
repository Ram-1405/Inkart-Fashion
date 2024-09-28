import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules'; 
import { useNavigate } from 'react-router-dom'; 
import Men from '../images/categories/men.jpeg';
import Women from '../images/categories/women.jpeg';
import Kids from '../images/categories/kids.jpeg';
import shirt from '../images/men/tshirts/shirts.jpeg';
import shirt2 from '../images/men/tshirts/shirts2.jpeg';
import pant1 from '../images/men/tshirts/pants1.jpeg';
import pant2 from '../images/men/tshirts/pants2.jpeg';
import krutas from '../images/women/krutas.jpeg';
import krutas1 from '../images/women/krutas2.jpeg';
import saree from '../images/women/saree.jpeg';
import jeans from '../images/women/jeans.jpeg';
import sampleImage from '../images/Home/salesoff.jpg';
import sampleImage2 from '../images/Home/sales2.jpeg';
export default function Home_page() {
    const navigate = useNavigate(); 

    const categories = [
        { img: Men, label: 'Men' },
        { img: Women, label: 'Women' },
        { img: Kids, label: 'Kids' }
    ];

    const mens = [
        { img: shirt, label: 'Shirt', price: '₹1500' },
        { img: shirt2, label: 'Shirts', price: '₹3000' },
        { img: pant1, label: 'Pants', price: '₹1600' },
        { img: pant2, label: 'Pant', price: '₹3000' }
    ];
    const womens = [
        { img: krutas, label: 'Kruta', price: '₹2000' },
        { img: krutas1, label: 'Krutas', price: '₹1800' },
        { img: saree, label: 'Saree', price: '₹1000' },
        { img: jeans, label: 'Jeans', price: '₹800' }
    ];

    const handleCategoryClick = (category) => {
        navigate('/', { state: { category } }); 
    };
    const images = [sampleImage, sampleImage2];

    return (
        <>
         <Swiper className='w-full h-[500px] items-center justify-center'
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                modules={[Autoplay]} 
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-evenly h-60 space-x-4 p-4">
                {categories.map((category, index) => (
                    <div key={index} className="relative w-3/12 h-full flex items-center justify-between">
                        <img 
                            src={category.img} 
                            className="w-full h-full object-cover" 
                            alt={category.label} 
                            onClick={() => handleCategoryClick(category.label)} 
                        />
                        <button className="absolute bg-white bg-opacity-80 text-black text-lg font-bold py-2 px-4 rounded transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            {category.label}
                        </button>
                    </div>
                ))}
            </div>
            <h1 className="text-black bg-gray-200 text-center font-bold text-2xl py-4">
                New Arrivals
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-between p-6 w-full">
                {mens.map((item, index) => (
                    <div key={index} className="relative bg-white shadow-lg rounded-lg  transform hover:scale-105 transition-transform duration-300">
                        <img src={item.img} className="w-full h-48 object-contain" alt={item.label} />
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 text-center">{item.label}</h2>
                            <p className="text-lg font-semibold text-center text-red-500 mt-2">{item.price}</p>

                            <div className="flex justify-center mt-4">
                                <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-around p-6 w-full">
                {womens.map((item, index) => (
                    <div key={index} className="relative bg-white shadow-lg rounded-lg  transform hover:scale-105 transition-transform duration-300">
                        <img src={item.img} className="w-full h-48 object-contain" alt={item.label} />
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 text-center">{item.label}</h2>
                            <p className="text-lg font-semibold text-center text-red-500 mt-2">{item.price}</p>

                            <div className="flex justify-center mt-4">
                                <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

import shirt from '../images/men/shirts.jpeg';
import shirt2 from '../images/men/shirts2.jpeg';
import pant1 from '../images/men/pants1.jpeg';
import pant2 from '../images/men/pants2.jpeg';
import pants3 from '../images/men/pants3.jpeg';
import tshirt2 from '../images/men/tshirt2.jpeg';
import krutas from '../images/women/krutas.jpeg';
import krutas1 from '../images/women/krutas2.jpeg';
import saree from '../images/women/saree.jpeg';
import jeans from '../images/women/jeans.jpeg';
import western from '../images/women/western.jpeg';
import kids1 from '../images/kids/kid1.jpeg';
import kids2 from '../images/kids/kid2.jpeg';
import kids3 from '../images/kids/kid3.jpeg';
import kids4 from '../images/kids/kid4.jpeg';
import kids5 from '../images/kids/kid5.jpeg';
import kids6 from '../images/kids/kid6.jpeg';
import shoe1 from '../images/access/shoes1.jpeg';
import shoe2 from '../images/access/shoe2.jpeg';
import handbags from '../images/access/handbags.jpeg';
import handbags2 from '../images/access/handbags2.jpeg';
import watch1 from '../images/access/watch1.jpeg';
import watch2 from '../images/access/watch2.jpeg';
import watch3 from '../images/access/watch3.jpeg';

export const DummyData = [
    {
        category: 'Men',
        products: [
            {
                name: 'Casual Shirt',
                price: '1500',
                images: [shirt, shirt2],
                subCategory: 'Shirts'
            },
            {
                name: 'Formal Shirt',
                price: '2000',
                images: [shirt2],
                subCategory: 'Shirts'
            },
            {
                name: 'Jeans',
                price: '1800',
                images: [pant1, pant2],
                subCategory: 'Pants'
            },
            {
                name: 'Chinos',
                price: '2200',
                images: [pants3],
                subCategory: 'Pants'
            },
            {
                name: 'Graphic T-Shirt',
                price: '1000',
                images: [tshirt2],
                subCategory: 'T-Shirts'
            }
        ]
    },
    {
        category: 'Women',
        products: [
            {
                name: 'Printed Kurta',
                price: '2500',
                images: [krutas, krutas1],
                subCategory: 'Kurta'
            },
            {
                name: 'Traditional Saree',
                price: '3000',
                images: [saree],
                subCategory: 'Sarees'
            },
            {
                name: 'Western Dress',
                price: '3500',
                images: [western],
                subCategory: 'Western Wear'
            },
            {
                name: 'Denim Jeans',
                price: '2000',
                images: [jeans],
                subCategory: 'Jeans'
            }
        ]
    },
    {
        category: 'Kids',
        products: [
            {
                name: 'Printed Shirt',
                price: '800',
                images: [kids1, kids2],
                subCategory: 'Shirts'
            },
            {
                name: 'Kids Pants',
                price: '700',
                images: [kids3, kids4],
                subCategory: 'Pants'
            },
            {
                name: 'Denim Shorts',
                price: '600',
                images: [kids5, kids6],
                subCategory: 'Shorts'
            }
        ]
    },
    {
        category: 'Accessories',
        products: [
            {
                name: 'Casual Shoes',
                price: '1500',
                images: [shoe1, shoe2],
                subCategory: 'Shoes'
            },
            {
                name: 'Leather Handbag',
                price: '3000',
                images: [handbags, handbags2],
                subCategory: 'Handbags'
            },
            {
                name: 'Smart Watch',
                price: '10000',
                images: [watch1, watch2],
                subCategory: 'Watches'
            },
            {
                name: 'Classic Watch',
                price: '8000',
                images: [watch3],
                subCategory: 'Watches'
            }
        ]
    }
];

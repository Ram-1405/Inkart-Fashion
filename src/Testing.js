import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './components/firebaseConfig'; // Make sure the path is correct

const Testing = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Firestore document ID for testing
    const categoryDocId = 'DyYA7PyUCzJ8ojixNVS0'; // Adjust this for the men's category

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'info', categoryDocId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log('Fetched data:', docSnap.data()); // Log fetched data
                    setData(docSnap.data());
                } else {
                    setError('No such document!');
                }
            } catch (err) {
                console.error('Error fetching data: ', err);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Fetched Firestore Data</h1>
            {data && (
                <div>
                    <h2 className="text-xl font-bold">{data.category}</h2>
                    {Object.entries(data.subCategories).map(([key, value]) => (
                        <div key={key} className="mb-4">
                            <h3 className="font-semibold">{value.subCategory}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {value.products.map((product, index) => (
                                    <div key={index} className="border rounded-lg p-2">
                                        <h4 className="font-bold">{product.name}</h4>
                                        <p>{product.price}</p>
                                        <div className="flex flex-wrap">
                                            {product.images.map((imageUrl, imgIndex) => (
                                                <img 
                                                    key={imgIndex} 
                                                    src={imageUrl} 
                                                    alt={product.name} 
                                                    className="w-24 h-24 object-cover m-1" 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Testing;

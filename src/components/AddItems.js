import React, { useState } from 'react';
import { db, storage } from './firebaseConfig'; 
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function AddItems() {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!category || !subCategory || !productName || !productPrice || !productImage) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `products/${productImage.name}`);
      const uploadResult = await uploadBytes(imageRef, productImage);
      const imageUrl = await getDownloadURL(uploadResult.ref);

      // Check if a document with the specified category exists
      const categoryRef = collection(db, 'products');
      const querySnapshot = await getDocs(categoryRef);
      let existingDoc = null;

      querySnapshot.forEach((doc) => {
        if (doc.data().category === category) {
          existingDoc = doc; // Store the existing document if found
        }
      });

      // Create the product object
      const newProduct = {
        name: productName,
        price: productPrice,
        imageUrl: imageUrl,
        subCategory: subCategory,
      };

      if (existingDoc) {
        // If a document exists, update it
        const docRef = doc(db, 'products', existingDoc.id);
        await updateDoc(docRef, {
          products: [...existingDoc.data().products, newProduct],
        });
      } else {
        // If no document exists, create a new one
        const newProductDoc = {
          category: category,
          products: [newProduct],
        };
        await addDoc(categoryRef, newProductDoc);
      }

      alert("Product uploaded successfully!");
      // Clear form
      setCategory('');
      setSubCategory('');
      setProductName('');
      setProductPrice('');
      setProductImage(null);
    } catch (error) {
      console.error("Error uploading product: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2"
            placeholder="Enter product category"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Subcategory</label>
          <input
            type="text"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full border p-2"
            placeholder="Enter product subcategory"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border p-2"
            placeholder="Enter product name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Product Price</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full border p-2"
            placeholder="Enter product price"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Product Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border"
            accept="image/*"
            required
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleUpload}
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {loading ? 'Uploading...' : 'Upload Product'}
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Filtter({ setrating,rating,price,setprice }) {

  const { slug } = useParams();
  const [categories, setCategories] = useState([]);

  const getCategory = () => {
    const categoryUrl = 'https://dummyjson.com/products/categories';
    axios.get(categoryUrl)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);



  return (
    <div className='h-screen mt-8  sm:mt-0' >
      {/* Filter by Rating */}
      <div className="flex flex-col gap-2 p-4">
      <h1 className="text-xl font-bold text-blue-800 mb-3">⭐ Filter by Rating</h1>
        <button
          onClick={() => setrating(1)}
          className={`px-4 py-2 border-2 rounded-lg transition duration-300 ${
            rating == 1 ? 'bg-blue-600 text-white' : 'text-blue-500 border-blue-500 '
          }`}
        >
          1 ★ &amp; Up
        </button>
        <button
          onClick={() => setrating(2)}
          className={`px-4 py-2 border-2 rounded-lg transition duration-300 ${
            rating == 2 ? 'bg-blue-600 text-white' : 'text-blue-500 border-blue-500 '
          }`}
        >
          2 ★ &amp; Up
        </button>
        <button
          onClick={() => setrating(3)}
          className={`px-4 py-2 border-2 rounded-lg transition duration-300 ${
            rating == 3 ? 'bg-blue-600 text-white' : 'text-blue-500 border-blue-500 '
          }`}
        >
          3 ★ &amp; Up
        </button>
        <button
          onClick={() => setrating(4)}
          className={`px-4 py-2 border-2 rounded-lg transition duration-300 ${
            rating == 4 ? 'bg-blue-600 text-white' : 'text-blue-500 border-blue-500 '
          }`}
        >
          4 ★ &amp; Up
        </button>
      </div>


      {/* Filter by price start  */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-blue-800 mb-3">💰 Filter by Price</h1>
        <div className="flex items-center space-x-3">
          <input
            type="number"
            onChange={(e) => {
              const newValue = e.target.value;
              setprice(newValue > 1 ? { ...price, from: newValue } : { ...price, from: '1' });
            }}
            placeholder="From"
            className="w-full p-2  border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
          <span className="text-gray-700">to</span>
          <input
            type="number"
            onChange={(e) => {
              const newValue = e.target.value;
              setprice(newValue > 1 ? { ...price, to: newValue } : { ...price, to: '1000' });
            }}
            placeholder="To"
            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
        </div>
      </div>

      {/* Filter by Category */}
      <h1 className="text-xl font-bold text-blue-800 mb-3">📦 Filter by Category</h1>
      <div className="p-4  gap-2  flex flex-col">
        <Link to="/shop">
          <div className={`p-2 rounded cursor-pointer ${slug==undefined ? 'bg-blue-600 text-white' : 'border border-blue-500'}`}>
            All Categories
          </div>
        </Link>
        {categories.map((item, index) => (
          <Link key={index} to={`/shop/${item.slug}`}>
            <div className={`p-2 rounded cursor-pointer ${item.slug == slug ? 'bg-blue-600 text-white' : 'border border-blue-500'}`}>

              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
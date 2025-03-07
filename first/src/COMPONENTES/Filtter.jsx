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
    <div className='h-screen' >
      {/* Filter by Rating */}
      <div className="flex flex-col gap-2 p-4">
      <h1 className="text-lg font-bold mt-11">Filter by Rating</h1>
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
      <div className=" p-6 w-full max-w-sm mx-auto  my-4">
      <h1 className="text-xl font-semibold text-center text-gray-700 mb-4">Filter by Price</h1>
      <div className="flex justify-between items-center gap-4">
        <input
          onChange={(event) => setprice({ ...price, from: event.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="From"
        />
        <span className="text-gray-500">to</span>
        <input
          onChange={(event) => setprice({ ...price, to: event.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="To"
        />
      </div>
      
    </div>
     

      {/* Filter by Category */}
      <h1 className="text-lg font-bold mb-4">Filter by Category</h1>
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
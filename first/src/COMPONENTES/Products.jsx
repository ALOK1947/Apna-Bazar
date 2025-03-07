import React, { useContext, useEffect, useState } from 'react';
import {  useParams,Link, useLocation} from 'react-router-dom'; // Add this import
import axios from 'axios';
import { context } from "../COMPONENTES/Context/Maincontext";

export default function Products({ rating, price }) {
  const { slug } = useParams();
  const location =useLocation(); 
  const query=location.search;
  const [products, setProducts] = useState([]);
  const [limit, setlimit] = useState(20);
  const [loading, setLoading] = useState(false);

  const getProduct = () => {
    let apiUrl;
    if (query!='' ) {
      apiUrl = `https://dummyjson.com/products/search${query}`;
    } else if (slug!=undefined) {
      apiUrl = `https://dummyjson.com/products/category/${slug}?limit=${limit}`;
    } else {
      apiUrl = `https://dummyjson.com/products?limit=${limit}`;
    }

    axios.get(apiUrl)
      .then((success) => {
        const finalData = success.data.products.filter((productData) => {
          return productData.rating >= rating && productData.price >= price.from && productData.price <= price.to;
        });
        setProducts(finalData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false); }, 1000);
    getProduct();
  }, [limit, slug, rating, price, query]); 

  return (
    <div>
      <h2 className='fixed right-0 bg-blue-500 text-white text-[18px] w-[150px] rounded p-3 z-30 flex-wrap flex-col top-36 sm:static'>Total items: {products.length}</h2>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-10">
        {products.map((productData, productIndex) => (
          loading ? (
            <div key={productIndex} className="max-w-sm w-full p-4 border rounded-2xl shadow-lg animate-pulse bg-white">
              <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
              <div className="flex gap-2">
                <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
                <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <ProductCards key={productIndex} product={productData} />
          )
        ))}
      </div>
      <button
        onClick={() => setlimit(limit + 10)}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Load Items
      </button>
    </div>
  );
}
function ProductCards({ product }) {
    const { card, setcard, toast } = useContext(context);
    const { id, title, category, price, thumbnail } = product;
    const Details = { id, title, category, price, thumbnail, qty: 1 };
    const addcard = () => {
   const matchCardData = card.filter((cardData, cardIndex) => {
  return cardData.id == product.id;
});
    if (matchCardData.length == 0) {
      const final = [...card, Details];
      setcard(final);
      toast.success('Item added to cart!');
    } else {
      toast.error('Item already in cart!');
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden" style={{ width: '250px' }}>
      <Link to={`/productDetails/${product.id}`}>
        <img
          className="w-full h-48 object-cover"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">
            Category: <span className="text-blue-600">{product.category}</span>
          </p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 text-lg">★ ★ ★ ★ ☆</span>
            <span className="text-gray-600 ml-2">{product.rating}</span>
          </div>
          <p className="text-xl font-semibold text-green-600 mb-4">₹ {product.price}</p>
        </div>
      </Link>
      <button onClick={addcard} className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}

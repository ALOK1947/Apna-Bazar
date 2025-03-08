import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { context } from "../COMPONENTES/Context/Maincontext";

export default function ProductDetails() {
  const navigation=useNavigate();
  const { productId } = useParams();
  const [cproduct, setCproduct] = useState({});
   const { card, setcard, toast } = useContext(context);
      const { id, title, category, price, thumbnail } = cproduct;
      const Details = { id, title, category, price, thumbnail, qty: 1 };


  const getProductDetails = () => {
    axios.get(`https://dummyjson.com/products/${productId}`).then((success) => {

        setCproduct(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (productId) {
      getProductDetails();
    }
  }, []);
  




  const addcard = () => {
    const matchCardData = card.filter((cardData, cardIndex) => {
   return cardData.id == cproduct.id;
 });
     if (matchCardData.length == 0) {
       const final = [...card, Details];
       setcard(final);
       toast.success('Item added to cart!');
     } else {
       toast.error('Item already in cart!');
     }
   };

   const thanks=()=>{
    navigation('/thanks');
   }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex flex-col space-y-4">
    <img
      src={cproduct.thumbnail}
      className="w-full h-96 object-cover rounded-lg"
    />
    <div className="flex space-x-2">
      {cproduct.images?.map((image) => (
        <img
          key={image}
          src={image}
          className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
        />
      ))}
    </div>
  </div>

  <div>
    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      {cproduct.title}
    </h1>
    <p className="text-xl text-green-600 font-semibold mb-2">₹ {cproduct.price}</p>
    <div className="flex items-center mb-4">
      <span className="text-yellow-400 text-lg">★ ★ ★ ★ ☆</span>
      <span className="text-gray-600 ml-2">{cproduct.rating} / 5</span>
    </div>
    <p className="text-gray-700 mb-4">
      {cproduct.description}
    </p>
    <div className='flex justify-between  p-8'>
    <button onClick={addcard} className="bg-blue-600 w-2/4 text-white py-3 px-4 rounded-lg hover:bg-blue-700">
      Add to Cart
    </button>
    <button onClick={thanks} className="bg-orange-600 text-white py-3 px-4 rounded-lg w-/5 hover:bg-orange-700">
      Buy Now
    </button>
    </div>
  </div>
  
</div>

  );
}
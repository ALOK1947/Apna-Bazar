import { createContext, useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { context } from "../COMPONENTES/Context/Maincontext";
import { Link, useNavigate } from 'react-router-dom';

export default function Card() { // Yeh Capital Case Me Likho
  const { card, setcard, toast } = useContext(context);
  const [totalprice, setprice]=useState(0);
  const navigation=useNavigate();
  const getTotalPrice = ()=>{
    let total=0;
    card.forEach((cardData,cardIndex)=>{
    total+=cardData.price*cardData.qty;
     })
     setprice(total);
    }
      
    useEffect(
      ()=>{
        getTotalPrice();
      },[card]
    )

    const finish=()=>{
      navigation('/thanks');
    }
  return (
    <div>
            <div className="min-h-screen bg-gray-100 p-6 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Left Side - Cart Items */}
        <div className="md:col-span-2 space-y-4 sm:overflow-y-auto col-span-3  overflow-y-auto h-[calc(100vh-58px)]">
        {card.length == 0 ? <h1 className='text-center p-8 text-[40px]' >No Items in Cart</h1> :
        card.map((cardData, cardIndex) => (
          <Cardleft
          key={cardIndex}
          cardData={cardData}
          cardIndex={cardIndex}
          card={card}
          setcard={setcard}
          toast={toast}
          setprice={setprice} // Yeh line add karni hai
        />
        
        ))
      }
    
         
        </div>

        {/* Right Side - Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>₹{totalprice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
          <span>Total Tax:</span>
          <span>₹{(totalprice * 10 / 100).toFixed(2)}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>₹{(totalprice + totalprice * 10 / 100).toFixed(2)}</span>
          </div>
          <button onClick={finish} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}




function Cardleft({cardData, cardIndex, card, setcard, toast, setprice}) {

const qtychange = (event, index) => {
    const qantychange=event.target.value;
    if(qantychange>=0){
      const olddata=[...card];
      olddata[index].qty=qantychange;
      setcard(olddata);
    }
}

  const deletes = (indexNum) => {
    const oldcard = [...card];
    oldcard.splice(indexNum, 1);
    setcard(oldcard);
    toast.success('Item remove to cart!');
  };
  
 
  return (
    <div  className="bg-white p-4 rounded-2xl shadow-md flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <img
        src={cardData.thumbnail}
        alt="Product"
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div>
        <Link to={`/productDetails/${cardData.id}`}>
        <h3 className="text-xl font-semibold">{cardData.title}</h3>
        </Link>
        <p className="text-[px]  text-gray-500">{cardData.category}</p>
        <div className="mt-27">
          <label className="mr-2">{cardData.qty}</label>
          <input
            type="number"
            onChange={(event)=>qtychange(event,cardIndex)}
            value={cardData.qty}
            className="w-16 border border-gray-300 rounded-lg p-1 text-center"
          />
        </div>
      </div>
    </div>
    <button onClick={()=>deletes(cardIndex)}  className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600">Remove</button>
  </div>
  )
}

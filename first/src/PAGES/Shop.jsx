import React, { useState } from 'react';
import Filtter from '../COMPONENTES/Filtter';
import Products from '../COMPONENTES/Products';
import { useParams } from 'react-router-dom';


export default function Shop() {
  const { slug } = useParams();
  const [rating, setrating] = useState(1);
  const [price, setprice] = useState({ from: '1', to: '10000000' });
  const [amount, setamount] = useState(true)

  return (
    <div className='grid grid-cols-5 gap-4 p-4 '>
      {/* Filter Section (1 Column) */}
      <button
        onClick={() => setamount(!amount)}
        className='fixed w-[194px] top-[140px] left-0 z-[30] p-2 bg-blue-500 text-white rounded-r-lg shadow-lg sm:hidden'
      >
        {amount ? 'Hide Filter' : 'Show Filter'}
      </button>
      <div className={`${amount ? 'translate-x-0' : 'translate-x-[-100%]'} 
    overflow-y-auto  h-[calc(90vh-58px)] z-20 fixed w-1/2 sm:w-full sm:static  left-0 top-[140px] 
    flex-none sm:flex col-span-1 bg-gray-100 p-4 transition-transform duration-500`}>
        <Filtter rating={rating} setrating={setrating} price={price} setprice={setprice}/>
      </div>

      {/* Products Section (5 Columns) */}
      <div className='col-span-6 sm:col-span-4 bg-white  overflow-y-auto h-[calc(90vh-58px)]'>
      <Products slug={slug} rating={rating} price={price}/>
      </div>
    </div>
  );
}
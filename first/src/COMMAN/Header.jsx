import React, { useContext, useEffect, useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { context } from "../COMPONENTES/Context/Maincontext";
import { BiSolidUserPin } from "react-icons/bi";
import Mydetails from '../PAGES/Mydetails';
import { TiThMenu } from "react-icons/ti";

export default function Header() {
   const { card, setcard,query,setQuery,user,setUser } = useContext(context);
   const location=useLocation();
   const navigate=useNavigate();
   const [translate, setTranslate] = useState(false);
   const handleSearch = (e) => {
       e.preventDefault();
       navigate(`/shop?q=${query}`);
    };

   useEffect(
    ()=>{
       if(!user && location.pathname !='/register'){
        navigate('/login');
   }
    },[user,location.pathname]
   );

return (
    <header className="z-40 sticky top-0 left-0 w-full flex justify-between items-center p-6 bg-blue-700 text-white shadow-md">
      {/* header phone responsive start  */}
      <div onClick={()=>setTranslate(0)} className={`absolute ${translate==false ?'translate-x-[-100%]':'translate-x-0 '} z-50  w-screen bg-[rgba(2,3,4,.6)] transition duration-300 ease-in-out top-0 left-0 flex flex-col text-lg sm:hidden h-screen  shadow-2xl rounded-r-xl overflow-hidden`}></div>
      <TiThMenu onClick={() => setTranslate(true)} className='text-[30px] sm:hidden' />
        <div onClick={()=>setTranslate(0)} className={`absolute ${translate==false ?'translate-x-[-100%]':'translate-x-0 '} z-50  w-screen  transition duration-300 ease-in-out top-0 left-0 flex flex-col text-lg sm:hidden h-screen  shadow-2xl rounded-r-xl overflow-hidden`}>
      <nav className='bg-gray-800 shadow-2xl overflow-hidden rounded-r-xl w-2/3 h-full' >
  <div className='w-full bg-gradient-to-r  from-blue-600 to-blue-400 text-center py-10 text-4xl font-bold text-white tracking-widest uppercase shadow-md'>
    Apna Bazar
  </div>
  <ul className="flex flex-col space-y-8 w-full text-center py-10">
    {[ 
      { name: 'Home', link: '/' }, 
      { name: 'Shop', link: '/shop' }, 
      { name: 'About', link: '/about' }, 
      { name: 'Contact', link: '/contact' } ,
    ].map((item, index) => (
      <li onClick={()=>setTranslate(0)} key={index} className="hover:bg-blue-600 py-3 rounded-lg transition duration-300 ease-in-out">
        <Link to={item.link} className="text-white text-2xl tracking-wide hover:text-yellow-300">
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</nav>
</div>



      <Link to=''> <div className="text-2xl sm:text-4xl font-bold">Apna Bazar</div></Link>
      <form onSubmit={handleSearch} className="flex w-full left-0 absolute top-[98px]  sm:static sm:w-1/2">
            <input
              type='search'
              name="query"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
              className="  border border-gray-300 rounded-l-md p-2 w-full outline-none appearance-none text-black "
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 rounded-r-md hover:bg-blue-600 transition-all"
            >
              🔍
            </button>
          </form>
      <nav className="space-x-6 text-lg hidden sm:flex">
          <ul className="flex space-x-6">
            <li>
              <Link to="/">
                <span className="hover:text-gray-300">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <span className="hover:text-gray-300">Shop</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="hover:text-gray-300">About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="hover:text-gray-300">Contact</span>
              </Link>
            </li>
          </ul>
      </nav>
      <div className='flex  items-center gap-2'>
      <Link to="/card">
        <div className="relative inline-block text-3xl">
        🛒
        <span className="absolute top-0 right-0 bg-red-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">{card.length}</span>
        </div>
      </Link>

       <button
          onClick={() => setcard([])}
          className="bg-red-60 hidden sm:flex0 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Clear
        </button>
        {
          !user //!user means user !='' and undefined and null 
          ?
          <Link to={'/login'}>
          <button
            className="bg-green-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Log in
          </button>
          </Link>
          :
          <div className="relative group">
          <button
            className="text-[35px] hover:bg-white-700 text-white py-2 px-4 rounded"
          >
            <BiSolidUserPin />
          </button>
          <Mydetails/>
          </div>
        }
        </div>
        
       
    </header>
  );
}
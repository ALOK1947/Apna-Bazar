import React, { useContext } from 'react'
import { context } from "../COMPONENTES/Context/Maincontext";
import { useNavigate } from 'react-router-dom';

export default function Mydetails() {
  const{user,setUser}=useContext(context);
  const navigate=useNavigate();
    const logOut=()=>{
        setUser('');
        navigate('/login');
      }
  
  return (
    <div className="absolute top-[55px] left-[-197px] hidden group-hover:block transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto w-72 h-96 bg-white shadow-lg rounded-lg p-4 text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mx-auto mb-4 flex justify-center items-center text-[100px]">
      🧑
      </div>
      <h2 className="text-2xl font-semibold text-gray-800">Welcome</h2>
      <button onClick={logOut} className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
        Logout
      </button>
    </div>
  )
}
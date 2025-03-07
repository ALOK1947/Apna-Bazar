import { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const context = createContext();
export default function Maincontext({ children }) {
          const oldCardData=JSON.parse(localStorage.getItem('CARD')) ?? [];
          const loginUserData=localStorage.getItem('token') ?? '';
          const [card, setcard] = useState(oldCardData); 
          const [query, setQuery] =useState('');
          const[user,setUser]=useState(loginUserData);

  useEffect(
    ()=>{
   localStorage.setItem('CARD',JSON.stringify(card));  
    },[card]
  )

  useEffect(
    ()=>{
   localStorage.setItem('token',user);  
    },[user]
  )

  
  return (
    <context.Provider  value={{ card, setcard,toast,query,setQuery,user,setUser }}>
      {children}
      <ToastContainer autoClose={1000}/>
    </context.Provider>
  );
}
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Googlefirebase';
import { toast } from 'react-toastify';

export default function Register() {
  const navigate=useNavigate();
const registerUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
   const password=e.target.password.value;
   const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    toast.success("User Register Successfully")
    navigate('/')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error("User Register Error")
    console.log(error)
  });
  
}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
      <form onSubmit={registerUser}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">Username</label>
          <input
            type="text"
            name='username'
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            name='email'
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">Password</label>
          <input
            type="password"
            name='password'
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition">
          Register
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account? <Link to={'/login'} className="text-blue-500">Login here</Link>
      </p>
    </div>
  </div>
  )
}

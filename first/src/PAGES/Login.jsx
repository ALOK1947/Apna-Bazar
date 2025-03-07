import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../Googlefirebase';
import { toast } from 'react-toastify';
import { context } from "../COMPONENTES/Context/Maincontext";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Login() {
  const navigate = useNavigate();
    const{user,setUser}=useContext(context);;

const loginUser = (e) => {
    e.preventDefault();
   const email=e.target.email.value;
   const password=e.target.password.value;

 
   const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    toast.success("User Login Successfully")
    console.log(user);
    setUser(user.accessToken);
    navigate('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error('Please register your account')
  });
}



const provider = new GoogleAuthProvider();
const loginGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(user.accessToken);
      navigate('/');
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
}

  return (
    <div><div className="bg-gray-100 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={loginUser}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            name='email'
            placeholder="Enter your email" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            name='password'
            placeholder="Enter your password" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Login
        </button>
      </form>
      <button onClick={loginGoogle} className="w-full my-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
          Login With Google
        </button>
      <div className="text-center mt-4">
        <p className="text-gray-700">
          Don't have an account?{' '}
       <Link to={'/register'} className="text-blue-500 hover:underline">Register</Link>   
        </p>
      </div>
    </div>
  </div></div>
  )
}

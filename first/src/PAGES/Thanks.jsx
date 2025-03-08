import React from 'react'
import { Link } from 'react-router-dom'

export default function Thanks() {
  return (
    <div className="sm:h-screen py-20 sm:py-0 bg-green-50 flex flex-col justify-center items-center ">
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-green-200 text-center">
    {/* Icon */}
    <div className="flex justify-center mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    {/* Congratulations Heading */}
    <h1 className="text-4xl font-bold mb-6 text-green-800">Congratulations!</h1>

    {/* Message */}
    <p className="text-lg text-green-600 mb-8">
      Your order has been successfully placed. Thank you for shopping with us!
    </p>

    {/* Button to Shop Page */}
  <Link to={'/shop'}  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
      Go to Shop
      </Link>
  </div>
</div>
  )
}

import React from 'react'

export default function About() {
  return (
     <div className="min-h-screen bg-amber-200 from-green-400 to-green-600 p-6 flex justify-center items-center">
      <div className="max-w-4xl w-full shadow-2xl rounded-3xl overflow-hidden bg-white">
        <div className="p-12 text-center">
          <h2 className="text-5xl font-extrabold text-green-700 mb-8 tracking-wider">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Apna Bazar, your one-stop destination for quality products and seamless shopping experiences.
            Our mission is to provide the best quality products at affordable prices, making your life easier and better.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With a wide range of products and a user-friendly platform, we ensure that every customer gets the best shopping experience.
            Trust, quality, and customer satisfaction are our top priorities.
          </p>
          <p className="text-lg text-gray-700">
            Thank you for choosing Apna Bazar. Let's build a better shopping world together.
          </p>
        </div>
      </div>
    </div>
  )
}

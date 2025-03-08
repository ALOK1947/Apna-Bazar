import React from 'react'

export default function Buy() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Order Details</h1>

      {/* Order Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <div className="space-y-2">
          <p><span className="font-medium">Order ID:</span> 123456</p>
          <p><span className="font-medium">Date:</span> 2023-10-25</p>
          <p><span className="font-medium">Total Amount:</span> ₹2500</p>
        </div>
      </div>

      {/* Product Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Product Details</h2>
        <div className="space-y-4">
          <div className="flex items-center border-b pb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 1"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="ml-4">
              <p className="font-medium">Product 1</p>
              <p>Quantity: 2</p>
              <p>Price: ₹1000</p>
            </div>
          </div>
        
        </div>
      </div>

      {/* Shipping Address */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
        <div className="space-y-2">
          <p>John Doe</p>
          <p>123 Main Street</p>
          <p>Mumbai, Maharashtra</p>
          <p>400001</p>
          <p>Phone: 9876543210</p>
        </div>
      </div>
    </div>
  </div>
  )
}

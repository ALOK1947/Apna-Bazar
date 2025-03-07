import React from 'react'

export default function Footer() {
  return (
    
        <footer>
          <div className="bg-gray-900 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
              <div>
                <h2 className="text-xl font-bold mb-3">Apna Bazar</h2>
                <p>Your one-stop online shop for all your needs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Shop</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
                <ul>
                  <li>FAQ</li>
                  <li>Return Policy</li>
                  <li>Shipping Info</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <span className="text-2xl hover:text-blue-500" role="img" aria-label="Facebook">📘</span>
                  <span className="text-2xl hover:text-pink-500" role="img" aria-label="Instagram">📸</span>
                  <span className="text-2xl hover:text-blue-400" role="img" aria-label="Twitter">🐦</span>
                  <span className="text-2xl hover:text-blue-700" role="img" aria-label="LinkedIn">🔗</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-10 border-t border-gray-700 pt-4">
              &copy; 2025 Apna Bazar. All Rights Reserved.
            </div>
          </div>
        </footer>
  )
}

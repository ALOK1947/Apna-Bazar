import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-6 flex justify-center items-center">
      <div className="max-w-4xl w-full shadow-2xl rounded-3xl overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-700 text-white p-12 flex flex-col justify-center items-center text-center">
            <h2 className="text-5xl font-extrabold mb-8 tracking-wider">Contact Us</h2>
            <p className="text-lg mb-6">info@apnabazar.com</p>
            <p className="text-lg mb-6">+91 12345 67890</p>
            <p className="text-lg">Jaipur, Rajasthan, India</p>
          </div>

          <div className="p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Get in Touch</h3>
            <form>
              <input type="text" placeholder="Your Name" className="mb-6 p-4 rounded-xl shadow-md border border-blue-300 w-full" required />
              <input type="email" placeholder="Your Email" className="mb-6 p-4 rounded-xl shadow-md border border-blue-300 w-full" required />
              <textarea placeholder="Your Message" className="mb-6 p-4 rounded-xl shadow-md border border-blue-300 w-full" required></textarea>
              <button className="w-full bg-blue-700 text-white p-4 rounded-xl shadow-lg hover:bg-blue-800 transition-all">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

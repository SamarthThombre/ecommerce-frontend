import React from 'react'
import bgContact from '../assets/contact-bg.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bg2 from '../assets/bg.jpg'


function Contact() {
  return (
    <div className="bg-[#F6EEE5]">

      <Header />
      
      {/* contact info and form */}
      <section>
      {/* Hero with background image and heading */}

      <section
        className="relative bg-cover bg-center text-white h-[60vh] flex items-center "
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        <div className="absolute inset-0 bg-black/50  z-0" />

        <div className="relative z-10 m-auto text-center">
          
          <p className="text-lg md:text-xl font-bold leading-relaxed mb-6">
            Contact Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Let’s Connect
          </h1>
        
        </div>
      </section>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-8 w-[80%] m-auto p-20 ">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-700">Get in Touch</h2>
          <p className="text-gray-700">
            We’d love to hear from you! Whether you’re curious about a product, need help,
            or just want to say hi — we’re all ears.
          </p>
          <div>
            <p className="font-semibold">📍 Address:</p>
            <p className="text-gray-600">123 Green Lane, Samshop City</p>
          </div>
          <div>
            <p className="font-semibold">📞 Phone:</p>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <p className="font-semibold">✉️ Email:</p>
            <p className="text-gray-600">hello@urbanjungle.co</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative bg-cover bg-center text-white py-20 h-fit"
        style={{ backgroundImage: `url(${bg2})` }} 
        >
                
        <div className="absolute inset-0 bg-black/50"></div>
          
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Plant?
          </h2>
          <p className="text-sm md:text-base mb-6">
            Browse our online store or visit us in person to experience the beauty of nature.
          </p>
          <a
            href="/shop"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
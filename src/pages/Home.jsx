import React from 'react'
import Header from '../components/Header'
import bg from '../assets/background.jpg'
import Product from '../components/Product.jsx'
import Testimoneal from '../components/testimoneal'
import Footer from '../components/Footer'
import bg2 from '../assets/bg.jpg'
import Test from '../components/test'

function Home() {
  return (
    
    <div className="bg-[#F6EEE5]">
      
      {/* testing backend */}
      <Test />
      
      <Header />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 "
        style={{ backgroundImage: `url(${bg})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
        <div className='relative' >
          <p className="text-xl md:text-2xl font-bold mb-4">
            Welcome to Urban Jungle Co.
          </p>
          <h1 className="text-4xl md:text-5xl w-[70%] m-auto item-center">
            Discover the Beauty of Nature at Your Fingertips
          </h1>
        </div>
      </section>
      
      {/* Features Section */}
     <section className="py-10 px-4 md:px-[10%] bg-[#DDD6CE]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
    
        <div className="flex flex-col items-center">
          <img src="src/assets/payment-svgrepo-com.svg" alt="payment logo" className="w-12 h-12 mb-4" />
          <h2 className="text-lg font-semibold mb-1">Secure Payment</h2>
          <p className="text-gray-600 text-sm">We accept all major credit cards and PayPal.</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="src\assets\delivered-box-verification-symbol-svgrepo-com.svg" alt="delivery logo" className="w-12 h-12 mb-4" />
          <h2 className="text-lg font-semibold mb-1">Fast Delivery</h2>
          <p className="text-gray-600 text-sm">Get your plants delivered to your doorstep within 3-5 business days.</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="src\assets\heart-svgrepo-com.svg" alt="support logo" className="w-12 h-12 mb-4" />
          <h2 className="text-lg font-semibold mb-1">24/7 Support</h2>
          <p className="text-gray-600 text-sm">Our team is here to help you with any questions or concerns.</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="src\assets\shipping-svgrepo-com.svg" alt="return logo" className="w-12 h-12 mb-4" />
          <h2 className="text-lg font-semibold mb-1">Easy Returns</h2>
          <p className="text-gray-600 text-sm">Not satisfied? Return your plants within 30 days for a full refund.</p>
        </div>

      </div>
    </section>

    {/* Trending Products Section */}
    <section className='p-5'>
      <div>
        <h1 className='text-3xl md:text-4xl font-bold  text-center mb-8'>
          Trending Products
        </h1>
      </div>
      <div>
        <Product/>
      </div>

    </section> 
    
    {/* About Section */}
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16 md:px-[10%] bg-[#DDD6CE]">
      <div className="md:w-1/2 w-full">
        <img
          src="src\assets\pexels-emanuel-rodriguez-230145-6079526.jpg"
          alt="Urban Jungle"
          className="rounded-2xl w-full h-auto object-cover shadow-lg"
        />
      </div>

  
      <div className="md:w-1/2 w-full flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Your Premier Destination for All Green.
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          At <span className="font-semibold text-green-700">Urban Jungle Co.</span>, we believe in the transformative power of plants. Whether you’re a seasoned gardener or just starting your green journey, our curated selection of plants will inspire and enrich your living space.
        </p>

    
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <div>
            <h3 className="text-3xl font-bold text-green-700">98%</h3>
            <p className="text-sm text-gray-600">Customer Satisfaction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-700">103K</h3>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>

    <Testimoneal/>

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

    <Footer/>

    </div>
  )
}

export default Home
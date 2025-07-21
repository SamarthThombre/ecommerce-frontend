import React from 'react'
import bg from '../assets/store.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bg2 from '../assets/bg.jpg'
import Product from '../components/Product.jsx'



function Shop() {
  return (
    <div>
      
      <Header />
      
      <section
        className="relative bg-cover bg-center text-white h-[60vh] flex items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10  text-center m-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SHOP
          </h1> 
        </div>
      </section>

      <Product/>

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

export default Shop
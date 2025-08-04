import React from 'react';
import coverImage from '../assets/aboutus.jpg'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg2 from '../assets/bg.jpg'


const About = () => {
  return (
    <>
    <div className="bg-[#F6EEE5]">
    <Header />

    {/* Hero Section */}
    <section
      className="relative bg-cover bg-center text-white h-[60vh] flex items-center justify-center px-6 md:px-20 py-20"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="absolute inset-0 bg-black/50  z-0" />

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About SamShop co.
        </h1>
        <p className="text-lg md:text-xl font-bold leading-relaxed mb-8">
          At SamShop Co., we’re more than just a plant store — we’re a lifestyle. Our mission is to reconnect people with nature, one plant at a time.
        </p>
        
      </div>
    </section>

    {/* About Section */}
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16 md:px-[10%] bg-[#DDD6CE]">
      <div className=" md:w-[30%] w-0 ">
        <img
          src="src\assets\pexels-robin-4068386.jpg"
          alt="Samshop"
          className="rounded-2xl w-full h-auto object-cover shadow-lg"
        />
      </div>

  
      <div className="md:w-[70%] w-full flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          We strive to provide our customers with the highest quality
        </h2>
        <p className="text-gray-600 text-base md:text-s">
          At <span className="font-semibold text-green-700">Sam Shop Co.</span>, was founded in 1960 by a group of plant enthusiasts who recognized the positive impact that plants can have on our lives. Whether it’s purifying the air, reducing stress, or simply adding a touch of beauty to your environment, plants are more than just decoration—they’re a lifestyle.
        </p>
        
        <hr />
    
        <div className="flex flex-col sm:flex-row gap-6 mt-4">

        <div className="max-w-md    space-y-4">
          <p className="text-s italic text-gray-700">
          “We love what we do & create partnerships with our clients to ensure their digital transformation is positioned for long-term success.”
          </p>

          <div className="flex items-center gap-4 mt-4">
          <img 
            src="src/assets/dp.jpg" 
            alt="profile picture" 
            className="w-12 h-12 object-cover rounded-full  border-gray-300 shadow" 
          />
    
          <div>
            <h2 className="text-md font-semibold">Samarth</h2>
            <p className="text-sm text-gray-500">CEO & Co-founder @ Company</p>
          </div>
          </div>
        </div>


        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className='p-10'>

      <h2 className="text-4xl font-bold text-center my-8 md:w-[50%] sm:w-[60%] lg:w-[40%] m-auto">Our Core Values that Drive Everything We Do</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 py-10">
        <div className="flex items-center gap-4 ">
          <img src="src/assets/heart-svgrepo-com.svg" alt="icon" className="h-10 w-10" />
          <div>
            <h2 className="text-lg font-semibold mb-1">Passionate About Work</h2>
            <p className="text-gray-700 text-xs">
              Passion for work is an enthusiasm and excitement for what you do.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src="src/assets/heart-svgrepo-com.svg" alt="icon" className="h-10 w-10" />
          <div>
            <h2 className="text-lg font-semibold mb-1">Team Collaboration</h2>
            <p className="text-gray-700 text-xs">
              We thrive when working together, combining skills for greater outcomes.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src="src/assets/heart-svgrepo-com.svg" alt="icon" className="h-10 w-10" />
          <div>
            <h2 className="text-lg font-semibold mb-1">Innovation Driven</h2>
            <p className="text-gray-700 text-xs">
              We constantly innovate to stay ahead and deliver cutting-edge solutions.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src="src/assets/heart-svgrepo-com.svg" alt="icon" className="h-10 w-10" />
          <div>
            <h2 className="text-lg font-semibold mb-1">Customer Focused</h2>
            <p className="text-gray-700 text-xs">
              Your satisfaction is our priority—we're here to serve and support.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src="src/assets/heart-svgrepo-com.svg" alt="icon" className="h-10 w-10" />
          <div>
            <h2 className="text-lg font-semibold mb-1">Sustainable Practices</h2>
            <p className="text-gray-700 text-xs">
              We're committed to sustainability in everything we create and deliver.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <img src="src/assets/heart-svgrepo-com.svg" alt="icon" className="h-10 w-10" />
          <div>
            <h2 className="text-lg font-semibold mb-1">Simplicity interface</h2>
            <p className="text-gray-700 text-xs">
              Simplicity is used loosely to refer to the need to minimize a process
            </p>
          </div>
        </div>
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


    <Footer/>
    </div>

    </>

  );
};

export default About;

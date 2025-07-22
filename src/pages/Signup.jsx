import React from 'react';
import Header from '../components/Header';
import bgContact from '../assets/contact-bg.jpg';

const SignUp = () => {
  return (
    <>
    <Header />

    <section
        className="relative bg-cover bg-center text-white h-[20vh] flex items-center "
        style={{ backgroundImage: `url(${bgContact})` }}
        >
        
        <div className="absolute inset-0 bg-black/50  z-0" />
    
        <div className="relative z-10 m-auto text-center mt-16">
            
            <h1 className="text-5xl md:text-6xl font-bold ">
                Sign Up
            </h1>
            
        </div>
    </section>

    <section className="h-[80vh] bg-[#F6EEE5]  flex items-center justify-center p-4">
        
        
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                    Sign Up
                </button>
            </form>
        
            <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <a href="/signin" className="text-green-600 hover:underline">
                Sign in
            </a>
            </p>
        </div>
    </section>
    </>
  );
};

export default SignUp;

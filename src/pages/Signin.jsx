import React from 'react';
import Header from '../components/Header';
import bgContact from '../assets/contact-bg.jpg';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Singin = () => {
  const { user, login  } = useAuth();
  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  useEffect(() => {
    if (user) {
      Navigate("/profile"); 
    }
  }, [user, Navigate]);
  
  
  const handleSignup = async (e) => {
  e.preventDefault();
  

  try {
      const res = await axios.post('http://localhost:5000/api/user/signin', {
        email,
        password
      });

      console.log('✅ Signup successful:');
      
      login(res.data.user);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      
      Navigate('/profile');

    } catch (err) {
      console.error('❌ Signup error:', err.response?.data?.message || err.message);
    }
  };

  return (
    <>
     <Header />

    <section
        className="relative bg-cover bg-center text-white h-[25vh] flex items-center "
        style={{ backgroundImage: `url(${bgContact})` }}
        >
        
        <div className="absolute inset-0 bg-black/50  z-0" />
    
        <div className="relative z-10 m-auto text-center mt-16">
            
            <h1 className="text-5xl md:text-6xl font-bold ">
                Sign Up
            </h1>
            
        </div>
    </section>

    <section className="h-[75vh] bg-[#F6EEE5] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleSignup} className="space-y-4">
        
          <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />

          <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          
          <button type="submit" className="w-full bg-black text-white py-2 rounded">
          Sign Up
          </button>
          
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <a href="/signup" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </section>
    
    </>
  );
};

export default Singin;

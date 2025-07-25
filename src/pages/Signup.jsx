import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import bgContact from '../assets/contact-bg.jpg';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setMsg('');

    try {
      const res = await axios.post('http://localhost:5000/api/user/signup', {
        name,
        email,
        password
      });

      console.log('✅ Signup successful:', res.data);
      setMsg('Signup successful!');
    } catch (err) {
      console.error('❌ Signup error:', err.response?.data?.message || err.message);
      setMsg(err.response?.data?.message || 'Signup failed');
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

    <section className="h-[75vh] bg-[#F6EEE5]  flex items-center justify-center p-4">
        
        
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
            
            <form onSubmit={handleSignup} className="space-y-4">
            <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
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
            {msg && <p className="text-center mt-2">{msg}</p>}
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

export default Signup;

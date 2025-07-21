import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser } from 'react-icons/fi';  // Icons from react-icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Dummy cart count
  const cartItemCount = 0;

  return (
    <header className="w-full text-white absolute top-0 z-50 bg-transparent">
  <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6 md:px-[10%]">

    {/* Logo */}
    <h1 className="text-3xl md:text-4xl font-bold">SamShop</h1>

    {/* Hamburger Icon (mobile) */}
    <button 
      className="md:hidden text-2xl focus:outline-none"
      onClick={toggleMenu}
    >
      {menuOpen ? '✖' : '☰'}
    </button>

    {/* Nav Links + Icons (Desktop) */}
    <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
      <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
      <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
      <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
      <Link to="/shop" className="hover:text-yellow-400 transition">Shop</Link>

      {/* Cart Icon with badge */}
      <Link to="/cart" className="relative hover:text-yellow-400 transition">
        <FiShoppingCart size={22} />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </Link>

      {/* Profile Icon */}
      <button className="hover:text-yellow-400 transition">
        <FiUser size={22} />
      </button>
    </nav>
  </div>

  {/* Mobile Nav */}
  {menuOpen && (
    <div className="md:hidden flex flex-col items-start px-6 gap-4 pb-4 bg-gray-800 text-base font-semibold">
      <Link to="/" onClick={toggleMenu}>Home</Link>
      <Link to="/about" onClick={toggleMenu}>About</Link>
      <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      <Link to="/shop" onClick={toggleMenu}>Shop</Link>
      <Link to="/cart" onClick={toggleMenu} className="flex items-center gap-2">
        <FiShoppingCart />
        My Cart ({cartItemCount})
      </Link>
      <button onClick={toggleMenu} className="flex items-center gap-2">
        <FiUser /> Profile
      </button>
    </div>
  )}
</header>

  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false); // mobile menu close on click
  };

  return (
    <>
      {/* Navbar */}
      <div
        className="fixed top-6 left-1/2 -translate-x-1/2 
                      w-[80%] md:w-[50%] 
                      bg-black/40 backdrop-blur-md 
                      rounded-full px-6 md:px-10 py-4 
                      flex items-center justify-center 
                      text-white font-medium shadow-lg z-50"
      >
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 absolute right-6"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 
                 w-[90%] bg-black/60 backdrop-blur-lg 
                 rounded-2xl p-6 text-white shadow-lg 
                 transition-all duration-300 z-40
                 ${
                   open
                     ? "opacity-100 scale-100 pointer-events-auto"
                     : "opacity-0 scale-95 pointer-events-none"
                 }`}
      >
        <div className="flex flex-col gap-6 text-center">
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
          <Link to="/projects" onClick={handleClick}>
            Projects
          </Link>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
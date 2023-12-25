import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-between items-center p-4 bg-gray-800 text-white ${scrolled ? 'fixed top-0 w-full z-10' : ''}`}>
      <div>
        <Link to="/">
          <img src="logo.png" alt="Logo" style={{ width: "200px", height: "50px", objectFit: "contain" }} />
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/ilac-tavsiye">İlaç Tavsiyesi Al</Link>
        <Link to="/ilac-ara">İlaç Sorgula</Link>
      </div>
    </nav>
  );
};

export default Navbar;
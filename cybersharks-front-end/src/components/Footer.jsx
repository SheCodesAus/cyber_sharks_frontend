import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-customWhite py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-cormorant font-bold">
            NameName
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex gap-6 text-sm">
          <Link to="/about" className="hover:text-accent3 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-accent3 transition-colors">
            Contact
          </Link>
          <Link to="/speakers" className="hover:text-accent3 transition-colors">
            Speakers
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

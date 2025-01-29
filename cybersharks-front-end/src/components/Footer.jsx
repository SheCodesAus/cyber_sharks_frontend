import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white text-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="col-span-3">
            <Link to="/" className="text-2xl font-serif group inline-block">
              <span className="group-hover:text-[#FF6602] transition-colors">
                Prism
              </span>
              <span className="text-[#FF6602]">.</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="col-span-6">
            <div className="flex space-x-8">
              <button
                onClick={() => {
                  scrollToSection("stats-section");
                  setTimeout(() => scrollToSection("mission-statement"), 300); // Ensure smooth transition
                }}
                className="relative w-fit group text-sm text-gray-600 hover:text-black"
              >
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6602] scale-x-0 group-hover:scale-x-100 transition-transform">
                  <svg
                    className="absolute -bottom-[2px] left-0 w-full"
                    viewBox="0 0 120 12"
                    fill="none"
                    preserveAspectRatio="none"
                    height="6"
                  >
                    <path
                      d="M3 8.5C20 2.5 70 2.5 117 8.5"
                      stroke="#FF6602"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <Link
                to="/create-portfolio"
                className="relative w-fit group text-sm text-gray-600 hover:text-black"
              >
                Create Portfolio
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6602] scale-x-0 group-hover:scale-x-100 transition-transform">
                  <svg
                    className="absolute -bottom-[2px] left-0 w-full"
                    viewBox="0 0 120 12"
                    fill="none"
                    preserveAspectRatio="none"
                    height="6"
                  >
                    <path
                      d="M3 8.5C20 2.5 70 2.5 117 8.5"
                      stroke="#FF6602"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <p>© 2025 Cyber-Sharks Inc.</p>
            <p>Designed on Turball Yaggera Land</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

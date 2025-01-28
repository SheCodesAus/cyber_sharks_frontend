import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "./Button";

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#FFFDFC] text-black border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          {/* Logo with dot */}
          <Link to="/" className="text-3xl font-serif group">
            <span className="text-3xl font-serif group-hover:text-[#FF6602] transition-colors">
              Prism
            </span>
            <span className="text-[#FF6602]">.</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-base">
            <Link to="/about" className="relative group">
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
            </Link>
            <Link
              to="/create-portfolio"
              className="whitespace-nowrap relative group"
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
            <Button className="bg-black px-8 py-3 text-base min-w-[140px] text-center rounded-full text-white hover:opacity-90 transition-all">
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Outlet for Nested Routes */}
      <div className="pt-2">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;

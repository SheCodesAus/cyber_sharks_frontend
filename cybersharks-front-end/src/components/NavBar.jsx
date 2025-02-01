import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [auth]);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to the homepage on logout
  };

  const handleLogin = () => {
    navigate("/login"); // Redirect to the login page on login
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#FFFDFC] text-black border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="col-span-3">
            <Link to="/" className="text-3xl font-serif text-customBlack group">
              <span className="group-hover:text-accent1 transition-colors">
                Prism
              </span>
              <span className="text-accent1">.</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-base">
            {/* About Button Scrolls to Stats and Mission */}
            <button
              onClick={() => {
                scrollToSection("stats-section");
                setTimeout(() => scrollToSection("mission-statement"), 500); // Add delay for smooth transition
              }}
              className="relative group"
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

            {/* Create Portfolio */}
            <Link
              to={!isLoggedIn ? "/login" : "/portfolio/new"}
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

            {/* Login/Logout Button */}
            {!isLoggedIn ? (
              <Button
                onClick={handleLogin}
                // className="bg-customBlack px-8 py-3 text-base min-w-[140px] text-center rounded-full text-white hover:opacity-90 transition-all"
                className="bg-customBlack px-8 py-3 text-base min-w-[140px] text-center rounded-full text-white hover:opacity-90 transition-all flex items-center justify-center"
              >
                Login
              </Button>
            ) : (
              <Button
                onClick={handleLogout}
                // className="bg-customBlack px-8 py-3 text-base min-w-[140px] text-center rounded-full text-white hover:opacity-90 transition-all"
                className="bg-customBlack px-8 py-3 text-base min-w-[140px] text-center rounded-full text-white hover:opacity-90 transition-all flex items-center justify-center"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

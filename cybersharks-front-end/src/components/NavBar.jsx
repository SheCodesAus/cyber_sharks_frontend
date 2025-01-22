import { Link, Outlet } from "react-router-dom";
import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <nav className="w-full py-4 px-6 bg-customWhite fixed top-0 left-0 shadow-md z-50 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-cormorant font-bold text-customBlack"
        >
          Prism
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-openSans text-gray-600">
          {/* <Link to="/search" className="hover:text-customBlack">
            Search
          </Link> */}
          <Link to="/about" className="hover:text-customBlack">
            About
          </Link>
          <Link to="/how-it-works" className="hover:text-customBlack">
            How It Works
          </Link>
        </div>

        {/* Join Platform Button */}
        <Button className="bg-customBlack text-customWhite hover:bg-gray-800 transition-all">
          Join Platform
        </Button>
      </nav>

      {/* Outlet for Nested Routes */}
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;

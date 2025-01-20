import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Button from "../Button";

function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-customWhite">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-cormorant font-bold text-customBlack"
        >
          NameName
        </Link>

        {/* Navigation Links */}
        <NavBar />
      </div>

      {/* Right Section: Button */}
      <Button className="bg-customBlack text-customWhite hover:bg-gray-800 transition-all">
        Join Us
      </Button>
    </header>
  );
}

export default Header;

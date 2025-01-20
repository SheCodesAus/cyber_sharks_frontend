import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-customWhite">
      {/* Left Section */}
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

      {/* Right Section */}
      <Button className="bg-customBlack text-customWhite hover:bg-gray-800 transition-all">
        Join Us
      </Button>
    </header>
  );
};

export default Header;

// function Header() {
//   return (
//     <header className="w-full py-4 px-6 flex justify-between items-center bg-customWhite">
//       {/* Left Section: Logo and Navigation */}
//       <div className="flex items-center gap-6">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-cormorant font-bold text-customBlack"
//         >
//           NameName
//         </Link>

//         {/* Navigation Links */}
//         <NavBar />
//       </div>

//       {/* Right Section: Button */}
//       <Button className="bg-customBlack text-customWhite hover:bg-gray-800 transition-all">
//         Join Us
//       </Button>
//     </header>
//   );
// }

// export default Header;

// const Header = () => {
//   return (
//     <header className="w-full py-4 px-6 flex justify-between items-center bg-customWhite">
//       <div className="text-2xl font-cormorant font-bold text-customBlack">
//         NameName
//       </div>
//       <nav className="flex gap-6 text-sm font-openSans text-gray-600">
//         <a href="#about" className="hover:text-customBlack">
//           About
//         </a>
//         <a href="#contact" className="hover:text-customBlack">
//           Contact
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;

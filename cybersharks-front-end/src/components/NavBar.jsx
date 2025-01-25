// import { Link, Outlet } from "react-router-dom";
// import Button from "./Button";

// const NavBar = () => {
//   return (
//     <>
//       <nav className="w-full py-4 px-6 bg-customWhite fixed top-0 left-0 shadow-md z-50 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-cormorant font-bold text-customBlack"
//         >
//           Prism
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex gap-6 text-sm font-openSans text-gray-600">
//           {/* <Link to="/search" className="hover:text-customBlack">
//             Search
//           </Link> */}
//           <Link to="/about" className="hover:text-customBlack">
//             About
//           </Link>
//           <Link to="/how-it-works" className="hover:text-customBlack">
//             How It Works
//           </Link>
//         </div>

//         {/* Join Platform Button */}
//         <Button className="bg-customBlack text-customWhite hover:bg-gray-800 transition-all">
//           Join Platform
//         </Button>
//       </nav>

//       {/* Outlet for Nested Routes */}
//       <div className="pt-16">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default NavBar;

// import { Link, Outlet } from "react-router-dom";
// import Button from "./Button";

// const NavBar = () => {
//   return (
//     <>
//       <nav className="w-full py-4 px-6 bg-customWhite fixed top-0 left-0 shadow-md z-50 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-cormorant font-bold text-customBlack"
//         >
//           Role Models
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex gap-6 text-sm font-openSans text-gray-600">
//           <Link to="/about" className="hover:text-customBlack">
//             About
//           </Link>
//           <Button className="bg-customBlack text-customWhite hover:bg-gray-800 transition-all">
//             Join
//           </Button>
//         </div>
//       </nav>

//       {/* Outlet for Nested Routes */}
//       <div className="pt-16">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default NavBar;

import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(
    "bg-customWhite text-customBlack"
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentBackground = "bg-customWhite text-customBlack"; // Default background

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInViewport =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;

        if (isInViewport) {
          if (section.classList.contains("bg-[#FFFEFD]")) {
            currentBackground = "bg-black text-white";
          }
        }
      });

      setNavBackground(currentBackground);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full py-4 px-6 fixed top-0 left-0 shadow-md z-50 flex justify-between items-center transition-colors duration-300 ${navBackground}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-cormorant font-bold transition-colors duration-300"
        >
          Prism
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-openSans">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Button className="bg-customBlack text-customWhite hover:bg-gray-800 transition-all">
            Join
          </Button>
        </div>
      </nav>

      {/* Outlet for Nested Routes */}
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;

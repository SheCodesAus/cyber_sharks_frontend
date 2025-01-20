// import { Link, Outlet } from "react-router-dom";

// function NavBar() {
//     return (
//     <div>
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//         </nav>
//         {/* React Router will pass components into the <Outlet /> based on the path */}
//         <Outlet />
//     </div>
//     );
// }

// export default NavBar;

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex gap-6 text-sm font-openSans text-gray-600">
      <Link to="/about" className="hover:text-customBlack">
        About
      </Link>
      <Link to="/contact" className="hover:text-customBlack">
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;

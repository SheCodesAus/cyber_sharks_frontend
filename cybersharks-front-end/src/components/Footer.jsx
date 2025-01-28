// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer bg-[#1a1a1a] text-[#FFFEFD] p-10 border-t border-gray-800">
//       <div className="bg-[#1a1a1a] text-[#FFFEFD]">
//         <div className="max-w-6xl mx-auto px-6 py-16">
//           <div className="grid grid-cols-4 gap-8">
//             {/* Brand Section */}
//             <div className="col-span-1">
//               <Link to="/" className="text-2xl font-cormorant font-bold">
//                 Prism
//               </Link>
//             </div>

//             {/* Navigation */}
//             <div className="col-span-1">
//               {/* <h6 className="uppercase text-sm mb-4 text-gray-400">
//                 Navigation
//               </h6> */}
//               <div className="flex flex-col space-y-2">
//                 <Link to="/about" className="hover:text-accent3">
//                   About
//                 </Link>
//                 <Link to="/contact" className="hover:text-accent3">
//                   Contact
//                 </Link>
//                 <Link to="/speakers" className="hover:text-accent3">
//                   Speakers
//                 </Link>
//               </div>
//             </div>

//             {/* Social */}
//             {/* <div className="col-span-1">
//               <h6 className="uppercase text-sm mb-4 text-gray-400">Social</h6>
//               <div className="flex space-x-4">
//                 <a href="https://twitter.com" className="hover:text-accent3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     className="fill-current"
//                   >
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                   </svg>
//                 </a>
//                 <a href="https://youtube.com" className="hover:text-accent3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     className="fill-current"
//                   >
//                     <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
//                   </svg>
//                 </a>
//                 <a href="https://facebook.com" className="hover:text-accent3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     className="fill-current"
//                   >
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                   </svg>
//                 </a>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-black pt-32 pb-24">
//       {" "}
//       {/* Changed bg, increased vertical padding by 30% */}
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-12 gap-8 pl-32">
//           {" "}
//           {/* Added pl-32 to move content right */}
//           {/* Logo Section */}
//           <div className="col-span-3">
//             <Link to="/" className="text-2xl font-serif group inline-block">
//               <span className="group-hover:text-[#FF6602] transition-colors">
//                 Prism
//               </span>
//               <span className="text-[#FF6602]">.</span>
//             </Link>
//           </div>
//           {/* Navigation Columns */}
//           <div className="col-span-3">
//             <h6 className="font-semibold mb-4">Navigation</h6>
//             <div className="flex flex-col space-y-3">
//               <Link
//                 to="/about"
//                 className="relative w-fit group text-sm text-gray-600 hover:text-black"
//               >
//                 About
//                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6602] scale-x-0 group-hover:scale-x-100 transition-transform">
//                   <svg
//                     className="absolute -bottom-[2px] left-0 w-full"
//                     viewBox="0 0 120 12"
//                     fill="none"
//                     preserveAspectRatio="none"
//                     height="6"
//                   >
//                     <path
//                       d="M3 8.5C20 2.5 70 2.5 117 8.5"
//                       stroke="#FF6602"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//               <Link
//                 to="/create-portfolio"
//                 className="relative w-fit group text-sm text-gray-600 hover:text-black"
//               >
//                 Create Portfolio
//                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6602] scale-x-0 group-hover:scale-x-100 transition-transform">
//                   <svg
//                     className="absolute -bottom-[2px] left-0 w-full"
//                     viewBox="0 0 120 12"
//                     fill="none"
//                     preserveAspectRatio="none"
//                     height="6"
//                   >
//                     <path
//                       d="M3 8.5C20 2.5 70 2.5 117 8.5"
//                       stroke="#FF6602"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section with Copyright */}
//         <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center pl-32">
//           {" "}
//           {/* Added pl-32 to match above */}
//           <div className="text-sm text-gray-600">
//             <p>© 2025 Cyber-Shark Inc.</p>
//             <p>Designed in Turball Yaggera Country</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-24 pb-20">
      {" "}
      {/* Decreased vertical padding by 15% */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-12 gap-8">
          {" "}
          {/* Removed pl-32 to align with homepage */}
          {/* Logo Section */}
          <div className="col-span-3">
            <Link to="/" className="text-2xl font-serif group inline-block">
              <span className="group-hover:text-[#FF6602] transition-colors">
                Prism
              </span>
              <span className="text-[#FF6602]">.</span>
            </Link>
          </div>
          {/* Navigation Links - Now side by side */}
          <div className="col-span-6">
            <div className="flex space-x-8">
              {" "}
              {/* Changed to horizontal layout */}
              <Link
                to="/about"
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
              </Link>
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

        {/* Bottom Section with Copyright - Removed border-t */}
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

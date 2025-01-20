import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// Tawilwind CSS
import "./styles/globals.css";

// Here we import out pages
import HomePage from "./pages/HomePage.jsx";

// Here we import our components
import NavBar from "./components/NavBar.jsx";
import SignupPage from "./pages/SignupPage.jsx";

// Here we create our router and tell it whats pages to render at what path
const router = createBrowserRouter([
  // These are the three routes!
  {
    path: "/",
    // Putting our NavBar as the main component will causes the children to render in the <Outlet />
    // element: <NavBar />,
    //     children: [{ path: "/", element: <HomePage /> }],
    //     children: [{ path: "/signup", element: <SignupPage /> }],
    //   },
    // ]);
    element: <HomePage />, // HomePage renders Header, including NavBar
    children: [{ path: "/signup", element: <SignupPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so the pages render */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

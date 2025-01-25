import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
// Tawilwind CSS


// import pages and components
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import NavBar from "./components/NavBar.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
// import Footer from "./components/Footer.jsx";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so the pages render */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

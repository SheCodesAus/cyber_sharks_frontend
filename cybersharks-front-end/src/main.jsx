import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
// Tailwind CSS

// import pages and components
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import CreatePortfolio from "./pages/CreatePortfolio.jsx";

// Layout component
const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet /> {/* This renders the child routes */}
      </main>
      <Footer />
    </div>
  );
};

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component for common NavBar and Footer
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/portfolio/new", element: <CreatePortfolio /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

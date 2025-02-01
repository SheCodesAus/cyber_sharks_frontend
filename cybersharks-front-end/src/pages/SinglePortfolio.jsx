import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import getPortfolioById from "../api/get-portfolioById"; // Import API function

function SinglePortfolio() {
  const { id } = useParams(); // Get portfolio ID from URL

  console.log("Portfolio ID from URL:", id);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Biography");

  useEffect(() => {
    if (!id) return;
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolioById(id);
        setPortfolio(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, [id]);

  if (isLoading)
    return <div className="text-center py-20">Loading portfolio...</div>;
  if (error || !portfolio)
    return (
      <div className="text-center py-20 text-red-500">Portfolio not found</div>
    );

  // Tab content switcher
  const renderContent = () => {
    switch (activeTab) {
      case "Biography":
        return <p className="text-gray-700">{portfolio.biography}</p>;
      case "Specialisations":
        return (
          <p className="text-gray-700">
            {portfolio.specialisations.join(", ")}
          </p>
        );
      case "Topics":
        return <p className="text-gray-700">{portfolio.topics.join(", ")}</p>;
      default:
        return <p className="text-gray-500">Select a tab to see content.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-customWhite p-6">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto text-center pt-20 py-3">
        <img
          className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-accent1"
          src={portfolio.photo || "https://via.placeholder.com/150"}
          alt={`${portfolio.first_name} ${portfolio.last_name}`}
        />
        <h2 className="text-2xl font-semibold mt-4">
          {portfolio.first_name} {portfolio.last_name}
        </h2>
        <div className="flex justify-center items-center">
          <FaMapMarkerAlt />
          <p className="text-gray-500">{portfolio.location}</p>
        </div>
        <p className="text-gray-500">
          {portfolio.occupation} at {portfolio.company || "N/A"}
        </p>

        {/* Contact Links */}
        <div className="relative flex justify-center gap-4 mt-4">
          <div
            className={`absolute inset-0 bg-white/40 backdrop-blur-sm ${
              auth.token ? "hidden" : "flex items-center justify-center"
            }`}
          >
            <p
              className="text-customBlack cursor-pointer font-bold text-[1.1rem]"
              onClick={() => navigate("/login")}
            >
              Please login to see the contact details.
            </p>
          </div>
          <div
            className={`${
              !auth.token ? "blurred pointer-events-none" : "flex gap-3"
            }`}
          >
            <a
              href={`mailto:${portfolio.email}`}
              className="flex items-center gap-2 hover:text-accent1"
            >
              <MdOutlineEmail className="w-5 h-5" /> Email
            </a>
            <a
              href={portfolio.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent1"
            >
              <FaLinkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-3 w-[80%] mx-auto space-y-1 bg-accentbg py-2 rounded-xl">
          <p>
            <strong>Specialisation:</strong>{" "}
            {portfolio.specialisations.join(", ")}
          </p>
          <p>
            <strong>Topics:</strong> {portfolio.topics.join(", ")}
          </p>
          <p>
            <strong>Experience Level:</strong> {portfolio.experience_level}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <nav className="flex justify-center mt-6 space-x-6 text-gray-700 border-b border-gray-300 pb-2">
        {["Biography", "Specialisations", "Topics"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 transition ${
              activeTab === tab
                ? "text-customBlack font-bold border-b-2 border-b-black"
                : "hover:text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content Section */}
      <div className="bg-white shadow-md p-6 mt-4 rounded-lg max-w-3xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default SinglePortfolio;

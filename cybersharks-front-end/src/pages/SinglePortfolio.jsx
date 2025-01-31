import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import getPortfolioById from "../api/get-portfolioById";
import { useEffect } from "react";

function SinglePortfolio() {
  const { id } = useParams();
  const { auth } = useAuth();
  const navigate = useNavigate();
  //   when auth is null, move to login page or show message.
  const [activeTab, setActiveTab] = useState("Biography");

  // Dummy user data
  const userData = {
    first_name: "Jane",
    last_name: "Doe",
    experience_level: "Mid",
    occupation: "Software Engineer",
    company: "She Codes",
    topic_detail: "",
    specialisations_detail: "",
    location: "Brisbane",
    linkedin: "https://linkedin.com/in/janedoe",
    email: "janedoe@example.com",
    biography:
      "Jane is a passionate developer with a love for clean code and innovation. She has over 10 years of experience building web applications and mentoring aspiring developers.",
    topics: ["Frontend Development", "UI/UX Design"],
    specialisations: ["Python", "React.js", "React.js", ,],
    photo:
      "https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const [portfolio, setPortfolio] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPortfolioById(1);
        setPortfolio(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(portfolio);

  // Tab content switcher
  const renderContent = () => {
    switch (activeTab) {
      case "Biography":
        return <p className="text-gray-700">{userData.biography}</p>;
      case "Specialisations":
        return (
          <p className="text-gray-700">{userData.specialisations_detail}</p>
        );
      case "Topics":
        return <p className="text-gray-700">{userData.topic_detail}</p>;
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
          src={userData.photo}
          alt={`${userData.first_name} ${userData.last_name}`}
        />
        <h2 className="text-2xl font-semibold mt-4">
          {userData.first_name} {userData.last_name}
        </h2>

        <div className="flex justify-center items-center">
          <FaMapMarkerAlt />
          <p className="text-gray-500">{userData.location}</p>
        </div>
        <p className="text-gray-500">
          {userData.occupation} at {userData.company}
        </p>

        {/* Contact Links */}
        {/* !todo only for logged in user */}
        <div className="relative flex justify-center gap-4 mt-4">
          <div
            className={`absolute inset-0 bg-white/40 backdrop-blur-md ${
              auth.token ? "hidden" : "flex items-center justify-center"
            }`}
          >
            <p
              className="text-gray-600 cursor-pointer font-bold hover:underline"
              onClick={() => navigate("/login")}
            >
              Please login to see the contact details
            </p>
          </div>

          {/* 실제 연락처 정보 */}
          <div
            className={`${
              !auth.token ? "blurred pointer-events-none" : "flex gap-3"
            }`}
          >
            <a
              href={`mailto:${userData.email}`}
              className="flex items-center gap-2 hover:text-accent1"
            >
              <MdOutlineEmail className="w-5 h-5" /> Email
            </a>
            <a
              href={userData.linkedin}
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
            {userData.specialisations.join(", ")}
          </p>
          <p>
            <strong>Topics:</strong> {userData.topics.join(", ")}
          </p>
          <p>
            <strong>Experience Level:</strong> {userData.experience_level}
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

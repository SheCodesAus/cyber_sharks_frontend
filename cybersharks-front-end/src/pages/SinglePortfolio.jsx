import { useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
function SinglePortfolio() {
  const id = useParams();
  const [activeTab, setActiveTab] = useState("Biography");

  // Dummy user data
  const userData = {
    first_name: "Jane",
    last_name: "Doe",
    location: "Brisbane",
    linkedin: "https://linkedin.com/in/janedoe",
    email: "janedoe@example.com",
    biography:
      "Jane is a passionate developer with a love for clean code and innovation. She has over 10 years of experience building web applications and mentoring aspiring developers.",
    topics: ["Frontend", "Frontend"],
    specialisations: ["python", "ReactJs"],
    photo:
      "https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  // Tab content switcher
  const renderContent = () => {
    switch (activeTab) {
      case "Biography":
        return (
          <div className="bg-accentbg py-2 px-2">
            <p>{userData.biography}</p>
          </div>
        );

      case "Specialisations":
        return (
          <div className="bg-accentbg py-2 px-2">
            {userData.specialisations.map((item, index) => (
              <span key={index} className="flex ">
                {item}
              </span>
            ))}
          </div>
        );
      case "Topics":
        return (
          <div className="bg-accentbg py-2 px-2">
            {userData.topics.map((item, index) => (
              <span key={index} className="flex ">
                {item}
              </span>
            ))}
          </div>
        );
      default:
        return <p>Select a tab to see content</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center bg-white shadow-md p-6 rounded-lg mt-6 max-w-4xl mx-auto pt-16 sm:flex-row sm:justify-center sm:gap-9">
        <img
          className="w-32 h-32 rounded-full mb-4 object-cover sm:w-56 sm:h-56"
          src={userData.photo}
        ></img>
        <div>
          <h2 className="text-2xl font-bold text-center">
            {userData.first_name} {userData.last_name}
          </h2>
          <p className="text-gray-600 text-center">{userData.location}</p>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-1">
              <FaLinkedin className="w-5 h-5" />
              <a href={`mailto:${userData.email}`} className="text-customBlack">
                Email
              </a>
            </div>

            <div className="flex items-center gap-1">
              <MdOutlineEmail className="w-5 h-5" />
              <a
                href={userData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-customblack"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* only for authenticated user!!! */}
      </div>

      {/* Tab Navigation */}
      <nav className="flex justify-center mt-6 bg-white shadow-md p-4 rounded-lg max-w-4xl mx-auto border-accent1">
        {["Biography", "Specialisations", "Topics"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "text-accent1 border-b-2 border-accent1"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content Section */}
      <div className="bg-white shadow-md p-6 mt-4 rounded-lg max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default SinglePortfolio;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchPortfolioByKeywords from "../api/get-search.js";
function Search({ setFilterdPortfolio, setErrorMessage }) {
  const [location, setLocation] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSpecialisations, setSelectedSpecialisations] = useState([]);

  const navigate = useNavigate();

  // handle dropdown selections
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleTopicChange = (e) => {
    const value = e.target.value;
    if (value && !selectedTopics.includes(value)) {
      setSelectedTopics([...selectedTopics, value]);
    }
  };

  const handleSpecialisationChange = (e) => {
    const value = e.target.value;
    if (value && !selectedSpecialisations.includes(value)) {
      setSelectedSpecialisations([...selectedSpecialisations, value]);
    }
  };

  const removeTag = (type, value) => {
    if (type === "location") {
      setLocation("");
    } else if (type === "topic") {
      setSelectedTopics(selectedTopics.filter((topic) => topic !== value));
    } else if (type === "specialisation") {
      setSelectedSpecialisations(
        selectedSpecialisations.filter((spec) => spec !== value)
      );
    }

    // if all filters are empty, reset the page to show all profiles
    const updatedLocation = type === "location" ? "" : location;
    const updatedTopics =
      type === "topic"
        ? selectedTopics.filter((topic) => topic !== value)
        : selectedTopics;
    const updatedSpecialisations =
      type === "specialisation"
        ? selectedSpecialisations.filter((spec) => spec !== value)
        : selectedSpecialisations;

    if (
      !updatedLocation &&
      updatedTopics.length === 0 &&
      updatedSpecialisations.length === 0
    ) {
      navigate("/search"); // Reset URL to default search page
    }
  };

  // handle search - update URL with query parameters
  const handleSearch = async () => {
    try {
      const result = await searchPortfolioByKeywords(
        location,
        selectedSpecialisations,
        selectedTopics
      );

      if (result.error) {
        setFilterdPortfolio([]);
        setErrorMessage(result.error);
      }
      if (Array.isArray(result.profiles) && result.profiles.length > 0) {
        setFilterdPortfolio(result.profiles);
        setErrorMessage("");
      } else {
        setErrorMessage(result.error);
        console.log(result.error);
      }
    } catch (error) {
      console.error("Fail to search", error.message);
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-16">
      <div className="w-auto bg-[#FFF7ED] rounded-xl shadow-md p-6 flex flex-col space-y-4 max-w-5xl mx-auto">
        <div className="flex justify-center items-center space-x-4 w-full">
          {/* location */}
          <select
            value={location}
            onChange={handleLocationChange}
            className="w-60 border border-gray-300 rounded-lg p-2 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100 text-center"
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="Brisbane">Brisbane</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Sydney">Sydney</option>
          </select>

          {/* topics ddropdown */}
          <select
            value=""
            onChange={handleTopicChange}
            className="w-60 border border-gray-300 rounded-lg p-2 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100 text-center"
          >
            <option value="" disabled>
              Select Topic
            </option>
            <option value="DevOps" className="text-black">
              DevOps
            </option>
            <option value="frontend" className="text-black">
              Frontend
            </option>
            <option value="Agile methodologies" className="text-black">
              Agile methodologies
            </option>
            <option value="Data Visualisation" className="text-black">
              Data Visualisation
            </option>
            <option value="Responsive Design" className="text-black">
              Responsive Design
            </option>
          </select>

          {/* Specialisations propdown */}
          <select
            value=""
            onChange={handleSpecialisationChange}
            className="w-60 border border-gray-300 rounded-lg p-2 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100 text-center"
          >
            <option value="" disabled>
              Select Specialisation
            </option>
            <option value="ReactJs" className="text-black">
              ReactJs
            </option>
            <option value="Html/Css" className="text-black">
              Html/Css
            </option>
            <option value="Java" className="text-black">
              Java
            </option>
            <option value="Django" className="text-black">
              Django
            </option>
            <option value="Python" className="text-black">
              Python
            </option>
          </select>

          {/* Search button */}
          <button
            onClick={handleSearch}
            className="bg-[#FFF7ED] text-[#FF6602] border border-[#FF6602] px-6 py-2 rounded-lg hover:bg-[#FFEBD9] transition-shadow shadow-md hover:shadow-lg"
          >
            Search
          </button>
        </div>

        {/* Display orange tags */}
        <div className="flex flex-wrap gap-2">
          {location && (
            <span className="bg-[#FF6602] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {location}
              <button
                onClick={() => removeTag("location", location)}
                className="hover:text-gray-200"
              >
                ×
              </button>
            </span>
          )}
          {selectedTopics.map((topic) => (
            <span
              key={topic}
              className="bg-[#FF6602] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {topic}
              <button
                onClick={() => removeTag("topic", topic)}
                className="hover:text-gray-200"
              >
                ×
              </button>
            </span>
          ))}
          {selectedSpecialisations.map((spec) => (
            <span
              key={spec}
              className="bg-[#FF6602] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {spec}
              <button
                onClick={() => removeTag("specialisation", spec)}
                className="hover:text-gray-200"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

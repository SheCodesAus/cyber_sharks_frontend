import React, { useState } from "react";
import Button from "./Button";

// Search component for filtering results by location, topics, and specialisations
function Search() {
  // State management for form fields and selected filter
  const [location, setLocation] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSpecialisations, setSelectedSpecialisations] = useState([]);

  // Event handler for location select input
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Event handler for topic select input
  // Add new topic if not already selected
  const handleTopicChange = (e) => {
    const value = e.target.value;
    if (value && !selectedTopics.includes(value)) {
      setSelectedTopics([...selectedTopics, value]);
    }
  };

  // Event handler for specialisation select input
  // Add new specialisation if not already selected
  const handleSpecialisationChange = (e) => {
    const value = e.target.value;
    if (value && !selectedSpecialisations.includes(value)) {
      setSelectedSpecialisations([...selectedSpecialisations, value]);
    }
  };

  // Remove selected filter tag based on type (location/topic/specialisation)
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
  };

  // Log search parameters when search button is clicked
  const handleSearch = () => {
    console.log("Search clicked", {
      location,
      topics: selectedTopics,
      specialisations: selectedSpecialisations,
    });
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div className="w-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col space-y-6">
          {/* Search filters section */}
          <div className="flex space-x-4">
            {/* Location select input */}
            <select
              value={location}
              onChange={handleLocationChange}
              className="w-48 border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100"
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="Brisbane" className="text-black">
                Brisbane
              </option>
              <option value="Melbourne" className="text-black">
                Melbourne
              </option>
              <option value="Sydney" className="text-black">
                Sydney
              </option>
            </select>

            {/* Topic select input */}
            <select
              value=""
              onChange={handleTopicChange}
              className="w-48 border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100"
            >
              <option value="" disabled>
                Select Topic
              </option>
              <option value="Scrum Master" className="text-black">
                Scrum Master
              </option>
              <option value="Public Speaker" className="text-black">
                Public Speaker
              </option>
            </select>

            {/* Specialisation select input */}
            <select
              value=""
              onChange={handleSpecialisationChange}
              className="w-48 border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100"
            >
              <option value="" disabled>
                Select Specialisation
              </option>
              <option value="React" className="text-black">
                React
              </option>
              <option value="Django" className="text-black">
                Django
              </option>
              <option value="Python" className="text-black">
                Python
              </option>
            </select>

            {/* Search button */}
            <div className="w-64">
              <Button onClick={handleSearch} name="Search" />
            </div>
          </div>

          {/* Selected filters tags display */}
          <div className="flex flex-wrap gap-2 justify-center">
            {location && (
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {location}
                <button
                  onClick={() => removeTag("location", location)}
                  className="hover:text-purple-600"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTopics.map((topic) => (
              <span
                key={topic}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {topic}
                <button
                  onClick={() => removeTag("topic", topic)}
                  className="hover:text-blue-600"
                >
                  ×
                </button>
              </span>
            ))}
            {selectedSpecialisations.map((spec) => (
              <span
                key={spec}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {spec}
                <button
                  onClick={() => removeTag("specialisation", spec)}
                  className="hover:text-green-600"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

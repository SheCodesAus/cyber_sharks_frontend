// import React, { useState } from "react";
// import Button from "./Button";

// // Search component for filtering results by location, topics, and specialisations
// function Search() {
//   // State management for form fields and selected filter
//   const [location, setLocation] = useState("");
//   const [selectedTopics, setSelectedTopics] = useState([]);
//   const [selectedSpecialisations, setSelectedSpecialisations] = useState([]);

//   // Event handler for location select input
//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   // Event handler for topic select input
//   // Add new topic if not already selected
//   const handleTopicChange = (e) => {
//     const value = e.target.value;
//     if (value && !selectedTopics.includes(value)) {
//       setSelectedTopics([...selectedTopics, value]);
//     }
//   };

//   // Event handler for specialisation select input
//   // Add new specialisation if not already selected
//   const handleSpecialisationChange = (e) => {
//     const value = e.target.value;
//     if (value && !selectedSpecialisations.includes(value)) {
//       setSelectedSpecialisations([...selectedSpecialisations, value]);
//     }
//   };

//   // Remove selected filter tag based on type (location/topic/specialisation)
//   const removeTag = (type, value) => {
//     if (type === "location") {
//       setLocation("");
//     } else if (type === "topic") {
//       setSelectedTopics(selectedTopics.filter((topic) => topic !== value));
//     } else if (type === "specialisation") {
//       setSelectedSpecialisations(
//         selectedSpecialisations.filter((spec) => spec !== value)
//       );
//     }
//   };

//   // Log search parameters when search button is clicked
//   const handleSearch = () => {
//     console.log("Search clicked", {
//       location,
//       topics: selectedTopics,
//       specialisations: selectedSpecialisations,
//     });
//   };

//   return (
//     <div className="flex justify-center items-center w-full px-4 py-8">
//       <div className="w-auto bg-white rounded-xl shadow-lg p-8">
//         <div className="flex flex-col space-y-6">
//           {/* Search filters section */}
//           <div className="flex space-x-4">
//             {/* Location select input */}
//             <select
//               value={location}
//               onChange={handleLocationChange}
//               className="w-48 border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100"
//             >
//               <option value="" disabled>
//                 Select Location
//               </option>
//               <option value="Brisbane" className="text-black">
//                 Brisbane
//               </option>
//               <option value="Melbourne" className="text-black">
//                 Melbourne
//               </option>
//               <option value="Sydney" className="text-black">
//                 Sydney
//               </option>
//             </select>

//             {/* Topic select input */}
//             <select
//               value=""
//               onChange={handleTopicChange}
//               className="w-48 border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100"
//             >
//               <option value="" disabled>
//                 Select Topic
//               </option>
//               <option value="Scrum Master" className="text-black">
//                 Scrum Master
//               </option>
//               <option value="Public Speaker" className="text-black">
//                 Public Speaker
//               </option>
//             </select>

//             {/* Specialisation select input */}
//             <select
//               value=""
//               onChange={handleSpecialisationChange}
//               className="w-48 border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100"
//             >
//               <option value="" disabled>
//                 Select Specialisation
//               </option>
//               <option value="React" className="text-black">
//                 React
//               </option>
//               <option value="Django" className="text-black">
//                 Django
//               </option>
//               <option value="Python" className="text-black">
//                 Python
//               </option>
//             </select>

//             {/* Search button */}
//             <div className="w-64">
//               <Button onClick={handleSearch} name="Search" />
//             </div>
//           </div>

//           {/* Selected filters tags display */}
//           <div className="flex flex-wrap gap-2 justify-center">
//             {location && (
//               <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
//                 {location}
//                 <button
//                   onClick={() => removeTag("location", location)}
//                   className="hover:text-purple-600"
//                 >
//                   ×
//                 </button>
//               </span>
//             )}
//             {selectedTopics.map((topic) => (
//               <span
//                 key={topic}
//                 className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
//               >
//                 {topic}
//                 <button
//                   onClick={() => removeTag("topic", topic)}
//                   className="hover:text-blue-600"
//                 >
//                   ×
//                 </button>
//               </span>
//             ))}
//             {selectedSpecialisations.map((spec) => (
//               <span
//                 key={spec}
//                 className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
//               >
//                 {spec}
//                 <button
//                   onClick={() => removeTag("specialisation", spec)}
//                   className="hover:text-green-600"
//                 >
//                   ×
//                 </button>
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Search;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ onSearch }) {
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
      onSearch("", [], []); // Reset profiles
    }
  };

  // handle search - update URL with query parameters
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    selectedTopics.forEach((topic) => params.append("topics", topic));
    selectedSpecialisations.forEach((spec) =>
      params.append("specialisations", spec)
    );

    navigate(`/search?${params.toString()}`);

    onSearch(location, selectedTopics, selectedSpecialisations);
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
            <option value="Scrum Master">Scrum Master</option>
            <option value="Public Speaker">Public Speaker</option>
            <option value="AI">AI</option>
            <option value="Cloud">Cloud</option>
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
            <option value="React">React</option>
            <option value="Django">Django</option>
            <option value="Python">Python</option>
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

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import searchPortfolioByKeywords from "../api/get-search.js";
// function Search({ setFilterdPortfolio, setErrorMessage }) {
//   const [location, setLocation] = useState("");
//   const [selectedTopics, setSelectedTopics] = useState([]);
//   const [selectedSpecialisations, setSelectedSpecialisations] = useState([]);

//   const navigate = useNavigate();

//   // handle dropdown selections
//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleTopicChange = (e) => {
//     const value = e.target.value;
//     if (value && !selectedTopics.includes(value)) {
//       setSelectedTopics([...selectedTopics, value]);
//     }
//   };

//   const handleSpecialisationChange = (e) => {
//     const value = e.target.value;
//     if (value && !selectedSpecialisations.includes(value)) {
//       setSelectedSpecialisations([...selectedSpecialisations, value]);
//     }
//   };

//   const formattingKeyword = (word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   };

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

//   // handle search - update URL with query parameters
//   const handleSearch = async () => {
//     try {
//       const result = await searchPortfolioByKeywords(
//         location,
//         selectedSpecialisations,
//         selectedTopics
//       );

//       const searchKeywords = [
//         location ? `Location: "${location}"` : null,
//         selectedSpecialisations.length > 0
//           ? `Specialisations: "${selectedSpecialisations.join(", ")}"`
//           : null,
//         selectedTopics.length > 0
//           ? `Topics: "${selectedTopics.join(", ")}"`
//           : null,
//       ]
//         .filter(Boolean)
//         .join(" | ");

//       if (result.error) {
//         setFilterdPortfolio([]);
//         setErrorMessage(`Oops, no results for: ${searchKeywords} 🙁`);
//       }
//       if (Array.isArray(result.profiles) && result.profiles.length > 0) {
//         setFilterdPortfolio(result.profiles);
//         setErrorMessage("");
//       } else {
//         setFilterdPortfolio([]);
//         setErrorMessage(`Oops, no results for: ${searchKeywords} 🙁`);
//         console.log(result.error);
//       }
//     } catch (error) {
//       console.error("Fail to search", error.message);
//       setErrorMessage("Something went wrong.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center w-full px-4 py-16">
//       <div className="w-auto bg-[#FFF7ED] rounded-xl shadow-md p-6 flex flex-col space-y-4 max-w-5xl mx-auto">
//         <div className="flex justify-center items-center space-x-4 w-full">
//           {/* location */}
//           <select
//             value={location}
//             onChange={handleLocationChange}
//             className="w-60 border border-gray-300 rounded-lg p-2 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100 text-center"
//           >
//             <option value="" disabled>
//               Select Location
//             </option>
//             <option value="Brisbane" className="text-black">
//               Brisbane
//             </option>
//             <option value="Melbourne" className="text-black">
//               Melbourne
//             </option>
//             <option value="Sydney" className="text-black">
//               Sydney
//             </option>
//             <option value="Perth" className="text-black">
//               Perth
//             </option>
//             <option value="Adelaide" className="text-black">
//               Adelaide
//             </option>
//             <option value="Darwin" className="text-black">
//               Darwin
//             </option>
//             <option value="Canberra" className="text-black">
//               Canberra
//             </option>
//           </select>

//           {/* topics ddropdown */}
//           <select
//             value=""
//             onChange={handleTopicChange}
//             className="w-60 border border-gray-300 rounded-lg p-2 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100 text-center"
//           >
//             <option value="" disabled>
//               Select Topic
//             </option>
//             <option value="devops" className="text-black">
//               Dev Ops
//             </option>
//             <option value="frontend" className="text-black">
//               Frontend
//             </option>
//             <option value="agile methodologies" className="text-black">
//               Agile methodologies
//             </option>
//             <option value="data visualisation" className="text-black">
//               Data Visualisation
//             </option>
//             <option value="responsive design" className="text-black">
//               Responsive Design
//             </option>
//             <option value="API Design" className="text-black">
//               API Design
//             </option>
//           </select>

//           {/* Specialisations propdown */}
//           <select
//             value=""
//             onChange={handleSpecialisationChange}
//             className="w-60 border border-gray-300 rounded-lg p-2 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100 text-center"
//           >
//             <option value="" disabled>
//               Select Specialisation
//             </option>
//             <option value="reactjs" className="text-black">
//               ReactJs
//             </option>
//             <option value="html/css" className="text-black">
//               Html/Css
//             </option>
//             <option value="java" className="text-black">
//               Java
//             </option>
//             <option value="django" className="text-black">
//               Django
//             </option>
//             <option value="python" className="text-black">
//               Python
//             </option>
//           </select>

//           {/* Search button */}
//           <button
//             onClick={handleSearch}
//             className="bg-[#FFF7ED] text-[#FF6602] border border-[#FF6602] px-6 py-2 rounded-lg hover:bg-[#FFEBD9] transition-shadow shadow-md hover:shadow-lg"
//           >
//             Search
//           </button>
//         </div>

//         {/* Display tags */}
//         <div className="flex flex-wrap gap-2">
//           {location && (
//             <span className="bg-[#FF6602] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
//               {formattingKeyword(location)}
//               <button
//                 onClick={() => removeTag("location", location)}
//                 className="hover:text-gray-200"
//               >
//                 ×
//               </button>
//             </span>
//           )}
//           {selectedTopics.map((topic) => (
//             <span
//               key={topic}
//               className="bg-[#FF6602] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
//             >
//               {formattingKeyword(topic)}
//               <button
//                 onClick={() => removeTag("topic", topic)}
//                 className="hover:text-gray-200"
//               >
//                 ×
//               </button>
//             </span>
//           ))}
//           {selectedSpecialisations.map((spec) => (
//             <span
//               key={spec}
//               className="bg-[#FF6602] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
//             >
//               {formattingKeyword(spec)}
//               <button
//                 onClick={() => removeTag("specialisation", spec)}
//                 className="hover:text-gray-200"
//               >
//                 ×
//               </button>
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Search;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchPortfolioByKeywords from "../api/get-search.js";

function Search({ setFilterdPortfolio, setErrorMessage }) {
  const [location, setLocation] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSpecialisations, setSelectedSpecialisations] = useState([]);

  const navigate = useNavigate();

  // Check if any filters are active
  const hasActiveFilters =
    location || selectedTopics.length > 0 || selectedSpecialisations.length > 0;

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

  const formattingKeyword = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const removeTag = (type, value) => {
    switch (type) {
      case "location":
        setLocation("");
        break;
      case "topic":
        setSelectedTopics(selectedTopics.filter((topic) => topic !== value));
        break;
      case "specialisation":
        setSelectedSpecialisations(
          selectedSpecialisations.filter((spec) => spec !== value)
        );
        break;
    }

    // Check if this removal results in no active filters
    const willHaveNoFilters =
      (type === "location" &&
        !selectedTopics.length &&
        !selectedSpecialisations.length) ||
      (type === "topic" &&
        !location &&
        selectedTopics.filter((t) => t !== value).length === 0 &&
        !selectedSpecialisations.length) ||
      (type === "specialisation" &&
        !location &&
        !selectedTopics.length &&
        selectedSpecialisations.filter((s) => s !== value).length === 0);

    if (willHaveNoFilters) {
      setFilterdPortfolio([]);
      setErrorMessage("");
    } else {
      // If there are still active filters,search with remaining filters
      handleSearch({
        newLocation: type === "location" ? "" : location,
        newTopics:
          type === "topic"
            ? selectedTopics.filter((t) => t !== value)
            : selectedTopics,
        newSpecialisations:
          type === "specialisation"
            ? selectedSpecialisations.filter((s) => s !== value)
            : selectedSpecialisations,
      });
    }
  };

  // handle search - update URL with query parameters
  const handleSearch = async (overrideFilters = null) => {
    try {
      const searchLocation = overrideFilters
        ? overrideFilters.newLocation
        : location;
      const searchTopics = overrideFilters
        ? overrideFilters.newTopics
        : selectedTopics;
      const searchSpecialisations = overrideFilters
        ? overrideFilters.newSpecialisations
        : selectedSpecialisations;

      const result = await searchPortfolioByKeywords(
        searchLocation,
        searchSpecialisations,
        searchTopics
      );

      const searchKeywords = [
        searchLocation ? `Location: "${searchLocation}"` : null,
        searchSpecialisations.length > 0
          ? `Specialisations: "${searchSpecialisations.join(", ")}"`
          : null,
        searchTopics.length > 0 ? `Topics: "${searchTopics.join(", ")}"` : null,
      ]
        .filter(Boolean)
        .join(" | ");

      if (result.error || !result.profiles?.length) {
        setFilterdPortfolio([]);
        setErrorMessage(`Oops, no results for: ${searchKeywords} 🙁`);
      } else if (Array.isArray(result.profiles) && result.profiles.length > 0) {
        setFilterdPortfolio(result.profiles);
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Failed to search:", error);
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
            <option value="Brisbane" className="text-black">
              Brisbane
            </option>
            <option value="Melbourne" className="text-black">
              Melbourne
            </option>
            <option value="Sydney" className="text-black">
              Sydney
            </option>
            <option value="Perth" className="text-black">
              Perth
            </option>
            <option value="Adelaide" className="text-black">
              Adelaide
            </option>
            <option value="Darwin" className="text-black">
              Darwin
            </option>
            <option value="Canberra" className="text-black">
              Canberra
            </option>
          </select>

          {/* topics dropdown */}
          <select
            value=""
            onChange={handleTopicChange}
            className="w-60 border border-gray-300 rounded-lg p-2 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100 text-center"
          >
            <option value="" disabled>
              Select Topic
            </option>
            <option value="devops" className="text-black">
              Dev Ops
            </option>
            <option value="frontend" className="text-black">
              Frontend
            </option>
            <option value="agile methodologies" className="text-black">
              Agile methodologies
            </option>
            <option value="data visualisation" className="text-black">
              Data Visualisation
            </option>
            <option value="responsive design" className="text-black">
              Responsive Design
            </option>
            <option value="API Design" className="text-black">
              API Design
            </option>
          </select>

          {/* Specialisations dropdown */}
          <select
            value=""
            onChange={handleSpecialisationChange}
            className="w-60 border border-gray-300 rounded-lg p-2 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100 text-center"
          >
            <option value="" disabled>
              Select Specialisation
            </option>
            <option value="reactjs" className="text-black">
              ReactJs
            </option>
            <option value="html/css" className="text-black">
              Html/Css
            </option>
            <option value="java" className="text-black">
              Java
            </option>
            <option value="django" className="text-black">
              Django
            </option>
            <option value="python" className="text-black">
              Python
            </option>
          </select>

          {/* Search button */}
          <button
            onClick={() => handleSearch()}
            className="bg-[#FFF7ED] text-[#FF6602] border border-[#FF6602] px-6 py-2 rounded-lg hover:bg-[#FFEBD9] transition-shadow shadow-md hover:shadow-lg"
          >
            Search
          </button>
        </div>

        {/* Display tags */}
        <div className="flex flex-wrap gap-2">
          {location && (
            <span className="bg-[#FF6602] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {formattingKeyword(location)}
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
              {formattingKeyword(topic)}
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
              {formattingKeyword(spec)}
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

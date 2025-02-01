import React, { useState, useEffect } from "react";
import { fetchPortfolios } from "../api/get-project"; // Import API function
import Search from "../components/Search";
import SpeakerCard from "../components/SpeakerCard";
import { useSearchParams } from "react-router-dom"; // For reading URL params

const SearchPage = () => {
  const [portfolios, setPortfolios] = useState([]); // Stores fetched data
  const [visibleSpeakers, setVisibleSpeakers] = useState(8);
  const [searchParams] = useSearchParams();

  // Fetch data from backend when page loads
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPortfolios();
      setPortfolios(data);
    };
    loadData();
  }, []);

  console.log("Fetched Portfolios:", portfolios); // Debugging purpose

  // Extract filters from the URL query parameters
  const selectedLocation = searchParams.get("location") || "";
  const selectedTopics = searchParams.getAll("topics");
  const selectedSpecialisations = searchParams.getAll("specialisations");

  // Filtering logic based on user selection
  // const filteredSpeakers = portfolios.filter((speaker) => {
  //   const matchesLocation = !selectedLocation || speaker.location === selectedLocation;
  //   const matchesTopics = selectedTopics.length === 0 || selectedTopics.some((topic) => speaker.tags.includes(topic));
  //   const matchesSpecialisations = selectedSpecialisations.length === 0 || selectedSpecialisations.some((spec) => speaker.tags.includes(spec));
  //   return matchesLocation && matchesTopics && matchesSpecialisations;
  // });

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-customBlack">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Search Component */}
        <Search />

        {/* Display Portfolio Data as Speaker Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
          {portfolios.slice(0, visibleSpeakers).map((portfolio) => (
            <SpeakerCard
              id={portfolio.id}
              key={portfolio.id}
              name={`${portfolio.first_name} ${portfolio.last_name}`}
              role={portfolio.occupation || "N/A"}
              location={portfolio.location}
              tags={portfolio.specialisations || []}
              image={portfolio.photo || "default-profile-image.png"} // Ensure default image
            />
          ))}
        </div>

        {/* Load More */}
        {visibleSpeakers < portfolios.length && (
          <div className="mt-10 text-center">
            <span
              onClick={() => setVisibleSpeakers((prev) => prev + 8)}
              className="text-gray-500 cursor-pointer text-sm font-medium transition-all hover:text-[#D45A00] active:text-[#A04000]"
            >
              Show More Profiles
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

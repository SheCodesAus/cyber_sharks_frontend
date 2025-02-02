import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import SpeakerCard from "../components/SpeakerCard";
import { useSearchParams } from "react-router-dom"; // For reading URL params

const SearchPage = () => {
  const [portfolios, setPortfolios] = useState([]); // Stores fetched data
  const [visibleSpeakers, setVisibleSpeakers] = useState(8);
  const [searchParams] = useSearchParams();
  const [filteredPortfolios, setFilterdPortfolio] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const displayPortfolios =
    filteredPortfolios !== null ? filteredPortfolios : portfolios;

  console.log(displayPortfolios);
  return (
    <div className="min-h-screen bg-[#FFFDFC] text-customBlack">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Search Component */}
        <Search
          setFilterdPortfolio={setFilterdPortfolio}
          setErrorMessage={setErrorMessage}
        />

        {/* Display Portfolio Data as Speaker Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
          {displayPortfolios.length > 0 ? (
            displayPortfolios
              .slice(0, visibleSpeakers)
              .map((portfolio, index) => (
                <SpeakerCard
                  id={portfolio.id}
                  key={portfolio.id}
                  name={`${portfolio.first_name} ${portfolio.last_name}`}
                  role={portfolio.occupation || "N/A"}
                  location={portfolio.location}
                  tags={portfolio.specialisations || []}
                  image={portfolio.photo || "default-profile-image.png"}
                />
              ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              {errorMessage}
            </p>
          )}
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

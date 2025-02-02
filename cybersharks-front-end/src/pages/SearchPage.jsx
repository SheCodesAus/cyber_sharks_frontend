import React, { useState, useEffect } from "react";
import { fetchPortfolios } from "../api/get-project";
import Search from "../components/Search";
import SpeakerCard from "../components/SpeakerCard";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [visibleSpeakers, setVisibleSpeakers] = useState(8);
  const [searchParams] = useSearchParams();
  const [filteredPortfolios, setFilterdPortfolio] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(errorMessage);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPortfolios();
        setPortfolios(data);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  console.log(portfolios);
  console.log(filteredPortfolios);

  const displayPortfolios =
    filteredPortfolios.length > 0
      ? portfolios.filter((portfolio) =>
          filteredPortfolios.some((filtered) => filtered.id === portfolio.id)
        )
      : portfolios;

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-customBlack">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Search Component */}
        <Search
          setFilterdPortfolio={setFilterdPortfolio}
          setErrorMessage={setErrorMessage}
        />

        {/* 로딩 중일 때 표시 */}
        {isLoading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
            {filteredPortfolios.length > 0 ? (
              displayPortfolios
                .slice(0, visibleSpeakers)
                .map((portfolio) => (
                  <SpeakerCard
                    id={portfolio.id}
                    key={portfolio.id}
                    name={`${portfolio.first_name} ${portfolio.last_name}`}
                    role={portfolio.occupation || "N/A"}
                    location={portfolio.location}
                    tags={portfolio.specialisations || []}
                    image={portfolio.photo}
                  />
                ))
            ) : errorMessage ? (
              <p className="text-center text-gray-500 col-span-full">
                {errorMessage}
              </p>
            ) : (
              portfolios
                .slice(0, visibleSpeakers)
                .map((portfolio) => (
                  <SpeakerCard
                    id={portfolio.id}
                    key={portfolio.id}
                    name={`${portfolio.first_name} ${portfolio.last_name}`}
                    role={portfolio.occupation || "N/A"}
                    location={portfolio.location}
                    tags={portfolio.specialisations || []}
                    image={portfolio.photo}
                  />
                ))
            )}
          </div>
        )}

        {visibleSpeakers < portfolios.length && !isLoading && (
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

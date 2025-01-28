import React from "react";
import Search from "../components/Search";

const SearchPage = () => {
  return (
    <div className="bg-[#1a1a1a] text-[#FFFEFD] min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar at the Top */}
        <Search />

        {/* Placeholder for Results */}
        <div className="mt-12">
          <h2 className="text-3xl font-serif mb-4">Search Results</h2>
          <p className="text-gray-400">Results will be displayed here...</p>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

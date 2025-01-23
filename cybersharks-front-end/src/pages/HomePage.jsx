import React from 'react';
import Search from '../components/Search';
import AdvancedSearch from '../components/AdvancedSearch';
import IntroSection from "../components/homepage/IntroSection";
import StatsSection from "../components/homepage/StatsSection";
import FeaturedSpeakers from "../components/homepage/FeaturedSpeakers";
import MissionStatement from "../components/homepage/MissionStatement";

function HomePage() {
  return (
    <div className="min-h-screen bg-customWhite text-customBlack">
      {/* <NavBar /> */}
      <div className="pt-16">
        {/* Add padding to prevent overlap with the fixed NavBar */}
        <IntroSection />
        <StatsSection />
        <FeaturedSpeakers />
        <MissionStatement />
      </div>
      <div className="mt-8">
        <Search />
      </div>
      <div className="mt-8">
        <AdvancedSearch />
      </div>
    </div>
  );
}

export default HomePage;
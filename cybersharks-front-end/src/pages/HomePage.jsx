import React from "react";
import Search from "../components/Search";
import AdvancedSearch from "../components/AdvancedSearch";
import IntroSection from "../components/homepage/IntroSection";
import StatsSection from "../components/homepage/StatsSection";
import FeaturedSpeakers from "../components/homepage/FeaturedSpeakers";
import MissionStatement from "../components/homepage/MissionStatement";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-customWhite text-customBlack">
      <main className="pt-16">
        <IntroSection />

        <FeaturedSpeakers />
        <StatsSection />
        <MissionStatement />
      </main>
    </div>
  );
}

export default HomePage;

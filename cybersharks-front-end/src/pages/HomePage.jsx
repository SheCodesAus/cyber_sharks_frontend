import NavBar from "../components/NavBar";
import IntroSection from "../components/homepage/IntroSection";
import StatsSection from "../components/homepage/StatsSection";
import FeaturedSpeakers from "../components/homepage/FeaturedSpeakers";
import MissionStatement from "../components/homepage/MissionStatement";

function HomePage() {
  return (
    <div className="min-h-screen bg-customWhite text-customBlack">
      <NavBar />
      <div className="pt-16">
        {" "}
        {/* Add padding to prevent overlap with the fixed NavBar */}
        <IntroSection />
        <StatsSection />
        <FeaturedSpeakers />
        <MissionStatement />
      </div>
    </div>
  );
}

export default HomePage;

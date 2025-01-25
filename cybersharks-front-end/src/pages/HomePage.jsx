import NavBar from "../components/NavBar";
import IntroSection from "../components/homepage/IntroSection";
import StatsSection from "../components/homepage/StatsSection";
import FeaturedSpeakers from "../components/homepage/FeaturedSpeakers";
import MissionStatement from "../components/homepage/MissionStatement";
import Footer from "../components/Footer";

// function HomePage() {
//   return (
//     <div className="min-h-screen bg-customWhite text-customBlack">
//       <NavBar />
//       <div className="pt-16">
//         {" "}
//         <IntroSection />
//         <StatsSection />
//         <FeaturedSpeakers />
//         <MissionStatement />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default HomePage;

function HomePage() {
  return (
    <div className="min-h-screen bg-customWhite text-customBlack">
      <NavBar />
      <main className="pt-16">
        <IntroSection />

        <FeaturedSpeakers />
        <StatsSection />
        <MissionStatement />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;

import React, { useState } from "react";
import Search from "../components/Search";
import SpeakerCard from "../components/SpeakerCard";

const allSpeakers = [
  {
    id: 1,
    name: "Rebecca Smith",
    role: "Senior Developer",
    location: "Brisbane",
    tags: ["React", "Cloud", "Leadership"],
  },
  {
    id: 2,
    name: "Hanayra Olu",
    role: "Software Engineer",
    location: "Sydney",
    tags: ["Python", "AI", "Scrum"],
  },
  {
    id: 3,
    name: "Julia Lavoie",
    role: "Tech Lead",
    location: "Melbourne",
    tags: ["JavaScript", "Node.js", "Public Speaking"],
  },
  {
    id: 4,
    name: "Salma Khan",
    role: "Engineer",
    location: "Adelaide",
    tags: ["CSS", "Web", "Mentorship"],
  },
  {
    id: 5,
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 6,
    name: "Cuca Silva",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 7,
    name: "Ally Gator",
    role: "CEO",
    location: "Perth",
    tags: ["Design", "UX", "Candles"],
  },
  {
    id: 8,
    name: "Lucy Moreira",
    role: "Data Scientist",
    location: "Melbourne",
    tags: ["Python", "Machine Learning", "Data Science"],
  },
  {
    id: 9,
    name: "Cuca Silva",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 10,
    name: "Ally Gator",
    role: "CEO",
    location: "Perth",
    tags: ["Design", "UX", "Candles"],
  },
  {
    id: 11,
    name: "Lucy Moreira",
    role: "Data Scientist",
    location: "Melbourne",
    tags: ["Python", "Machine Learning", "Data Science"],
  },
  {
    id: 12,
    name: "Ally Gator",
    role: "CEO",
    location: "Perth",
    tags: ["Design", "UX", "Candles"],
  },
];

// state to store selected filters
const SearchPage = () => {
  const [visibleSpeakers, setVisibleSpeakers] = useState(8);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSpecialisations, setSelectedSpecialisations] = useState([]);

  const handleLoadMore = () => {
    setVisibleSpeakers((prev) => prev + 8);
  };

  // function to update filters when user selects in the search bar
  const handleSearch = (location, topics, specialisations) => {
    setSelectedLocation(location);
    setSelectedTopics(topics);
    setSelectedSpecialisations(specialisations);
  };

  // filtering logic
  const filteredSpeakers = allSpeakers.filter((speaker) => {
    const matchesLocation =
      !selectedLocation || speaker.location === selectedLocation;
    const matchesTopics =
      selectedTopics.length === 0 ||
      selectedTopics.some((topic) => speaker.tags.includes(topic));
    const matchesSpecialisations =
      selectedSpecialisations.length === 0 ||
      selectedSpecialisations.some((spec) => speaker.tags.includes(spec));

    return matchesLocation && matchesTopics && matchesSpecialisations;
  });

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-customBlack">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* pass `handleSearch` to Search */}
        <Search onSearch={handleSearch} />

        {/* display Filtered Speaker Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
          {filteredSpeakers.slice(0, visibleSpeakers).map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>

        {/* load More */}
        {visibleSpeakers < filteredSpeakers.length && (
          <div className="mt-10 text-center">
            <span
              onClick={handleLoadMore}
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

import React, { useState } from "react";
import SpeakerCard from "../../components/SpeakerCard";

const speakers = [
  {
    id: 1,
    name: "Tech Leader 1",
    role: "Senior Developer",
    location: "Brisbane",
    tags: ["React", "Cloud"],
  },
  {
    id: 2,
    name: "Tech Leader 2",
    role: "Software Engineer",
    location: "Sydney",
    tags: ["Python", "AI"],
  },
  {
    id: 3,
    name: "Tech Leader 3",
    role: "Tech Lead",
    location: "Melbourne",
    tags: ["JavaScript", "Node.js"],
  },
  {
    id: 4,
    name: "Tech Leader 4",
    role: "Engineer",
    location: "Adelaide",
    tags: ["CSS", "Web"],
  },
  {
    id: 5,
    name: "Tech Leader 5",
    role: "Architect",
    location: "Perth",
    tags: ["AWS", "DevOps"],
  },
];

const FeaturedSpeakers = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleSpeakers = speakers.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % speakers.length);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-customBlack mb-8">
        Featured Speakers
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center w-20 h-10 text-customBlack border border-accent1 rounded-full hover:bg-accent1 hover:text-customWhite transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeaturedSpeakers;

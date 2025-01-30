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
    name: "Ana Costa",
    role: "Full Stack Developer",
    location: "Sydney",
    tags: ["React", "Django", "PostgreSQL"],
  },
  {
    id: 10,
    name: "Abbyana Kuo",
    role: "Frontend Engineer",
    location: "Brisbane",
    tags: ["Vue.js", "Tailwind", "UI/UX"],
  },
  {
    id: 11,
    name: "Emma Wong",
    role: "Product Manager",
    location: "Melbourne",
    tags: ["Agile", "Scrum", "Leadership"],
  },
  {
    id: 12,
    name: "Nathaly Ford",
    role: "DevOps Engineer",
    location: "Sydney",
    tags: ["AWS", "Kubernetes", "Docker"],
  },
  {
    id: 13,
    name: "Ravish Patel",
    role: "Backend Developer",
    location: "Brisbane",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 14,
    name: "Sarah Lee",
    role: "Security Engineer",
    location: "Melbourne",
    tags: ["Cybersecurity", "Ethical Hacking", "Cloud Security"],
  },
  {
    id: 15,
    name: "Isabella Torres",
    role: "Tech Writer",
    location: "Adelaide",
    tags: ["Technical Writing", "Docs", "Content Strategy"],
  },
  {
    id: 16,
    name: "Aisha Khan",
    role: "Software Engineer",
    location: "Sydney",
    tags: ["Angular", "TypeScript", "Firebase"],
  },
  {
    id: 17,
    name: "Danielle Kim",
    role: "AI Engineer",
    location: "Brisbane",
    tags: ["TensorFlow", "AI", "Data Science"],
  },
  {
    id: 18,
    name: "Leila Adebayo",
    role: "QA Engineer",
    location: "Perth",
    tags: ["Testing", "Automation", "Cypress"],
  },
  {
    id: 19,
    name: "Claudia Schiffer",
    role: "QA Engineer",
    location: "Perth",
    tags: ["Testing", "Automation", "Cypress"],
  },
  {
    id: 20,
    name: "Samantha Fox",
    role: "QA Engineer",
    location: "Perth",
    tags: ["Testing", "Automation", "Cypress"],
  },
];

const SearchPage = () => {
  const [visibleSpeakers, setVisibleSpeakers] = useState(8); // Start with 12 profiles

  const handleLoadMore = () => {
    setVisibleSpeakers((prev) => prev + 8); // Load 6 more profiles each time
  };

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-customBlack">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Search />

        {/* Speaker Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
          {allSpeakers.slice(0, visibleSpeakers).map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>

        {/* Load More */}
        {visibleSpeakers < allSpeakers.length && (
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

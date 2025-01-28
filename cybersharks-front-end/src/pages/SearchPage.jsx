// import React from "react";
// import Search from "../components/Search";

// const SearchPage = () => {
//   return (
//     <div className="bg-[#1a1a1a] text-[#FFFEFD] min-h-screen pt-32 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Search Bar at the Top */}
//         <Search />

//         {/* Results */}
//         <div className="mt-12">
//           <h2 className="text-3xl font-serif mb-4">Search Results</h2>
//           <p className="text-gray-400">Results will be displayed here...</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchPage;

// import React from "react";
// import Search from "../components/Search";
// import SpeakerCard from "../components/SpeakerCard";

// const SearchPage = () => {
//   return (
//     <div className="min-h-screen bg-[#FFFDFC] text-customBlack">
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <Search />
//         <SpeakerCard />
//       </div>
//     </div>
//   );
// };

// export default SearchPage;

import React from "react";
import Search from "../components/Search";
import SpeakerCard from "../components/SpeakerCard";

const speakers = [
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
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 8,
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
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
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 11,
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 12,
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 13,
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 14,
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 15,
    name: "Sofia Nabuco",
    role: "UX Designer",
    location: "Brisbane",
    tags: ["Design", "UX", "Figma"],
  },
  {
    id: 15,
    name: "Ally Gator",
    role: "CEO",
    location: "Perth",
    tags: ["Design", "UX", "Candles"],
  },
];

const SearchPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFDFC] text-customBlack">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Search />

        {/* Speaker Cards Display */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

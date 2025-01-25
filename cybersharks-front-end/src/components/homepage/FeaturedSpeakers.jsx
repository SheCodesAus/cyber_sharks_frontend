// import React from "react";
// import Slider from "react-slick";
// import SpeakerCard from "../../components/SpeakerCard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const speakers = [
//   {
//     id: 1,
//     name: "Tech Leader 1",
//     role: "Senior Developer",
//     location: "Brisbane",
//     tags: ["React", "Cloud"],
//   },
//   {
//     id: 2,
//     name: "Tech Leader 2",
//     role: "Software Engineer",
//     location: "Sydney",
//     tags: ["Python", "AI"],
//   },
//   {
//     id: 3,
//     name: "Tech Leader 3",
//     role: "Tech Lead",
//     location: "Melbourne",
//     tags: ["JavaScript", "Node.js"],
//   },
//   {
//     id: 4,
//     name: "Tech Leader 4",
//     role: "Engineer",
//     location: "Adelaide",
//     tags: ["CSS", "Web"],
//   },
// ];

// const FeaturedSpeakers = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//     className: "gap-4 pb-12",
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16">
//       <h2 className="text-2xl font-bold text-customBlack mb-8">
//         Featured Speakers
//       </h2>
//       <div className="relative">
//         <style jsx>{`
//           .slick-prev:before,
//           .slick-next:before {
//             color: black;
//           }
//           .slick-dots {
//             bottom: -40px;
//           }
//         `}</style>
//         <Slider {...settings}>
//           {speakers.map((speaker, index) => (
//             <div key={index} className="px-2 pb-4">
//               <div className="card bg-base-100 shadow-xl mx-2">
//                 <SpeakerCard {...speaker} />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default FeaturedSpeakers;

import React from "react";
import Slider from "react-slick";
import SpeakerCard from "../../components/SpeakerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
];

const FeaturedSpeakers = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    className: "gap-4 pb-12",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-customBlack mb-8">
        Featured Speakers
      </h2>
      <div className="relative">
        <style jsx>{`
          .slick-prev:before,
          .slick-next:before {
            color: black;
          }
          .slick-dots {
            bottom: -40px;
          }
        `}</style>
        <Slider {...settings}>
          {speakers.map((speaker, index) => (
            <div key={index} className="px-2">
              {/* Card Wrapper */}
              <div className="w-72 mx-auto">
                <SpeakerCard {...speaker} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedSpeakers;

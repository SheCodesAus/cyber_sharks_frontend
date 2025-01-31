import React from "react";
import Slider from "react-slick";
import SpeakerCard from "../../components/SpeakerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
];

const FeaturedSpeakers = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-serif font-bold mb-12 text-customBlack">
        Featured Speakers
      </h2>

      <div className="relative overflow-visible">
        <style>{`
          .slick-prev:before,
          .slick-next:before {
            color: black;
          }
          .slick-dots {
            bottom: -20px;
          }
        `}</style>
        <Slider {...settings}>
          {speakers.map((speaker, index) => (
            // <div key={index} className="px-2">
            <div key={index} className="px-4 pb-8">
              <div className="card bg-base-100 shadow-xl mx-2 h-full">
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

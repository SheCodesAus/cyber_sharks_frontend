// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import SpeakerCard from "../../components/SpeakerCard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const FeaturedSpeakers = () => {
//   const [speakers, setSpeakers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch speakers from the backend
//   useEffect(() => {
//     const fetchSpeakers = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/portfolios/`
//         );
//         if (!response.ok) throw new Error("Failed to fetch speakers");

//         const data = await response.json();
//         setSpeakers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSpeakers();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 6000,
//     autoplaySpeed: 6000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//     className: "gap-4 pb-12",
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-20">
//       <h2 className="text-4xl font-serif font-bold mb-12 text-customBlack">
//         Featured Speakers
//       </h2>

//       {loading && <p className="text-center">Loading speakers...</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {!loading && !error && speakers.length === 0 && (
//         <p className="text-center text-gray-500">No speakers available.</p>
//       )}

//       {!loading && !error && speakers.length > 0 && (
//         <div className="relative overflow-visible">
//           <style>{`
//             .slick-prev:before,
//             .slick-next:before {
//               color: black;
//             }
//             .slick-dots {
//               bottom: -20px;
//             }
//           `}</style>
//           <Slider {...settings}>
//             {speakers.slice(0, 8).map((speaker) => (
//               <div key={speaker.id} className="px-4 pb-8">
//                 <div className="card bg-base-100 shadow-xl mx-2 h-full">
//                   <SpeakerCard
//                     id={speaker.id}
//                     name={`${speaker.first_name} ${speaker.last_name}`}
//                     role={speaker.occupation || "Unknown Role"}
//                     location={speaker.location || "Unknown Location"}
//                     tags={speaker.specialisations || []}
//                     // image={
//                     //   speaker.photo ||
//                     //   "../../../public/default-profile-image.png"
//                     // }
//                   />
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeaturedSpeakers;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SpeakerCard from "../../components/SpeakerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch speakers from the backend
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/portfolios/`
        );
        if (!response.ok) throw new Error("Failed to fetch speakers");

        const data = await response.json();
        console.log("Fetched Speakers (Full Data):", data); // 🔥 Debugging
        setSpeakers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    className: "gap-4 pb-12",
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-serif font-bold mb-12 text-customBlack">
        Featured Speakers
      </h2>

      {loading && <p className="text-center">Loading speakers...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && speakers.length === 0 && (
        <p className="text-center text-gray-500">No speakers available.</p>
      )}

      {!loading && !error && speakers.length > 0 && (
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
            {speakers.slice(0, 8).map((speaker) => (
              <div key={speaker.id} className="px-4 pb-8">
                <div className="card bg-base-100 shadow-xl mx-2 h-full">
                  <SpeakerCard
                    id={speaker.id}
                    key={speaker.id}
                    name={`${speaker.first_name} ${speaker.last_name}`}
                    role={speaker.occupation || "Unknown Role"}
                    location={speaker.location || "Unknown Location"}
                    tags={speaker.specialisations || []}
                    image={
                      speaker.photo
                        ? speaker.photo
                        : "/default-profile-image.png"
                    } // Ensure image is passed
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default FeaturedSpeakers;

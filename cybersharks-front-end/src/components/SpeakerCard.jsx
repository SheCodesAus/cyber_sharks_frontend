// function SpeakerCard({ name, role, location, tags, image }) {
//   const placeholderImage = "https://via.placeholder.com/150";

//   return (
//     <div className="p-4 bg-gray-100 text-black rounded-lg shadow-lg flex flex-col items-center">
//       {/* Speaker Image */}
//       <img
//         src={image || placeholderImage}
//         alt={name}
//         className="rounded-full w-24 h-24 object-cover border-4 border-customWhite shadow-lg mb-4"
//       />

//       {/* Speaker Details */}
//       <h3 className="text-lg font-cormorant font-bold">{name}</h3>
//       <p className="text-sm text-gray-600 mb-4">
//         {role} - {location}
//       </p>

//       {/* Tags */}
//       <div className="flex gap-2 flex-wrap justify-center">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-accent3 text-white text-xs px-2 py-1 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SpeakerCard;

// function SpeakerCard({ name, role, location, tags, image }) {
//   const placeholderImage = "https://via.placeholder.com/400x200"; // Placeholder image

//   return (
//     <div className="card bg-white text-black rounded-lg shadow-lg overflow-hidden">
//       {/* Image Section */}
//       <img
//         src={image || placeholderImage}
//         alt={name}
//         className="w-full h-48 object-cover"
//       />

//       {/* Content Section */}
//       <div className="p-4">
//         {/* Speaker Details */}
//         <h3 className="text-lg font-semibold mb-2">{name}</h3>
//         <p className="text-sm text-gray-600 mb-4">
//           {role} - {location}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-accent3 text-white text-xs px-3 py-1 rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SpeakerCard;

const SpeakerCard = ({ name, role, location, tags }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      {/* Image Placeholder */}
      <div className="h-40 bg-gray-200 flex justify-center items-center">
        <p className="text-gray-400 text-sm">Image Placeholder</p>
      </div>
      {/* Speaker Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">
          {role} - {location}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent1 text-white px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;

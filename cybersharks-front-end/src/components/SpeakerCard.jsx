// import { Link } from "react-router-dom";

// const SpeakerCard = ({ id, name, role, location, tags }) => {
//   return (
//     <Link to={`/portfolio/${id}`} className="block">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full h-full">
//         {/* Image Placeholder */}
//         <div className="h-80 bg-gray-200 flex justify-center items-center">
//           <p className="text-gray-400 text-sm">Image Placeholder</p>
//         </div>
//         {/* Speaker Info */}
//         <div className="p-4 h-40 flex flex-col justify-between">
//           <div>
//             <h3 className="text-lg font-bold truncate">{name}</h3>
//             <p className="text-sm text-gray-600 truncate">
//               {role} - {location}
//             </p>
//           </div>
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mt-3">
//             {tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium truncate"
//                 style={{ maxWidth: "100px" }}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default SpeakerCard;

import { Link } from "react-router-dom";

const SpeakerCard = ({ id, name, role, location, tags, image }) => {
  console.log(`Rendering SpeakerCard: ${name}, Image: ${image}`); // Debugging

  return (
    <div className="shadow-lg rounded-lg p-6 bg-white">
      <img
        src={image && image !== "null" ? image : "/default-profile-image.png"} // Handle null/missing images
        alt={name}
        className="h-[250px] w-[250px] object-cover rounded-lg mx-auto"
      />
      <h3 className="text-lg font-semibold mt-4">{name}</h3>
      <p className="text-gray-500">
        {role} - {location}
      </p>
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-accentbg text-accent1 px-2 py-1 rounded-lg text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SpeakerCard;

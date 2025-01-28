// const SpeakerCard = ({ name, role, location, tags }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
//       {/* Image Placeholder */}
//       <div className="h-40 bg-gray-200 flex justify-center items-center">
//         <p className="text-gray-400 text-sm">Image Placeholder</p>
//       </div>
//       {/* Speaker Info */}
//       <div className="p-4">
//         <h3 className="text-lg font-bold">{name}</h3>
//         <p className="text-sm text-gray-600">
//           {role} - {location}
//         </p>
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mt-3">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-accent1 text-white px-3 py-1 rounded-full text-xs"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpeakerCard;

// const SpeakerCard = ({ name, role, location, tags }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-64">
//       {/* Image Placeholder */}
//       <div className="h-60 bg-gray-200 flex justify-center items-center">
//         <p className="text-gray-400 text-sm">Image Placeholder</p>
//       </div>
//       {/* Speaker Info */}
//       <div className="p-4">
//         <h3 className="text-lg font-bold">{name}</h3>
//         <p className="text-sm text-gray-600">
//           {role} - {location}
//         </p>
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mt-3">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-accent1 text-white px-3 py-1 rounded-full text-xs"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpeakerCard;

// const SpeakerCard = ({ name, role, location, tags }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full">
//       {/* Image Placeholder */}
//       <div className="h-80 bg-gray-200 flex justify-center items-center">
//         <p className="text-gray-400 text-sm">Image Placeholder</p>
//       </div>
//       {/* Speaker Info */}
//       <div className="p-4">
//         <h3 className="text-lg font-bold">{name}</h3>
//         <p className="text-sm text-gray-600">
//           {role} - {location}
//         </p>
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mt-3">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpeakerCard;

const SpeakerCard = ({ name, role, location, tags }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full h-full">
      {/* Image Placeholder */}
      <div className="h-80 bg-gray-200 flex justify-center items-center">
        <p className="text-gray-400 text-sm">Image Placeholder</p>
      </div>
      {/* Speaker Info */}
      <div className="p-4 h-40 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold truncate">{name}</h3>
          <p className="text-sm text-gray-600 truncate">
            {role} - {location}
          </p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium truncate"
              style={{ maxWidth: "100px" }}
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

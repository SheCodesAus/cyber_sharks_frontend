// const StatsCard = ({ percentage, description }) => {
//   return (
//     <div className="text-center">
//       <h2 className="text-5xl font-bold text-accent1 mb-4">{percentage}</h2>
//       <p className="text-customWhite">{description}</p>
//     </div>
//   );
// };

// export default StatsCard;

// const StatsCard = ({ percentage, description }) => {
//   return (
//     <div className="text-center">
//       <h2 className="text-5xl font-bold text-white mb-4">{percentage}</h2>
//       <p className="text-white">{description}</p>
//     </div>
//   );
// };

// export default StatsCard;

// const StatsCard = ({ percentage, description }) => {
//   return (
//     <div className="text-center py-20">
//       <h2 className="text-5xl font-bold text-white mb-4">{percentage}</h2>
//       <p className="text-white">{description}</p>
//     </div>
//   );
// };

// export default StatsCard;

// const StatsCard = ({ percentage, description }) => {
//   return (
//     <div className="text-left">
//       <h3
//         className="text-6xl font-bold mb-4"
//         style={{ color: "#E67E22" }} // Soft orange color for the numbers
//       >
//         {percentage}
//       </h3>
//       <p className="text-lg leading-relaxed">{description}</p>
//     </div>
//   );
// };

// export default StatsCard;

// const StatsCard = ({ percentage, description }) => {
//   return (
//     <div className="text-left">
//       <div className="flex items-baseline gap-1">
//         <span className="text-6xl font-bold text-accent3">{percentage}</span>
//         <span className="text-3xl font-bold text-accent3">%</span>
//       </div>
//       <p className="text-lg mt-4">{description}</p>
//     </div>
//   );
// };

// export default StatsCard;

const StatsCard = ({ percentage, description }) => {
  return (
    <div className="text-left">
      <div className="flex items-baseline gap-1">
        <span className="text-6xl font-bold text-[#FFFEFD]">{percentage}</span>
        <span className="text-3xl font-bold text-[#FF6602]">%</span>
      </div>
      <p className="text-lg mt-4">{description}</p>
    </div>
  );
};

export default StatsCard;

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

const StatsCard = ({ percentage, description }) => {
  return (
    <div className="text-center py-20">
      <h2 className="text-5xl font-bold text-white mb-4">{percentage}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default StatsCard;

// import StatsCard from "../StatsCard";

// const StatsSection = () => {
//   const stats = [
//     {
//       percentage: "93%",
//       description: "we are the sharkies and we love data",
//     },
//     {
//       percentage: "85%",
//       description: "data is the queen data is the queen data is the queen",
//     },
//     {
//       percentage: "78%",
//       description: "yes yes yes we love data",
//     },
//   ];

//   return (
//     <section className="bg-black py-16">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {stats.map((stat, index) => (
//           <StatsCard
//             key={index}
//             percentage={stat.percentage}
//             description={stat.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

// import StatsCard from "../StatsCard";

// const StatsSection = () => {
//   const stats = [
//     {
//       percentage: "93%",
//       description:
//         "of event organizers found their ideal speakers through our platform.",
//     },
//     {
//       percentage: "85%",
//       description: "of speakers received new opportunities within 3 months.",
//     },
//     {
//       percentage: "78%",
//       description: "increase in diverse representation at tech events.",
//     },
//   ];

//   return (
//     <section className="bg-black py-12">
//       <div className="w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//         {stats.map((stat, index) => (
//           <StatsCard
//             key={index}
//             percentage={stat.percentage}
//             description={stat.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import StatsCard from "../StatsCard";

const StatsSection = () => {
  const stats = [
    {
      percentage: "93%",
      description:
        "of event organizers found their ideal speakers through our platform.",
    },
    {
      percentage: "85%",
      description: "of speakers received new opportunities within 3 months.",
    },
    {
      percentage: "78%",
      description: "increase in diverse representation at tech events.",
    },
  ];

  return (
    <section className="bg-[#1a1a1a] text-[#FFFEFD]py-16">
      {" "}
      {/* Increased padding-y from py-12 to py-16 */}
      <div className="w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            percentage={stat.percentage}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

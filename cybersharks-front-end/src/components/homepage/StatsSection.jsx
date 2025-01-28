import StatsCard from "../StatsCard";

const StatsSection = () => {
  const stats = [
    {
      percentage: "93",
      description:
        "of event organizers found their ideal speakers through our platform.",
    },
    {
      percentage: "85",
      description: "of speakers received new opportunities within 3 months.",
    },
    {
      percentage: "78",
      description: "increase in diverse representation at tech events.",
    },
  ];

  return (
    <section
      id="stats-section"
      className="bg-[#1a1a1a] text-[#FFFEFD] py-20 pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        <div className="md:w-1/3 flex items-center">
          <h2 className="text-4xl font-serif font-bold leading-tight mt-8 md:mt-14">
            The Current Scenario
          </h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              percentage={stat.percentage}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

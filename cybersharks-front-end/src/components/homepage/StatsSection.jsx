import StatsCard from "../../components/StatsCard";

const StatsSection = () => {
  const stats = [
    {
      percentage: "93%",
      description: "we are the sharkies and we love data",
    },
    {
      percentage: "85%",
      description: "data is the queen data is the queen data is the queen",
    },
    {
      percentage: "78%",
      description: "yes yes yes we love data",
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
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

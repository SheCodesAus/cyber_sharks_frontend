import StatsCard from "../StatsCard";

const StatsSection = () => {
  const stats = [
    {
      percentage: "29",
      symbol: "%",
      description: (
        <>
          of the Australian ICT workforce is made up of women, highlighting a
          significant gender disparity in the tech industry.
          <br />
          <small>
            <a
              href="https://www.manpowergroup.com.au/blog/2023/09/empowering-female-talent-in-the-australian-it-sector"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6602] hover:text-[#FF8533]"
            >
              Source: ManpowerGroup Australia
            </a>
          </small>
        </>
      ),
    },
    {
      percentage: "25",
      symbol: "%",
      description: (
        <>
          of Year 12 enrolments in IT, physics, and engineering are girls,
          indicating early-stage gender imbalances in STEM education.
          <br />
          <small>
            <a
              href="https://www.industry.gov.au/news/state-stem-gender-equity-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6602] hover:text-[#FF8533]"
            >
              Source: Australian Government
            </a>
          </small>
        </>
      ),
    },
    {
      percentage: "11B",
      symbol: "$",
      description: (
        <>
          in economic growth could be added by increasing gender diversity in
          tech.
          <br />
          <small>
            <a
              href="https://cfotech.com.au/story/iwd-2024-bridging-gender-gaps-in-the-tech-sector-and-startups"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6602] hover:text-[#FF8533]"
            >
              Source: CFOtech Australia
            </a>
          </small>
        </>
      ),
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
              symbol={stat.symbol}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

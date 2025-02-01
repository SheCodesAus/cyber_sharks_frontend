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

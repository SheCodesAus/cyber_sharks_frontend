const StatsCard = ({ percentage, description, symbol }) => {
  return (
    <div className="text-left">
      <div className="flex items-baseline gap-1">
        <span className="text-6xl font-bold text-[#FFFEFD]">{percentage}</span>
        {symbol && (
          <span className="text-2xl font-bold text-[#FF6602]">{symbol}</span> // Increased from text-xl to text-2xl
        )}
      </div>
      <p className="text-lg mt-4">{description}</p>
    </div>
  );
};

export default StatsCard;

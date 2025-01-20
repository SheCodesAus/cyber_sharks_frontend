function SpeakerCard({ name, role, location, tags, image }) {
  const placeholderImage = "https://via.placeholder.com/150";

  return (
    <div className="p-4 bg-gray-100 text-black rounded-lg shadow-lg flex flex-col items-center">
      {/* Speaker Image */}
      <img
        src={image || placeholderImage}
        alt={name}
        className="rounded-full w-24 h-24 object-cover border-4 border-customWhite shadow-lg mb-4"
      />

      {/* Speaker Details */}
      <h3 className="text-lg font-cormorant font-bold">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {role} - {location}
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap justify-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-accent3 text-white text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SpeakerCard;

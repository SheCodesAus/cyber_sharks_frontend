import { Link } from "react-router-dom";

const SpeakerCard = ({ id, name, role, location, tags, image }) => {
  console.log(`Rendering SpeakerCard: ID=${id}, Name=${name}, Image=${image}`); // Debugging

  if (!id) return null; // Prevent rendering if ID is missing

  return (
    <Link to={`/portfolio/${id}`} className="block">
      <div className="relative w-[280px] h-[480px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all hover:shadow-xl flex flex-col">
        {/* Full-height Image */}
        <div className="flex-grow">
          <img
            src={
              image && image !== "null" ? image : "/default-profile-image.png"
            } // Handle null images
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* White Info Section - Fixed Height */}
        <div className="bg-white p-4 rounded-b-2xl flex flex-col justify-between min-h-[120px]">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-500">
              {role} - {location}
            </p>
          </div>

          {/* Add space between name/role and tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-accentbg text-accent1 px-3 py-1 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SpeakerCard;

import SpeakerCard from "../../components/SpeakerCard";

function FeaturedSpeakers() {
  const speakers = [
    {
      name: "Tech Leader 1",
      role: "Senior Developer",
      location: "Brisbane",
      tags: ["React", "Cloud"],
      image: "", // Provide an actual image or leave blank for placeholder
    },
    {
      name: "Tech Leader 2",
      role: "Software Engineer",
      location: "Sydney",
      tags: ["Python", "AI"],
      image: "", // Placeholder will show
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-cormorant font-semibold mb-8">
        Featured Speakers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedSpeakers;

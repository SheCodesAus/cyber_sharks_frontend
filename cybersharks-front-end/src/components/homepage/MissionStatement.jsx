import React from "react";

const MissionStatement = () => {
  return (
    <section className="bg-black text-customWhite">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-2xl mb-6">
          We believe tech needs diverse voices and perspectives. That's why we
          work to connect event organizers with inspiring speakers who share
          your path of making your journey unforgettable.
        </p>
        <button className="bg-customBlack text-customWhite px-6 py-2 rounded hover:bg-accent3 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default MissionStatement;

import React from "react";

const MissionStatement = () => {
  return (
    <section className="bg-[#1a1a1a] text-[#FFFEFD]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-4">That's Why</h2>
        <p className="text-lg max-w-2xl mb-6">
          Our mission is to increase the diverse voices and perspectives. That's
          why we work to connect event organizers with inspiring speakers who
          share your path of making your journey unforgettable.
        </p>
        <button className="bg-customBlack text-customWhite px-6 py-2 rounded hover:bg-accent3 transition-colors">
          Find Speakers
        </button>
      </div>
    </section>
  );
};

export default MissionStatement;

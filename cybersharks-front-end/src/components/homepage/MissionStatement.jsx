import React from "react";

function MissionStatement() {
  return (
    <section
      id="mission-statement"
      className="bg-[#1a1a1a] text-[#FFFEFD] py-20 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:w-[80%]">
          <h2 className="text-4xl font-serif font-bold leading-tight mb-4">
            That's{" "}
            <span className="relative">
              Why
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 120 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 8.5C20 2.5 70 2.5 117 8.5"
                  stroke="#FF6602"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="path"
                />
              </svg>
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-11">
            <p className="text-lg leading-relaxed max-w-xl">
              Our mission is to increase the diverse voices and perspectives.
              That's why we work to connect event organizers with inspiring
              speakers who share your path of making your journey unforgettable.
            </p>
            <button className="bg-white text-[#1a1a1a] font-medium rounded-full px-6 py-3 hover:bg-[#FF6602] transition-all ">
              Find Speakers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionStatement;

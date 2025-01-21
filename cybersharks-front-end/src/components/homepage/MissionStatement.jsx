import React from "react";

// const MissionStatement = () => {
//   return (
//     <div className="bg-accent1 text-customWhite p-8 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
//       <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
//       <p>
//         We believe tech needs diverse voices and perspectives. That's why we
//         work to connect event organisers with inspiring speakers who share your
//         path of making your journey unforgettable.
//       </p>
//     </div>
//   );
// };

// export default MissionStatement;

const MissionStatement = () => {
  return (
    <div className="bg-black text-customWhite py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-left">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p>
          We believe tech needs diverse voices and perspectives. That's why we
          work to connect event organizers with inspiring speakers who share
          your path of making your journey unforgettable.
        </p>
        <a
          href="#"
          className="text-sm underline hover:text-accent3 transition-colors mt-4"
        >
          Learn More >
        </a>
      </div>
    </div>
  );
};

export default MissionStatement;

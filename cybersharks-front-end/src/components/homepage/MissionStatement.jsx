import React from 'react';

function MissionStatement() {
  return (
    <div>
      <p>
        Our mission is to inspire and empower individuals to achieve their goals and dreams.
        We believe in the power of community and collaboration.
        {/* Or you can choose the other line if that's what you want */}
        {/* Join us in our journey to make a difference. */}
      </p>
      <a
        href="#"
        className="text-sm underline hover:text-accent3 transition-colors mt-4"
      >
        Learn more
      </a>
    </div>
  );
}

export default MissionStatement;
import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-700 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Open to Remote Full-Time & Contract Roles</h2>
      <div className="space-x-4">
        <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
          Schedule a Call
        </button>
        <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
          Download CV
        </button>
        <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
          Email Me
        </button>
      </div>
    </section>
  );
};

export default CTA;

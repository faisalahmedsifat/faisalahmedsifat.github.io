import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold">Faisal Ahmed Sifat</h1>
      <h2 className="text-2xl mt-2">AI/ML Engineer & Full-Stack Developer</h2>
      <p className="text-lg mt-4">
        Shipping production LLM, CV & SaaS systems | 5+ years engineering | 4 medical AI papers
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Download CV</button>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg">GitHub</button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">Contact</button>
      </div>
    </section>
  );
};

export default Hero;

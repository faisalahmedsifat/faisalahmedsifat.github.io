import React from 'react';

const WhatIDo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Applied AI & LLMs</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Building and deploying large language models</li>
            <li>Computer Vision systems for various applications</li>
            <li>Machine Learning model development and integration</li>
          </ul>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Full-Stack SaaS</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Developing scalable web applications with Next.js</li>
            <li>Designing and implementing robust backend services</li>
            <li>Database management and API development</li>
          </ul>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Deployment & Infra</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>CI/CD pipeline setup and management</li>
            <li>Cloud infrastructure (AWS, GCP) deployment</li>
            <li>Containerization with Docker and orchestration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

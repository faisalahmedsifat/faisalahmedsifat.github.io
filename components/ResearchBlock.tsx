import React from 'react';

const ResearchBlock = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Deployed Medical AI Research</h2>
      <div className="max-w-4xl mx-auto px-4">
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>4 peer-reviewed papers</li>
          <li>2 Q1 journals</li>
          <li>Clinical AI deployment</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Focus Areas:</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>RAG, QLoRA</li>
          <li>Vision Transformers</li>
          <li>3D CNNs</li>
          <li>Explainable AI</li>
        </ul>
        {/* Optional link to Google Scholar */}
        {/* <p className="mt-8 text-center">
          <a href="#" className="text-blue-600 hover:underline">View on Google Scholar</a>
        </p> */}
      </div>
    </section>
  );
};

export default ResearchBlock;

import React from 'react';

const TechStack = () => {
  const techCategories = {
    'AI / ML': ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face', 'OpenAI API'],
    'Backend': ['Node.js', 'Python (FastAPI, Django)', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    'Frontend': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Zustand'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Vercel', 'GitHub Actions'],
  };

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(techCategories).map(([category, technologies]) => (
          <div key={category} className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

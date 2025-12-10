import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Reactor',
      value: 'A real-time AI-powered code generation and refactoring tool.',
      stack: 'Next.js, Python, FastAPI, LLMs',
      status: 'Live' as const,
      image: '/reactor.png',
      detailsLink: '/projects/reactor',
    },
    {
      title: 'Tensorify',
      value: 'A platform for deploying and managing TensorFlow models at scale.',
      stack: 'Next.js, TensorFlow, Kubernetes, AWS',
      status: 'Beta' as const,
      image: '/tensorify.png',
      detailsLink: '/projects/tensorify',
    },
    {
      title: 'Jomidaar',
      value: 'A property management system for landlords and tenants.',
      stack: 'Next.js, Node.js, PostgreSQL, Stripe',
      status: 'Live' as const,
      image: '/jomidaar.png',
      detailsLink: '/projects/jomidaar',
    },
    {
      title: 'flexx.dev',
      value: 'A developer portfolio builder with integrated analytics.',
      stack: 'Next.js, Firebase, Vercel',
      status: 'OSS' as const,
      image: '/flexx.png',
      detailsLink: '/projects/flexx',
    },
    {
      title: '3D AI Segmentation Tool',
      value: 'A medical imaging tool for 3D organ segmentation using deep learning.',
      stack: 'Python, PyTorch, MONAI, Flask',
      status: 'Beta' as const,
      image: '/3d-segmentation.png',
      detailsLink: '/projects/3d-ai-segmentation-tool',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Flagship Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;

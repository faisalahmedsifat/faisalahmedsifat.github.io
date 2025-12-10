import React from 'react';

interface ProjectCardProps {
  title: string;
  value: string;
  stack: string;
  status: 'Live' | 'Beta' | 'OSS';
  image: string;
  detailsLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  value,
  stack,
  status,
  image,
  detailsLink,
}) => {
  return (
    <div className="border rounded-lg shadow-md p-6 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{value}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>Stack: {stack}</span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${status === 'Live' ? 'bg-green-100 text-green-800' : status === 'Beta' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}
        >
          {status}
        </span>
      </div>
      <a href={detailsLink} className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
        View Details
      </a>
    </div>
  );
};

export default ProjectCard;

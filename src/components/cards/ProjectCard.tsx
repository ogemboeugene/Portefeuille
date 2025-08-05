import React from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
  status?: string;
  category?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  features,
  github,
  demo,
  image,
  status,
  category
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Live':
        return 'bg-success-100 text-success-700 border-success-200 dark:bg-success-900/30 dark:text-success-300 dark:border-success-700';
      case 'Beta':
        return 'bg-accent-100 text-accent-700 border-accent-200 dark:bg-accent-900/30 dark:text-accent-300 dark:border-accent-700';
      case 'In Development':
        return 'bg-primary-100 text-primary-700 border-primary-200 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-700';
      case 'Planning':
        return 'bg-secondary-100 text-secondary-700 border-secondary-200 dark:bg-secondary-900/30 dark:text-secondary-300 dark:border-secondary-700';
      default:
        return 'bg-dark-100 text-dark-700 border-dark-200 dark:bg-dark-800 dark:text-dark-300 dark:border-dark-600';
    }
  };

  return (
    <div className="group bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-dark-100 dark:border-dark-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      {/* Project Image */}
      {image && (
        <div className="h-52 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-dark-700 dark:to-dark-600 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
          
          {/* Category and Status badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {category && (
              <span className="px-3 py-1 bg-white/90 dark:bg-dark-800/90 text-dark-700 dark:text-dark-300 text-xs font-medium rounded-full backdrop-blur-sm">
                {category}
              </span>
            )}
            {status && (
              <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border ${getStatusColor(status)}`}>
                <ClockIcon className="h-3 w-3 inline mr-1" />
                {status}
              </span>
            )}
          </div>
        </div>
      )}
      
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                  index % 3 === 0 
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' 
                    : index % 3 === 1 
                    ? 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300'
                    : 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
            Key Features
          </h4>
          <ul className="space-y-2">
            {features.slice(0, 4).map((feature) => (
              <li key={feature} className="text-sm text-dark-600 dark:text-dark-300 flex items-start">
                <span className="text-primary-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                {feature}
              </li>
            ))}
            {features.length > 4 && (
              <li className="text-sm text-dark-500 dark:text-dark-400 italic">
                +{features.length - 4} more features...
              </li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-4 py-2 border-2 border-dark-200 dark:border-dark-600 text-dark-700 dark:text-dark-300 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
            >
              <CodeBracketIcon className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              Live Demo
            </a>
          )}
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

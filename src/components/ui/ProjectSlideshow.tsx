import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  status: string;
  category: string;
  github?: string;
  demo?: string;
}

interface ProjectSlideshowProps {
  projects: Project[];
  autoPlay?: boolean;
  interval?: number;
}

export const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({
  projects,
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, projects.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden">
      {/* Main Slideshow Area */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex"
          >
            {/* Project Image */}
            <div className="w-1/2 relative">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 dark:to-black/40"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  currentProject.status === 'Live' 
                    ? 'bg-success-100 text-success-700 border border-success-200'
                    : currentProject.status === 'Beta'
                    ? 'bg-accent-100 text-accent-700 border border-accent-200'
                    : 'bg-primary-100 text-primary-700 border border-primary-200'
                }`}>
                  {currentProject.status}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-white to-primary-50 dark:from-dark-800 dark:to-dark-700">
              <div className="space-y-6">
                {/* Category */}
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                  {currentProject.category}
                </span>

                {/* Title */}
                <h3 className="text-3xl font-bold text-dark-900 dark:text-white">
                  {currentProject.title}
                </h3>

                {/* Description */}
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-dark-900 dark:text-white">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {currentProject.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 rounded-md">
                        +{currentProject.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {currentProject.demo && (
                    <a
                      href={currentProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-700 rounded-lg font-medium transition-colors duration-200"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-dark-800/80 hover:bg-white dark:hover:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-dark-800/80 hover:bg-white dark:hover:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between p-6 bg-dark-50 dark:bg-dark-900 border-t border-dark-200 dark:border-dark-700">
        {/* Slide Indicators */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 scale-125'
                  : 'bg-dark-300 dark:bg-dark-600 hover:bg-dark-400 dark:hover:bg-dark-500'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause and Counter */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-dark-600 dark:text-dark-400">
            {currentIndex + 1} / {projects.length}
          </span>
          
          <button
            onClick={togglePlayPause}
            className="p-2 bg-primary-100 dark:bg-primary-900/30 hover:bg-primary-200 dark:hover:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-lg transition-colors duration-200"
          >
            {isPlaying ? (
              <PauseIcon className="h-4 w-4" />
            ) : (
              <PlayIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

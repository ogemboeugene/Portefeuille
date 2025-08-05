import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface HorizontalScrollProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  title,
  className = ''
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {title && (
        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          {title}
        </h3>
      )}
      
      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeftIcon className="h-5 w-5 text-dark-700 dark:text-dark-300" />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <ChevronRightIcon className="h-5 w-5 text-dark-700 dark:text-dark-300" />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {children}
        </div>

        {/* Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-dark-900 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-dark-900 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

// Mini Project Card for horizontal scrolling
interface MiniProjectCardProps {
  title: string;
  image: string;
  technologies: string[];
  status: string;
  onClick?: () => void;
}

export const MiniProjectCard: React.FC<MiniProjectCardProps> = ({
  title,
  image,
  technologies,
  status,
  onClick
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="flex-shrink-0 w-64 bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <div className="h-32 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            status === 'Live' 
              ? 'bg-success-100 text-success-700'
              : status === 'Beta'
              ? 'bg-accent-100 text-accent-700'
              : 'bg-primary-100 text-primary-700'
          }`}>
            {status}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-semibold text-dark-900 dark:text-white mb-2 truncate">
          {title}
        </h4>
        
        <div className="flex flex-wrap gap-1">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 rounded">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

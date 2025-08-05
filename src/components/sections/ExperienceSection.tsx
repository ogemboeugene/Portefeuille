import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { Container } from '../layout/Container';
import { EXPERIENCE } from '../../constants/data';

export const ExperienceSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey and the impact I've made in various roles
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            <div className="space-y-12">
              {EXPERIENCE.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-500 border-4 border-white dark:border-gray-900 rounded-full z-10"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} md:w-1/2`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                      {/* Job Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {job.role}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {job.company}
                        </p>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{job.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                            >
                              <span className="text-primary-500 mr-2 flex-shrink-0">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* We'll import certifications from data */}
              {/* For now, using a simple placeholder structure */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L3.09 8.26l1.31 1.52 7.6-4.63 7.6 4.63L21.91 8.26 12 2zm0 15l-7.6-4.63-1.31 1.52L12 18.5l8.91-4.61-1.31-1.52L12 17z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">ALX Software Engineering</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">ALX Africa</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2024</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

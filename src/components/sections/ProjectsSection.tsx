import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ProjectCard } from '../cards/ProjectCard';
import { ProjectSlideshow } from '../ui/ProjectSlideshow';
import { HorizontalScroll, MiniProjectCard } from '../ui/HorizontalScroll';
import { PROJECTS } from '../../constants/data';
import { CodeBracketIcon, PuzzlePieceIcon, DevicePhoneMobileIcon, GlobeAltIcon, ShoppingCartIcon, BanknotesIcon, HeartIcon } from '@heroicons/react/24/outline';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = [
    { name: 'All', icon: PuzzlePieceIcon, count: PROJECTS.length },
    { name: 'Mobile App', icon: DevicePhoneMobileIcon, count: PROJECTS.filter(p => p.category === 'Mobile App').length },
    { name: 'E-commerce', icon: ShoppingCartIcon, count: PROJECTS.filter(p => p.category === 'E-commerce').length },
    { name: 'Fintech', icon: BanknotesIcon, count: PROJECTS.filter(p => p.category === 'Fintech').length },
    { name: 'Fashion Tech', icon: GlobeAltIcon, count: PROJECTS.filter(p => p.category === 'Fashion Tech').length },
    { name: 'Developer Tools', icon: CodeBracketIcon, count: PROJECTS.filter(p => p.category === 'Developer Tools').length },
    { name: 'HealthTech', icon: HeartIcon, count: PROJECTS.filter(p => p.category === 'HealthTech').length },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-50/50 to-white dark:from-dark-900 dark:to-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-secondary-100/20 dark:from-primary-900/10 dark:via-transparent dark:to-secondary-900/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent w-16 mr-4"></div>
              <CodeBracketIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent w-16 ml-4"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Explore my latest work showcasing modern development practices, innovative solutions, 
              and user-centric design across web and mobile platforms.
            </p>
          </motion.div>

          {/* Featured Projects Slideshow */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                Featured Projects Showcase
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                Take a closer look at some of my most impactful projects
              </p>
            </div>
            <ProjectSlideshow projects={PROJECTS.slice(0, 4)} />
          </motion.div>

          {/* All Projects Horizontal Scroll */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <HorizontalScroll title="All Projects">
              {PROJECTS.map((project) => (
                <MiniProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  technologies={project.technologies}
                  status={project.status}
                  onClick={() => window.open(project.demo || project.github, '_blank')}
                />
              ))}
            </HorizontalScroll>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 border-primary-600 text-white shadow-glow-primary'
                      : 'bg-white/80 dark:bg-dark-800/80 border-dark-200 dark:border-dark-600 text-dark-700 dark:text-dark-300 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 backdrop-blur-sm'
                  }`}
                >
                  <IconComponent className={`h-5 w-5 transition-transform duration-300 ${
                    selectedCategory === category.name ? 'rotate-12' : 'group-hover:rotate-12'
                  }`} />
                  <span className="font-medium">{category.name}</span>
                  {category.count > 0 && (
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      selectedCategory === category.name
                        ? 'bg-white/20 text-white'
                        : 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    }`}>
                      {category.count}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={`${project.title}-${selectedCategory}`}
                variants={itemVariants}
                layout
                className="h-full"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  features={project.features}
                  github={project.github}
                  demo={project.demo}
                  image={project.image}
                  status={project.status}
                  category={project.category}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-dark-100 dark:bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <CodeBracketIcon className="h-12 w-12 text-dark-400 dark:text-dark-500" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-dark-600 dark:text-dark-400">
                No projects match the selected category.
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-8 border border-primary-100 dark:border-dark-600">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                Interested in my work?
              </h3>
              <p className="text-dark-600 dark:text-dark-300 mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities and innovative projects. 
                Let's connect and explore how we can work together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="group px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
                >
                  Get In Touch
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href="https://github.com/ogemboeugene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 border-2 border-dark-200 dark:border-dark-600 text-dark-700 dark:text-dark-300 rounded-xl font-semibold hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
                >
                  <CodeBracketIcon className="h-5 w-5 inline mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  View All Projects
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

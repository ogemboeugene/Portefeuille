import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { PERSONAL_INFO, SKILLS, EDUCATION } from '../../constants/data';
import { 
  UserIcon, 
  CodeBracketIcon, 
  AcademicCapIcon, 
  SparklesIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
  ServerIcon 
} from '@heroicons/react/24/outline';

export const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return CodeBracketIcon;
      case 'backend':
        return ServerIcon;
      case 'devops':
        return SparklesIcon;
      default:
        return CodeBracketIcon;
    }
  };

  const getSkillColor = (index: number) => {
    const colors = [
      'from-primary-500 to-primary-600',
      'from-secondary-500 to-secondary-600',
      'from-accent-500 to-accent-600',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-secondary-100/20 dark:from-primary-900/10 dark:via-transparent dark:to-secondary-900/10"></div>
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-success-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent w-16 mr-4"></div>
              <UserIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent w-16 ml-4"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting innovative solutions with modern technologies
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Profile Image and Info */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Profile Image Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-3xl rotate-6 opacity-20 blur-lg"></div>
                  <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-dark-800 dark:to-dark-700 rounded-3xl p-8 border border-primary-200 dark:border-dark-600 backdrop-blur-sm">
                    <img
                      src={PERSONAL_INFO.image}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                    
                    {/* Floating Info Cards */}
                    <div className="absolute -top-4 -right-4 bg-white dark:bg-dark-800 rounded-xl p-4 shadow-glow-primary border border-primary-200 dark:border-dark-600">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
                        <div className="text-xs text-dark-600 dark:text-dark-400">Years Experience</div>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-800 rounded-xl p-4 shadow-glow-secondary border border-secondary-200 dark:border-dark-600">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">15+</div>
                        <div className="text-xs text-dark-600 dark:text-dark-400">Projects Built</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                  My Journey
                </h3>
                
                <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed">
                  <p>
                    I'm a passionate <span className="text-primary-600 dark:text-primary-400 font-semibold">Full Stack Developer</span> with 
                    a strong foundation in modern web and mobile technologies. {PERSONAL_INFO.summary}
                  </p>
                  
                  <p>
                    Based in <span className="text-secondary-600 dark:text-secondary-400 font-semibold">{PERSONAL_INFO.location}</span>, 
                    I'm passionate about leveraging technology to solve real-world problems and create meaningful digital experiences. 
                    My journey in software development has been driven by curiosity and a commitment to continuous learning.
                  </p>
                  
                  <p>
                    I believe in writing clean, maintainable code and collaborating effectively with cross-functional teams 
                    to deliver high-quality software solutions that make a difference.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-3">
                  {[
                    'Full-stack development with modern frameworks',
                    'Mobile app development with Flutter & React Native',
                    'Cloud deployment and DevOps practices',
                    'Agile development and team collaboration'
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircleIcon className="h-5 w-5 text-success-500 flex-shrink-0" />
                      <span className="text-dark-700 dark:text-dark-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div>
                  <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {PERSONAL_INFO.languages.map((language, index) => (
                      <span
                        key={language}
                        className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                          index % 2 === 0 
                            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' 
                            : 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300'
                        }`}
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#contact"
                    className="group px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
                  >
                    Let's Connect
                    <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                  
                  <a
                    href="/resume.pdf"
                    download
                    className="group flex items-center gap-2 px-6 py-3 border-2 border-dark-200 dark:border-dark-600 text-dark-700 dark:text-dark-300 rounded-xl font-semibold hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowDownTrayIcon className="h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white flex items-center">
                <span className="w-3 h-3 bg-secondary-500 rounded-full mr-3"></span>
                Education
              </h3>
              <div className="bg-gradient-to-br from-secondary-50 to-accent-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-8 border border-secondary-200 dark:border-dark-600">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AcademicCapIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                      {EDUCATION.degree}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-400 mb-2 font-medium">
                      {EDUCATION.institution}
                    </p>
                    <p className="text-sm text-dark-500 dark:text-dark-500 mb-4">
                      {EDUCATION.period}
                    </p>
                    <div>
                      <h5 className="text-sm font-bold text-dark-900 dark:text-white mb-3">
                        Relevant Coursework:
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        {EDUCATION.coursework.map((course) => (
                          <div key={course} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></div>
                            <span className="text-sm text-dark-600 dark:text-dark-300">
                              {course}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white flex items-center">
                <span className="w-3 h-3 bg-accent-500 rounded-full mr-3"></span>
                Quick Facts
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Location', value: PERSONAL_INFO.location, icon: '📍' },
                  { label: 'Years of Experience', value: '3+', icon: '🚀' },
                  { label: 'Projects Completed', value: '15+', icon: '💻' },
                  { label: 'Happy Clients', value: '10+', icon: '😊' }
                ].map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between p-4 bg-white dark:bg-dark-800 rounded-xl border border-dark-100 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{fact.icon}</span>
                      <span className="text-dark-700 dark:text-dark-300 font-medium">{fact.label}</span>
                    </div>
                    <span className="text-primary-600 dark:text-primary-400 font-bold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h3>
              <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.keys(SKILLS).map((category, categoryIndex) => {
                const IconComponent = getSkillIcon(category);
                const gradientColor = getSkillColor(categoryIndex);
                
                return (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="group bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-6 border border-dark-100 dark:border-dark-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradientColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-dark-900 dark:text-white capitalize">
                        {category}
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      {SKILLS[category as keyof typeof SKILLS].map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center justify-between p-3 bg-dark-50 dark:bg-dark-700/50 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors duration-300"
                        >
                          <span className="text-dark-700 dark:text-dark-300 font-medium">
                            {skill}
                          </span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <div
                                key={star}
                                className={`w-2 h-2 rounded-full ${
                                  star <= 4 
                                    ? `bg-gradient-to-r ${gradientColor}` 
                                    : 'bg-dark-200 dark:bg-dark-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

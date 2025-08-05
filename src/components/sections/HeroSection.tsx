import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, DocumentArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Container } from '../layout/Container';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/data';
import { downloadResume, scrollToSection } from '../../utils/helpers';
import profileImage from '../../assets/profile.jpg';

export const HeroSection: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      github: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
        </svg>
      ),
      linkedin: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      twitter: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      email: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v3.273L12 11.184l6.545-4.09V3.82h3.819c.904 0 1.636.732 1.636 1.637Z"/>
        </svg>
      )
    };
    return icons[iconName] || null;
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-indigo-950 pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 rounded-full text-sm font-medium border border-success-200 dark:border-success-700"
            >
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
              Available for new opportunities
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-dark-800 dark:text-white">Hi, I'm </span>
                <span className="text-gradient bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
                  {PERSONAL_INFO.name.split(' ')[1]}
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-dark-700 dark:text-dark-200">
                  {PERSONAL_INFO.title}
                </h2>
                
                <div className="flex items-center gap-2 text-lg text-dark-600 dark:text-dark-300">
                  <SparklesIcon className="h-5 w-5 text-accent-500" />
                  <span>{PERSONAL_INFO.tagline}</span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl leading-relaxed"
              >
                {PERSONAL_INFO.summary}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow-primary flex items-center justify-center gap-3"
              >
                Let's Work Together
                <ArrowDownIcon className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={downloadResume}
                className="group px-8 py-4 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border-2 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <DocumentArrowDownIcon className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex space-x-6"
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm border border-dark-200 dark:border-dark-600 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Profile container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl rotate-12 animate-float opacity-80 shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full animate-float opacity-60 shadow-lg" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-8 -left-8 w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg rotate-45 animate-float opacity-70 shadow-lg" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-dark-500 dark:text-dark-400 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-dark-300 dark:border-dark-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-dark-400 dark:bg-dark-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

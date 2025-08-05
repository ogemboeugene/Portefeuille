import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { EventCard } from '../cards/EventCard';
import { TECH_EVENTS } from '../../constants/data';

export const EventsSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Tech Events & Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Active participation in the tech community through conferences, meetups, and hackathons
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECH_EVENTS.map((event) => (
              <motion.div key={event.id} variants={itemVariants}>
                <EventCard
                  name={event.name}
                  date={event.date}
                  role={event.role}
                  description={event.description}
                  topics={event.topics}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in collaborating or speaking at your event?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Let's Connect
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

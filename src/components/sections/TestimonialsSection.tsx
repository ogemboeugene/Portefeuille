import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { TestimonialCard } from '../cards/TestimonialCard';
import { TESTIMONIALS } from '../../constants/data';

export const TestimonialsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
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
              What People Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Feedback from colleagues, mentors, and clients I've had the privilege to work with
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional testimonial note */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 dark:text-gray-300 italic">
              "Working with diverse teams has taught me the value of collaboration and continuous learning."
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              - Eugene Brian Ogembo
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

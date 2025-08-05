import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { EventsSection } from '../components/sections/EventsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactSection } from '../components/sections/ContactSection';

export const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

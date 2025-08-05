import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const downloadResume = () => {
  // Placeholder for resume download functionality
  const link = document.createElement('a');
  link.href = '/resume.pdf'; // This should be replaced with actual resume path
  link.download = 'Eugine_Brian_Ogembo_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

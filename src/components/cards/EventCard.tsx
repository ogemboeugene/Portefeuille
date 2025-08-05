import React from 'react';
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

interface EventCardProps {
  name: string;
  date: string;
  role: string;
  description: string;
  topics: string[];
}

export const EventCard: React.FC<EventCardProps> = ({
  name,
  date,
  role,
  description,
  topics
}) => {
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'speaker':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'finalist':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'participant':
      case 'attendee':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">
          {name}
        </h3>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(role)}`}>
          <UserIcon className="h-4 w-4 mr-1" />
          {role}
        </span>
      </div>

      {/* Date */}
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
        <CalendarIcon className="h-4 w-4 mr-2" />
        <span className="text-sm">{date}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Topics */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Topics Covered:
        </h4>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

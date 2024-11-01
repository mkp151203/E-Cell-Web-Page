import React from 'react';
import { motion } from 'framer-motion';

const SponsorCard = ({ sponsor, Icon, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-light/20 h-full"
      style={{ minWidth: '300px' }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-primary-light text-sm font-medium flex items-center gap-2">
          <Icon className="h-4 w-4" />
          {sponsor.category}
        </span>
      </div>
      
      <div className="h-32 bg-white rounded-lg p-4 flex items-center justify-center mb-4">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="text-white text-xl font-bold mb-2">{sponsor.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{sponsor.description}</p>

      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary-light hover:text-primary-dark transition-colors"
      >
        Visit Website
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </motion.div>
  );
};

export default SponsorCard;
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';
import SponsorCard from './SponsorCard';
import ErrorBoundary from './ErrorBoundary';
import notionLogo from './assets/Notion.png';
import unstopLogo from './assets/unstop.jpg';
import stockGroLogo from './assets/stockgro.png';
import finlaticsLogo from './assets/finlatics.png';
import stockedgeLogo from './assets/stockedge.png';

const sponsors = [
  {
    name: 'Unstop',
    logo: unstopLogo,
    url: 'https://unstop.com',
    category: 'Platform Partner',
    description: 'Leading student community platform'
  },
  {
    name: 'Notion',
    logo: notionLogo,
    url: 'https://www.notion.so',
    category: 'Productivity Partner',
    description: 'All-in-one workspace solution'
  },
  {
    name: 'StockGro',
    logo: stockGroLogo,
    url: 'https://www.stockgro.com',
    category: 'Trading Partner',
    description: 'Social trading platform'
  },
  {
    name: 'Finlatics',
    logo: finlaticsLogo,
    url: 'https://www.finlatics.com',
    category: 'Financial Partner',
    description: 'Financial learning platform'
  },
  {
    name: 'Stockedge',
    logo: stockedgeLogo,
    url: 'https://www.stockedge.com',
    category: 'Investment Partner',
    description: 'Stock market analytics platform'
  }
];

const categoryIcons = {
  'Platform Partner': Trophy,
  'Productivity Partner': Star,
  'Trading Partner': Award,
  'Financial Partner': Award,
  'Investment Partner': Award
};

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const SponsorSection = () => {
  const scrollRef = useRef(null);
  const SCROLL_SPEED = 1;
  let isPaused = false;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    let scrollPosition = 0;

    const scroll = () => {
      if (!container || isPaused) return;

      scrollPosition += SCROLL_SPEED;
      container.scrollLeft = scrollPosition;

      if (scrollPosition >= cardWidth) {
        const firstItem = container.firstElementChild;
        container.appendChild(firstItem.cloneNode(true));
        container.removeChild(firstItem);
        scrollPosition = 0;
        container.scrollLeft = 0;
      }
    };

    let animationFrameId;
    const animate = () => {
      scroll();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseEnter = () => {
      isPaused = true;
      container.style.overflowX = 'auto'; // Enable manual scrolling
    };

    const handleMouseLeave = () => {
      isPaused = false;
      container.style.overflowX = 'hidden'; // Disable manual scrolling
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const extendedSponsors = [...sponsors, ...sponsors];

  return (
    <ErrorBoundary>
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Valued Partners
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Collaborating with industry leaders to empower the next generation of entrepreneurs
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10" />

            <motion.div
              ref={scrollRef}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex overflow-x-hidden gap-6 pb-4 px-8"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {extendedSponsors.map((sponsor, index) => (
                <div key={index} className="flex-none">
                  <SponsorCard
                    sponsor={sponsor}
                    Icon={categoryIcons[sponsor.category]}
                    variants={itemVariants}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default SponsorSection;

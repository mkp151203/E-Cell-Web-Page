import React from 'react';
import { LightbulbIcon, GraduationCap, Users } from 'lucide-react';

const Initiatives = () => {
  const initiatives = [
    {
      title: "Startup Incubation",
      description: "We provide mentorship, resources, and workspace to help turn your ideas into successful startups.",
      icon: LightbulbIcon
    },
    {
      title: "E-Learning Program",
      description: "Access to courses, workshops, and learning materials to develop entrepreneurial skills.",
      icon: GraduationCap
    },
    {
      title: "Networking Events",
      description: "Regular meetups with successful entrepreneurs, investors, and industry experts.",
      icon: Users
    }
  ];

  return (
    
    <section id="initiatives" className="py-10 bg-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Initiatives
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            E-cell or Entrepreneurship cell of VIT Bhopal is a community of like minded people, fostering the spirit of entrepreneurship. Our mission is to cultivate and empower the emerging visionaries of tomorrow, providing comprehensive guidance and unwavering support to transform groundbreaking ideas into successful ventures.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {initiatives.map((initiative, index) => (
              <div key={index} className="relative transition-transform duration-200 ease-in-out transform hover:scale-105">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-black">
                  <initiative.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-white">
                    {initiative.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-400">
                    {initiative.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
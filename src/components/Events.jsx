import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';
import './Events.css';

const Events = () => {
  const events = [
    {
      title: "Startup Weekend",
      description: "54-hour weekend event where groups of developers, business managers, startup enthusiasts, marketing experts, and more pitch ideas for new startup ventures.",
      icon: Calendar,
      date: "March 2024"
    },
    {
      title: "E-Summit",
      description: "Annual flagship event featuring keynote speakers, panel discussions, and networking opportunities with successful entrepreneurs.",
      icon: Users,
      date: "April 2024"
    },
    {
      title: "Pitch Competition",
      description: "Present your startup idea to a panel of investors and industry experts for a chance to win seed funding and mentorship.",
      icon: Trophy,
      date: "May 2024"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Join us in our mission to foster entrepreneurship and innovation
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="event-card flex flex-col items-center justify-center text-center">
              <div className="event-icon mb-4">
                <event.icon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
              </div>
              <h3 className="event-title mb-2">
                <a href="#" className="focus:outline-none">
                  {event.title}
                </a>
              </h3>
              <p className="event-description mb-2">
                {event.description}
              </p>
              <p className="event-date">
                {event.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
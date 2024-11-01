import React, { useState, useEffect } from 'react';
import './Team.css';

const Team = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const team = [
    {
      name: "Sarah Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      name: "Michael Chen",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Faculty Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
    {
      name: "David Kim",
      role: "General Secretary",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    }
  ];

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = team.map((member) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = member.image;
          img.onload = () => {
            setLoadedImages((prev) => ({
              ...prev,
              [member.image]: true
            }));
            resolve();
          };
        });
      });

      await Promise.all(imagePromises);
      setIsVisible(true);
    };

    loadImages();
  }, []);

  const isImageLoaded = (imageUrl) => loadedImages[imageUrl];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className={`team-header transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-description">
            Dedicated individuals working together to foster entrepreneurship
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`team-member transition-all duration-1000 transform ${
                isImageLoaded(member.image) && isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="member-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`member-image transition-opacity duration-500 ${
                    isImageLoaded(member.image) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
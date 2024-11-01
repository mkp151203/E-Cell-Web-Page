import React, { useEffect, useState, useRef } from 'react';
import './Counter.css';
import peopleImg from './assets/People1.png';
import participantsImg from './assets/success.png';
import citiesImg from './assets/cityscape.png';

const Counter = () => {
  const counts = {
    participants: 150,
    startups: 30,
    people: 200,
  };

  const images = {
    participants: participantsImg,
    cities: citiesImg,
    people: peopleImg,
  };

  return (
    <div className="app">
      {/* <h1>Event Statistics</h1> */}
      <div className="card-container">
        <Card title="Participants" count={counts.participants} image={images.participants} />
        <Card title="Cities" count={counts.startups} image={images.cities} />
        <Card title="People" count={counts.people} image={images.people} />
      </div>
    </div>
  );
};

const Card = ({ title, count, image }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const startCounting = () => {
    let start = 0;
    const end = count;
    const duration = 2000; // Total duration for counting
    const incrementTime = Math.floor(duration / end); // Time for each increment

    const newTimer = setInterval(() => {
      if (start < end) {
        start++;
        setCurrentCount(start);
      } else {
        clearInterval(newTimer);
      }
    }, incrementTime);

    setTimer(newTimer);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current); // Observe the card element
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startCounting(); // Start counting when visible
    }
    return () => {
      if (timer) {
        clearInterval(timer); // Clear timer on component unmount
      }
    };
  }, [isVisible]);

  const handleMouseEnter = () => {
    setCurrentCount(0); // Reset count to 0
    if (timer) {
      clearInterval(timer); // Clear any existing timer
    }
    startCounting(); // Restart counting on hover
  };

  return (
    <div className="card" ref={cardRef} onMouseEnter={handleMouseEnter}>
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{currentCount}+</p>
    </div>
  );
};

export default Counter;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Initiatives from './components/Initiatives';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Counter from './components/Counter';
import SponsorSection from './components/SponsorSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <div className="w-full h-0.5 bg-yellow-500" />
        <Initiatives />
        <Counter />
        <div className="w-full h-0.5 bg-yellow-500" />
        <Events />
        <div className="w-full h-0.5 bg-yellow-500" />
        <Team />
        <div className="w-full h-0.5 bg-yellow-500" />
        <Gallery />
        <div className="w-full h-0.5 bg-yellow-500" />
        <SponsorSection />
        <div className="w-full h-0.5 bg-yellow-500" />
        <Contact />
      </main>
      <div className="w-full h-0.5 bg-yellow-500" />
      <Footer />
    </div>
  );
}

export default App;
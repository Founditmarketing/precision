import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Financing from './components/Financing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import EmergencyBanner from './components/EmergencyBanner';
import EstimateModal from './components/EstimateModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero onOpenEstimateModal={() => setIsModalOpen(true)} />
          <Statistics />
          <TrustBadges />
          <Services />
          <ProcessTimeline />
          <Gallery />
          <Testimonials />
          <Financing />
          <Contact />
        </main>
        <Footer />
        <AIChatbot />
        <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </HashRouter>
  );
};

export default App;
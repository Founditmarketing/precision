import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { SectionId } from '../types';
import EmergencyBanner from './EmergencyBanner';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Services', id: SectionId.SERVICES },
    { label: 'Projects', id: SectionId.PROJECTS },
    { label: 'About', id: SectionId.ABOUT },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <div className="fixed w-full z-50 top-0 flex flex-col">
      <div
        className={`w-full overflow-hidden transition-all duration-500 origin-top ${scrolled ? 'h-0 opacity-0' : 'h-[auto] max-h-32 opacity-100'
          }`}
      >
        <EmergencyBanner />
      </div>
      <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => scrollToSection(SectionId.HERO)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-brand-primary p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Hammer className="text-brand-dark h-6 w-6" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-none ${scrolled ? 'text-white' : 'text-white'}`}>PRECISION</span>
              <span className={`font-sans text-xs tracking-widest ${scrolled ? 'text-gray-300' : 'text-gray-200'}`}>ROOF STRUCTURE</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-200 hover:text-brand-primary transition-colors uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="bg-brand-primary text-brand-dark px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-brand-primary transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-gray-800 shadow-xl overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-gray-200 hover:text-brand-primary font-medium text-lg border-b border-gray-800 pb-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="bg-brand-primary text-brand-dark px-6 py-3 rounded-lg font-bold text-center mt-2"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
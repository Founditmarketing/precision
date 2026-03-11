import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById(SectionId.CONTACT);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_bg_roof_1773241882276.png" 
          alt="Roofing Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative mt-20 md:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary mb-8 animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">Licensed & Insured Professional Roofing</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-6 drop-shadow-lg">
            BUILT TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-yellow-200">LAST.</span><br />
            ENGINEERED TO <span className="text-white">PROTECT.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Precision Roof Structure delivers structural integrity and premium aesthetic for residential and commercial properties. Experience the difference of true craftsmanship.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <button 
              onClick={scrollToContact}
              className="w-full md:w-auto px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 text-lg group"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Our Work
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {['20+ Years Experience', 'Lifetime Warranty', '24/7 Emergency Service'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
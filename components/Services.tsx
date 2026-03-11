import React from 'react';
import { Home, Building2, Wrench, Ruler, Umbrella, PenTool } from 'lucide-react';
import { ServiceItem, SectionId } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Residential Roofing",
      description: "Complete roof replacements and installations using premium shingles, tile, or metal systems designed for longevity and curb appeal.",
      icon: <Home className="w-8 h-8" />
    },
    {
      title: "Commercial Systems",
      description: "Flat roof experts specializing in TPO, EPDM, and specialized coatings for industrial and commercial buildings.",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: "Structural Repair",
      description: "Beyond just shingles. We repair trusses, framing, and decking to ensure your roof's foundation is solid as rock.",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Precision Inspections",
      description: "Detailed drone and manual inspections to detect leaks, rot, and structural weaknesses before they become costly disasters.",
      icon: <Ruler className="w-8 h-8" />
    },
    {
      title: "Storm Damage Restoration",
      description: "Fast response to hail and wind damage. We work directly with your insurance to streamline the claims process.",
      icon: <Umbrella className="w-8 h-8" />
    },
    {
      title: "Custom Metal Work",
      description: "On-site fabrication of gutters, flashing, and architectural metal accents for a truly custom finish.",
      icon: <PenTool className="w-8 h-8" />
    }
  ];

  return (
    <section id={SectionId.SERVICES} className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Comprehensive Roofing Solutions</h3>
          <p className="text-slate-600 text-lg">
            We don't just cover buildings; we engineer protection. From minor repairs to massive structural overhauls, Precision delivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 border border-slate-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
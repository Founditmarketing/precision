import React from 'react';
import { Home, Building2, Wrench, Ruler, Umbrella, PenTool } from 'lucide-react';
import { ServiceItem, SectionId } from '../types';
import { motion } from 'framer-motion';

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
    <section id={SectionId.SERVICES} className="py-24 bg-[#0a0f18] relative border-b border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Comprehensive Roofing Solutions</h3>
          <p className="text-slate-400 text-lg">
            We don't just cover buildings; we engineer protection. From minor repairs to massive structural overhauls, Precision delivers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-slate-900 border-t-2 border-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
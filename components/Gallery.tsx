import React from 'react';
import { SectionId } from '../types';

const Gallery: React.FC = () => {
  const projects = [
    { id: 1, title: 'Modern Estate Re-roof', cat: 'Residential', img: '/images/modern_estate_roof_1773241896985.png' },
    { id: 2, title: 'Downtown Commercial Flat', cat: 'Commercial', img: '/images/commercial_flat_roof_1773241912440.png' }, // Portrait
    { id: 3, title: 'Historic Truss Repair', cat: 'Structural', img: '/images/historic_truss_repair_1773241932669.png' },
    { id: 4, title: 'Luxury Metal Seam', cat: 'Residential', img: '/images/luxury_metal_roof_1773241947838.png' },
    { id: 5, title: 'Historic Church Metal Roof', cat: 'Commercial/Specialty', img: '/images/church_metal_roof_1773243075423.png' },
    { id: 6, title: 'Suburban Storm Restore', cat: 'Insurance', img: '/images/storm_restore_roof_1773241975430.png' },
    { id: 7, title: 'Custom Cedar Shake', cat: 'Residential', img: '/images/cedar_shake_roof_1773244535166.png' },
    { id: 8, title: 'Integrated Solar System', cat: 'Eco-Friendly', img: '/images/solar_integrated_roof_1773244552212.png' },
    { id: 9, title: 'Luxury Apartment Complex', cat: 'Commercial', img: '/images/apartment_complex_roof_1773244565820.png' },
  ];

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-8">
          <div className="max-w-xl">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm">Featured Projects</h2>
            <h3 className="text-4xl font-heading font-bold">Proof of Precision</h3>
          </div>
          <button className="hidden md:block text-brand-primary font-bold hover:text-white transition-colors mt-4 md:mt-0">
            View All Projects &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.cat}</span>
                <h4 className="text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="text-brand-primary font-bold hover:text-white transition-colors">
            View All Projects &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
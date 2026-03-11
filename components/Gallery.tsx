import React from 'react';
import { SectionId } from '../types';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ProjectCard = ({ project }: { project: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="group relative cursor-pointer"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-white/5 bg-brand-dark"
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-72 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 z-10 pointer-events-none">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 drop-shadow-md">{project.cat}</span>
          <h4 className="text-xl font-bold text-white drop-shadow-lg">{project.title}</h4>
        </div>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-500 z-0 pointer-events-none mix-blend-overlay"></div>
      </motion.div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const projects = [
    { id: 1, title: 'Modern Estate Re-roof', cat: 'Residential', img: '/images/modern_estate_real_1773263958151.png' },
    { id: 2, title: 'Downtown Commercial Flat', cat: 'Commercial', img: '/images/commercial_flat_real_1773263970648.png' },
    { id: 3, title: 'Historic Truss Repair', cat: 'Structural', img: '/images/historic_truss_real_1773263992759.png' },
    { id: 4, title: 'Luxury Metal Seam', cat: 'Residential', img: '/images/luxury_metal_real_1773264008742.png' },
    { id: 5, title: 'Historic Church Metal Roof', cat: 'Commercial/Specialty', img: '/images/church_metal_real_1773264021841.png' },
    { id: 6, title: 'Suburban Storm Restore', cat: 'Insurance', img: '/images/storm_restore_real_1773264044464.png' },
    { id: 7, title: 'Custom Cedar Shake', cat: 'Residential', img: '/images/cedar_shake_real_1773264060099.png' },
    { id: 8, title: 'Integrated Solar System', cat: 'Eco-Friendly', img: '/images/solar_real_1773264076380.png' },
    { id: 9, title: 'Luxury Apartment Complex', cat: 'Commercial', img: '/images/apartment_real_1773264090844.png' },
  ];

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-[#030509] text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8"
        >
          <div className="max-w-xl">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm">Featured Projects</h2>
            <h3 className="text-4xl font-heading font-bold">Proof of Precision</h3>
          </div>
          <button className="hidden md:block text-slate-400 hover:text-brand-primary transition-colors mt-4 md:mt-0 font-bold uppercase tracking-wide text-sm">
            View All Projects &rarr;
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
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
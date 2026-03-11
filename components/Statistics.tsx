import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Statistics: React.FC = () => {
    const stats = [
        { value: 5000, suffix: '+', label: 'Roofs Secured' },
        { value: 20, suffix: '+', label: 'Years Experience' },
        { value: 24, suffix: '/7', label: 'Emergency Deploy' },
        { value: 100, suffix: '%', label: 'Client Satisfaction' },
    ];

    return (
        <section className="py-20 bg-brand-primary relative overflow-hidden z-20">
            {/* Dark overlay texture pattern could go here */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-7xl font-heading font-black text-brand-dark mb-2 drop-shadow-md">
                                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                                {stat.suffix}
                            </div>
                            <div className="text-brand-dark font-bold text-lg md:text-xl uppercase tracking-widest opacity-90">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;

import React from 'react';
import { Camera, FileText, Hammer, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProcessTimeline: React.FC = () => {
    const steps = [
        {
            num: '01',
            title: 'Drone & Manual Inspection',
            desc: 'We use high-res drones to detect microscopic damage, then get on the roof to confirm structural integrity.',
            icon: <Camera className="w-10 h-10 text-white" />,
        },
        {
            num: '02',
            title: 'Transparent Quotation',
            desc: 'No hidden fees. You get a line-by-line breakdown of materials, labor, and timeline before you sign anything.',
            icon: <FileText className="w-10 h-10 text-white" />,
        },
        {
            num: '03',
            title: 'Precision Installation',
            desc: 'Our certified crews tear off the old roof and install the new system using factory-spec techniques for maximum lifespan.',
            icon: <Hammer className="w-10 h-10 text-white" />,
        },
        {
            num: '04',
            title: 'Magnetic Clean-up',
            desc: 'We sweep your entire property with industrial magnets. We leave your yard cleaner than we found it.',
            icon: <Trash2 className="w-10 h-10 text-white" />,
        },
    ];

    return (
        <section className="py-24 bg-[#050810] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm">How We Work</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">The Precision Process</h3>
                    <p className="text-slate-400 text-lg">
                        A seamless, stress-free experience from the first call to the final nail. We respect your time and your property.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="relative group "
                        >
                            {/* Connector line - hidden on mobile, visible on lg and up */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-slate-800 -z-10 group-hover:bg-brand-primary/50 transition-colors duration-500"></div>
                            )}

                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center relative shadow-2xl border-4 border-[#050810] mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-primary">
                                    {step.icon}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 text-brand-primary border border-slate-700 font-bold flex items-center justify-center shadow-md">
                                        {step.num}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                                <p className="text-slate-400 leading-relaxed px-2">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;

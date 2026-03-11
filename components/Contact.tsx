import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-[#030509] text-white border-t border-white/5 relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-primary"></span> Get In Touch
            </h2>
            <h3 className="text-4xl font-heading font-black text-white mb-6">Let's Build Something Stronger.</h3>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              Ready to upgrade your roof or need an emergency inspection? Our elite tactical roofing unit is ready to deploy. Fill out the form or call command directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors duration-300 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Dispatch Phone</h4>
                  <p className="text-brand-primary font-bold text-xl drop-shadow-md">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mt-1">Mon-Fri 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors duration-300 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Command Link</h4>
                  <p className="text-slate-300">contact@precisionroof.com</p>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mt-1">Online 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors duration-300 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Headquarters</h4>
                  <p className="text-slate-300">123 Construction Blvd<br />Roofington, ST 90210</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0a0f18] p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-primary/10 to-transparent opacity-20 pointer-events-none"></div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all placeholder:text-slate-600" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all placeholder:text-slate-600" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all placeholder:text-slate-600" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all">
                  <option>Residential Inspection</option>
                  <option>Full Roof Replacement</option>
                  <option>Commercial Maintenance</option>
                  <option>Emergency Repair</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Mission Details</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all placeholder:text-slate-600" placeholder="Tell us about the project..."></textarea>
              </div>

              <button className="w-full bg-brand-primary text-brand-dark font-black tracking-widest uppercase py-4 rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                Deploy Crew
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
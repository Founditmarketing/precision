import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm">Get In Touch</h2>
            <h3 className="text-4xl font-heading font-bold text-brand-dark mb-6">Let's Build Something Stronger</h3>
            <p className="text-slate-600 mb-10 text-lg">
              Ready to upgrade your roof or need an emergency inspection? Our team is ready to deploy. Fill out the form or call us directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-lg text-brand-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Phone</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-400">Mon-Fri 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-lg text-brand-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Email</h4>
                  <p className="text-slate-600">contact@precisionroof.com</p>
                  <p className="text-sm text-slate-400">Online 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-lg text-brand-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Headquarters</h4>
                  <p className="text-slate-600">123 Construction Blvd<br />Roofington, ST 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white">
                  <option>Residential Inspection</option>
                  <option>Full Roof Replacement</option>
                  <option>Commercial Maintenance</option>
                  <option>Emergency Repair</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
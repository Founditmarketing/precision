import React from 'react';
import { Hammer, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Hammer className="text-brand-primary h-6 w-6" />
              <span className="font-heading font-bold text-xl text-white">PRECISION</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Setting the gold standard in roofing integrity and structural excellence. Your roof is our reputation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => document.getElementById(SectionId.HERO)?.scrollIntoView({behavior:'smooth'})} className="hover:text-brand-primary transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({behavior:'smooth'})} className="hover:text-brand-primary transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({behavior:'smooth'})} className="hover:text-brand-primary transition-colors">Projects</button></li>
              <li><button onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior:'smooth'})} className="hover:text-brand-primary transition-colors">Get Quote</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Residential Roofing</li>
              <li>Commercial TPO & EPDM</li>
              <li>Emergency Storm Repair</li>
              <li>Drone Inspections</li>
              <li>Gutter Systems</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Warranty Info</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Precision Roof Structure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
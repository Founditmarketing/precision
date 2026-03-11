import React from 'react';
import { Shield, Award, ThumbsUp, CheckCircle, Flame } from 'lucide-react';

const TrustBadges: React.FC = () => {
    return (
        <div className="bg-[#050810] border-b border-slate-800 py-8 relative shadow-2xl z-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-slate-500">
                    <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300">
                        <Shield className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-300">Fully Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300">
                        <Award className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-300">BBB A+ Rated</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300">
                        <Flame className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-300">Owens Corning Preferred</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300">
                        <ThumbsUp className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-300">100% Satisfaction</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300">
                        <CheckCircle className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-300">Lifetime Warranties</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustBadges;

import React from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow, GlassPanel } from './Common';
import { CERTIFICATIONS } from '../constants';
import { Award, Calendar, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <div className="pt-24 pb-12 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-4 border-b border-accent/10 pb-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-accent tracking-tighter uppercase">Certifications</h2>
          <p className="text-xs text-accent/40 font-mono tracking-widest">/root/system/credentials.verify</p>
        </div>
        <div className="hidden md:flex gap-4 text-[10px] font-mono text-accent/30 uppercase tracking-widest">
          <span>Verified_Certs: {CERTIFICATIONS.length}</span>
          <span>Status: AUTHENTICATED</span>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <TerminalWindow title={`${cert.id}.cert`} className="h-full">
              <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="relative aspect-video mb-6 overflow-hidden rounded border border-accent/10 group">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Section */}
                <div className="space-y-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-accent tracking-tight">{cert.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-accent/60 font-mono text-xs uppercase">
                        <ShieldCheck size={12} />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-accent/40 font-mono text-[10px] uppercase">
                      <Calendar size={10} />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-sm text-accent/80 leading-relaxed font-mono italic">
                    {cert.description}
                  </p>

                  <div className="pt-4 border-t border-accent/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] font-mono text-accent/40 uppercase">Verified_On_Chain</span>
                    </div>
                    <span className="text-[10px] font-mono text-accent/20">ID: {cert.id.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

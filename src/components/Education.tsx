import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from './Common';
import { EDUCATION } from '../constants';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div className="pt-20 pb-12 space-y-8 max-w-5xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-accent tracking-tighter">EDUCATION</h2>
        <p className="text-accent/60 font-mono text-sm uppercase tracking-widest">academic_records.log</p>
      </div>

      <div className="space-y-6">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassPanel className="hover:border-accent/60 hover:bg-bg-secondary/50 transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="space-y-2 md:w-56 shrink-0">
                  <div className="flex items-center gap-2 text-accent/60 font-mono text-xs uppercase tracking-widest">
                    <Calendar size={12} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent/70 font-mono text-xs">
                    <GraduationCap size={14} />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent/40 font-mono text-xs">
                    <MapPin size={12} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-accent">{edu.program}</h3>
                  <p className="text-sm text-accent/70 font-mono">{edu.score}</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

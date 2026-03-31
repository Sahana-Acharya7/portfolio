import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, TerminalWindow } from './Common';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Award, Github, Star } from 'lucide-react';

const IconMap: Record<string, any> = {
  Trophy,
  Award,
  Github,
  Star
};

export const Achievements: React.FC = () => {
  return (
    <div id="achievements" className="pt-20 pb-12 space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-accent tracking-tighter uppercase">Milestones</h2>
        <p className="text-xs text-accent/40 font-mono tracking-widest">/root/achievements/history.log</p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-accent/20 hidden md:block" />

        <div className="space-y-12">
          {ACHIEVEMENTS.map((achievement, i) => {
            const Icon = IconMap[achievement.icon] || Star;
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-bg border-2 border-accent z-10 hidden md:block" />
                
                <GlassPanel className="relative group hover:border-accent/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 shrink-0">
                      <Icon size={32} className="text-accent" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-accent">{achievement.title}</h3>
                        <span className="text-[10px] font-mono text-accent/40 uppercase tracking-widest bg-accent/5 px-2 py-1 rounded border border-accent/10">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-sm text-accent/60 font-mono leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </div>

      <TerminalWindow title="system_summary.sh" className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-accent">05</div>
            <div className="text-[10px] uppercase tracking-widest text-accent/40 mt-1">Hackathons Won</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">12+</div>
            <div className="text-[10px] uppercase tracking-widest text-accent/40 mt-1">Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-[10px] uppercase tracking-widest text-accent/40 mt-1">GitHub Stars</div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

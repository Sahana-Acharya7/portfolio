import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, TerminalWindow } from './Common';
import { SKILLS } from '../constants';
import { Code2, Database, Globe2, Cpu, Languages, Layout } from 'lucide-react';

export const Skills: React.FC = () => {
  const SkillGroup = ({ title, icon: Icon, category }: { title: string, icon: any, category: string }) => (
    <TerminalWindow title={`${title.toLowerCase()}.sys`} className="h-full">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2 opacity-50">
          <Icon size={14} className="text-accent" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono">{title}</span>
        </div>
        <div className="space-y-3">
          {SKILLS.filter(s => s.category === category).map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest mb-1">
                <span className="text-accent/60 group-hover:text-accent transition-colors">{skill.name}</span>
                <span className="text-accent/40">{skill.level}%</span>
              </div>
              <div className="h-1 w-full bg-accent/5 rounded-full overflow-hidden border border-accent/10">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="h-full bg-accent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </TerminalWindow>
  );

  return (
    <div className="pt-24 pb-12 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-4 border-b border-accent/10 pb-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-accent tracking-tighter uppercase">Skill_Manifest</h2>
          <p className="text-xs text-accent/40 font-mono tracking-widest">/root/system/capabilities.bin</p>
        </div>
        <div className="hidden md:flex gap-4 text-[10px] font-mono text-accent/30 uppercase tracking-widest">
          <span>Total_Modules: {SKILLS.length}</span>
          <span>Status: STABLE</span>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Languages */}
        <div className="lg:col-span-1">
          <SkillGroup title="Languages" icon={Code2} category="language" />
        </div>

        {/* Web & Mobile */}
        <div className="lg:col-span-1">
          <SkillGroup title="Web / Mobile" icon={Layout} category="web_mobile" />
        </div>

        {/* Databases */}
        <div className="lg:col-span-1">
          <SkillGroup title="Databases" icon={Database} category="database" />
        </div>

        {/* Tools & Platforms */}
        <div className="lg:col-span-1">
          <SkillGroup title="Tools & Platforms" icon={Globe2} category="tool_platform" />
        </div>

        {/* Core Areas */}
        <div className="lg:col-span-2">
          <TerminalWindow title="core_architecture.sys">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2 opacity-50">
                  <Cpu size={14} className="text-accent" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Theoretical_Foundations</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {SKILLS.filter(s => s.category === 'core_area').map((skill) => (
                    <div key={skill.name} className="p-3 border border-accent/10 bg-accent/5 rounded group hover:border-accent/30 hover:bg-accent/10 transition-all duration-150">
                      <div className="text-[10px] font-mono text-accent/60 uppercase tracking-widest mb-1">{skill.name}</div>
                      <div className="text-xs font-mono font-bold text-accent">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2 opacity-50">
                  <Languages size={14} className="text-accent" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Communication_Protocols</span>
                </div>
                <div className="space-y-3">
                  {SKILLS.filter(s => s.category === 'other').map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between p-2.5 border border-accent/10 bg-accent/5 rounded hover:border-accent/30 hover:bg-accent/10 transition-all duration-150">
                      <span className="text-[10px] font-mono text-accent/80 uppercase tracking-widest">{skill.name}</span>
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-sm rotate-45 ${i < Math.round(skill.level / 20) ? 'bg-accent' : 'bg-accent/10'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </div>
  );
};

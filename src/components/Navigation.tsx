import React from 'react';
import { motion } from 'framer-motion';
import { Home, Code, Briefcase, Trophy, Mail, ChevronRight, History, Award, GraduationCap } from 'lucide-react';

interface NavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: History },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/80 backdrop-blur-md border-b border-terminal-cyan-border px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-terminal-cyan font-bold">SYSTEM_OS</span>
          <ChevronRight size={14} className="text-terminal-cyan/40" />
          <span className="text-terminal-cyan/60">root</span>
          <ChevronRight size={14} className="text-terminal-cyan/40" />
          <span className="text-terminal-cyan animate-pulse">{activeTab}</span>
        </div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  flex items-center gap-2 px-4 py-1.5 rounded-md transition-all duration-200
                  font-mono text-xs uppercase tracking-wider
                  ${isActive 
                    ? 'bg-terminal-cyan text-terminal-bg shadow-[0_0_10px_rgba(6,249,249,0.5)]' 
                    : 'text-terminal-cyan/60 hover:text-terminal-cyan hover:bg-terminal-cyan/5'}
                `}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

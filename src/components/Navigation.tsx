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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg border-b border-accent-border px-6 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-accent font-bold">SYSTEM_OS</span>
          <ChevronRight size={14} className="text-accent/40" />
          <span className="text-accent/60">root</span>
          <ChevronRight size={14} className="text-accent/40" />
          <span className="text-accent">{activeTab}</span>
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
                    ? 'bg-accent text-bg transition-all duration-200' 
                    : 'text-accent/60 hover:text-accent hover:bg-accent/5 transition-all duration-150'}
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

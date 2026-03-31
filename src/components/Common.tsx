import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, X, Minus, Square } from 'lucide-react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`card-border rounded-lg overflow-hidden flex flex-col ${className}`}
    >
      {/* Title Bar */}
      <div className="bg-accent-dim border-b border-accent-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-accent" />
          <span className="text-xs font-mono text-accent/80 uppercase tracking-widest">{title}</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-accent/20 border border-accent-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent/20 border border-accent-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent/40 border border-accent-border" />
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 relative overflow-auto">
        <div className="p-6 font-mono text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export const GlassPanel: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => (
  <div 
    className={`card-border rounded-xl p-6 ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

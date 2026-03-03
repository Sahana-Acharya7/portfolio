import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { PROJECTS } from './constants';
import { Terminal, Cpu, Wifi, Battery, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const bootTimer = setTimeout(() => setIsBooting(false), 2000);
    return () => {
      clearInterval(timer);
      clearTimeout(bootTimer);
    };
  }, []);

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  const renderContent = () => {
    if (selectedProjectId && selectedProject) {
      return (
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => setSelectedProjectId(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'home': return <Home />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects onSelectProject={setSelectedProjectId} />;
      case 'certifications': return <Certifications />;
      case 'achievements': return <Achievements />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  if (isBooting) {
    return (
      <div className="fixed inset-0 bg-terminal-bg flex flex-col items-center justify-center font-mono text-terminal-cyan">
        <div className="space-y-4 max-w-md w-full px-8">
          <div className="flex items-center gap-4 mb-8">
            <Terminal size={48} className="animate-pulse" />
            <h1 className="text-4xl font-bold tracking-tighter">SAHANA_OS</h1>
          </div>
          <div className="space-y-2 text-xs opacity-60">
            <p className="animate-[pulse_1s_infinite]">» INITIALIZING KERNEL...</p>
            <p className="animate-[pulse_1.2s_infinite]">» LOADING SYSTEM_MODULES...</p>
            <p className="animate-[pulse_1.4s_infinite]">» ESTABLISHING SECURE_CONNECTION...</p>
            <p className="animate-[pulse_1.6s_infinite]">» MOUNTING PORTFOLIO_DRIVE...</p>
          </div>
          <div className="w-full h-1 bg-terminal-cyan/10 rounded-full mt-8 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-terminal-cyan shadow-[0_0_15px_rgba(6,249,249,1)]"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-terminal-cyan selection:text-terminal-bg">
      <Navigation activeTab={activeTab} setActiveTab={(tab) => {
        setActiveTab(tab);
        setSelectedProjectId(null);
      }} />

      <main className="flex-1 max-w-7xl mx-auto px-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProjectId || activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* System Status Bar */}
      <footer className="bg-terminal-bg/80 backdrop-blur-md border-t border-terminal-cyan-border px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono text-terminal-cyan/40 uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Cpu size={12} className="text-terminal-cyan/20" />
              <span>CPU: 12%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi size={12} className="text-terminal-cyan/20" />
              <span>LATENCY: 14MS</span>
            </div>
            <div className="flex items-center gap-2">
              <Battery size={12} className="text-terminal-cyan/20" />
              <span>PWR: 100%</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-terminal-cyan/20" />
              <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
            </div>
            <span className="hidden sm:inline">SAHANA_PORTFOLIO_V2.4.0</span>
          </div>
        </div>
      </footer>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,249,249,0.03)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-terminal-cyan/[0.02] to-transparent" />
      </div>
    </div>
  );
};

export default App;

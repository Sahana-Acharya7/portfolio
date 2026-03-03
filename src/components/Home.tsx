import React from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow, GlassPanel } from './Common';
import { User, Cpu, Globe, Zap, Code, Download, Award, Briefcase, Star, Activity, Terminal as TerminalIcon } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-12">
      {/* Hero Section: Editorial Style */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terminal-cyan/10 border border-terminal-cyan/20 text-terminal-cyan text-[10px] font-mono uppercase tracking-widest mb-4">
              <Activity size={12} className="animate-pulse" />
              System Status: Operational
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
              Sahana
            </h1>
            <p className="text-xl md:text-2xl text-terminal-cyan/60 font-mono mt-6 max-w-xl leading-relaxed">
              Architecting <span className="text-white">scalable systems</span> & <span className="text-white">intelligent interfaces</span>. 
              Bridging the gap between raw data and human experience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6,249,249,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-terminal-cyan text-terminal-bg font-mono text-sm font-bold uppercase tracking-widest rounded transition-all"
              onClick={() => window.open('/resume/resume.pdf', '_blank')}
            >
              <Download size={16} />
              Resume.pdf
            </motion.button>
            <div className="flex items-center gap-6 px-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white tracking-tighter">3+</div>
                <div className="text-[10px] text-terminal-cyan/40 uppercase tracking-widest">Projects</div>
              </div>
              <div className="w-px h-8 bg-terminal-cyan/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white tracking-tighter">8+</div>
                <div className="text-[10px] text-terminal-cyan/40 uppercase tracking-widest">Certs</div>
              </div>
              <div className="w-px h-8 bg-terminal-cyan/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white tracking-tighter">1+</div>
                <div className="text-[10px] text-terminal-cyan/40 uppercase tracking-widest">Pubs</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-terminal-cyan/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 border border-terminal-cyan/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-terminal-cyan/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-terminal-cyan/30 p-2 bg-terminal-bg/50 backdrop-blur-sm">
                  <img 
                    src="/images/photo.jpeg" 
                    alt="Sahana" 
                    className="w-full h-full rounded-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              {/* Floating Tech Tags */}
              <div className="absolute top-0 left-0 p-3 bg-terminal-bg/80 border border-terminal-cyan/20 rounded-lg backdrop-blur-sm text-[10px] font-mono text-terminal-cyan animate-bounce">
                REACT.JS
              </div>
              <div className="absolute bottom-10 right-0 p-3 bg-terminal-bg/80 border border-terminal-cyan/20 rounded-lg backdrop-blur-sm text-[10px] font-mono text-terminal-cyan animate-[bounce_2s_infinite]">
                NODE.JS
              </div>
              <div className="absolute top-20 right-0 p-3 bg-terminal-bg/80 border border-terminal-cyan/20 rounded-lg backdrop-blur-sm text-[10px] font-mono text-terminal-cyan animate-[bounce_1.5s_infinite]">
                PYTHON
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid: Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Bio Terminal */}
        <div className="md:col-span-2 lg:col-span-2">
          <TerminalWindow title="whoami.sh" className="h-full">
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-terminal-cyan">$</span>
                <span className="text-white">cat profile.md</span>
              </div>
              <div className="text-terminal-cyan/80 pl-4 border-l border-terminal-cyan/20 leading-relaxed">
                I am a Software Engineer passionate about building systems that matter. 
                From <span className="text-white">AI-driven pantry management</span> to <span className="text-white">distributed web crawlers</span>, 
                I focus on efficiency, scalability, and clean architecture.
              </div>
              <div className="flex gap-2 pt-2">
                <span className="text-terminal-cyan">$</span>
                <span className="text-white">ls competencies/</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pl-4 text-[10px] text-terminal-cyan/60 uppercase tracking-widest">
                <div className="flex items-center gap-2"><Code size={10} /> Full Stack</div>
                <div className="flex items-center gap-2"><Zap size={10} /> AI / ML</div>
                <div className="flex items-center gap-2"><Globe size={10} /> Cloud Arch</div>
                <div className="flex items-center gap-2"><Cpu size={10} /> IoT / Systems</div>
              </div>
            </div>
          </TerminalWindow>
        </div>

        {/* Latest Achievement */}
        <GlassPanel className="p-6 flex flex-col justify-between group hover:border-terminal-cyan/40 transition-colors">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-terminal-cyan/10 flex items-center justify-center text-terminal-cyan">
              <Award size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">IEEE Publication</h3>
              <p className="text-xs text-terminal-cyan/60 font-mono mt-1">Best Paper Award @ CSITSS 2025</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-terminal-cyan/40 uppercase tracking-widest">
            <span>Research</span>
            <span className="group-hover:text-terminal-cyan transition-colors">View Details →</span>
          </div>
        </GlassPanel>

        {/* Current Status */}
        <GlassPanel className="p-6 flex flex-col justify-between group hover:border-terminal-cyan/40 transition-colors">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-terminal-cyan/10 flex items-center justify-center text-terminal-cyan">
              <Briefcase size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Open to Roles</h3>
              <p className="text-xs text-terminal-cyan/60 font-mono mt-1">SDE Intern / Full-time 2025</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-terminal-cyan/40 uppercase tracking-widest">
            <span>Availability</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500/60">Active</span>
            </div>
          </div>
        </GlassPanel>

        {/* System Logs / Activity */}
        <div className="md:col-span-3 lg:col-span-4">
          <TerminalWindow title="system_logs.log" className="h-48 overflow-hidden">
            <div className="space-y-1 font-mono text-[10px] text-terminal-cyan/40">
              <div className="flex gap-4">
                <span className="text-terminal-cyan/20">[05:22:45]</span>
                <span className="text-terminal-cyan/60">INIT:</span>
                <span>Portfolio kernel v2.4.0 loaded successfully.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-terminal-cyan/20">[05:23:10]</span>
                <span className="text-terminal-cyan/60">INFO:</span>
                <span>Fetching latest projects from GitHub... done.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-terminal-cyan/20">[05:23:15]</span>
                <span className="text-terminal-cyan/60">INFO:</span>
                <span>Updating certification database (8 entries found).</span>
              </div>
              <div className="flex gap-4">
                <span className="text-terminal-cyan/20">[05:23:20]</span>
                <span className="text-terminal-cyan/60">WARN:</span>
                <span>High traffic detected from MAANG recruiters. Optimizing...</span>
              </div>
              <div className="flex gap-4">
                <span className="text-terminal-cyan/20">[05:23:25]</span>
                <span className="text-terminal-cyan/60">SUCCESS:</span>
                <span className="text-terminal-cyan/80">System optimized. Ready for interaction.</span>
              </div>
              <div className="flex gap-2 pt-2">
                <span className="text-terminal-cyan">$</span>
                <span className="text-white animate-pulse">_</span>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>
    </div>
  );
};

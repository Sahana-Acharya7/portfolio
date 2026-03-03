import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, TerminalWindow } from './Common';
import { Project } from '../types';
import { ArrowLeft, Github, ExternalLink, Activity, Target, Layers, Cpu } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const hasImage = Boolean(project.image && project.image.trim().length > 0);
  return (
    <div className="pt-20 pb-12 space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-terminal-cyan/60 hover:text-terminal-cyan transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-mono uppercase tracking-widest">Back to Directory</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative aspect-video rounded-xl overflow-hidden border border-terminal-cyan/20 ${project.imageFit === 'contain' || !hasImage ? 'bg-terminal-bg/80' : ''}`}
          >
            {hasImage && (
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'} grayscale contrast-125`}
                referrerPolicy="no-referrer"
              />
            )}
            {hasImage && (
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg via-transparent to-transparent opacity-80" />
            )}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs font-mono text-terminal-cyan uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
              <h1 className="text-4xl font-bold text-terminal-cyan tracking-tighter">{project.title}</h1>
            </div>
          </motion.div>

          <TerminalWindow title="case_study.md">
            <div className="space-y-6">
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-terminal-cyan">
                  <Target size={16} />
                  <h2 className="text-sm uppercase tracking-widest font-bold">Objective</h2>
                </div>
                <p className="text-terminal-cyan/80 leading-relaxed pl-6 border-l border-terminal-cyan/10">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-terminal-cyan">
                  <Layers size={16} />
                  <h2 className="text-sm uppercase tracking-widest font-bold">Tech Stack</h2>
                </div>
                <div className="flex flex-wrap gap-3 pl-6">
                  {project.tags.map(tag => (
                    <div key={tag} className="px-3 py-1 bg-terminal-cyan/5 border border-terminal-cyan/20 rounded font-mono text-xs text-terminal-cyan">
                      {tag}
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-terminal-cyan">
                  <Activity size={16} />
                  <h2 className="text-sm uppercase tracking-widest font-bold">Key Features</h2>
                </div>
                <ul className="space-y-2 pl-6 text-terminal-cyan/80">
                  <li className="flex gap-2">
                    <span className="text-terminal-cyan">»</span>
                    <span>Real-time data synchronization across all devices.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-terminal-cyan">»</span>
                    <span>Advanced analytics dashboard with predictive modeling.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-terminal-cyan">»</span>
                    <span>Seamless integration with third-party IoT sensors.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-terminal-cyan">
                  <Cpu size={16} />
                  <h2 className="text-sm uppercase tracking-widest font-bold">Technical Challenges</h2>
                </div>
                <div className="space-y-4 pl-6 border-l border-terminal-cyan/10">
                  <div>
                    <h4 className="text-xs font-bold text-terminal-cyan mb-1 uppercase tracking-wider">Concurrency Management</h4>
                    <p className="text-xs text-terminal-cyan/60 leading-relaxed font-mono">
                      Solved race conditions in real-time updates by implementing a distributed locking mechanism using Redis, ensuring data consistency across multiple concurrent sessions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-terminal-cyan mb-1 uppercase tracking-wider">Model Optimization</h4>
                    <p className="text-xs text-terminal-cyan/60 leading-relaxed font-mono">
                      Reduced AI model inference latency by 60% through quantization and pruning, enabling real-time predictions on low-power mobile devices.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </TerminalWindow>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <GlassPanel className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-terminal-cyan/40">System Metrics</h3>
            <div className="space-y-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="flex justify-between items-center p-3 bg-terminal-cyan/5 border border-terminal-cyan/10 rounded">
                  <span className="text-xs font-mono text-terminal-cyan/60 uppercase">{stat.label}</span>
                  <span className="text-sm font-mono font-bold text-terminal-cyan">{stat.value}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-2 gap-4">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-terminal-cyan/5 border border-terminal-cyan/20 rounded-xl hover:bg-terminal-cyan/10 transition-all group"
              >
                <Github size={24} className="text-terminal-cyan mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-terminal-cyan/60">Source Code</span>
              </a>
            )}
            {project.links.demo && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-terminal-cyan/5 border border-terminal-cyan/20 rounded-xl hover:bg-terminal-cyan/10 transition-all group"
              >
                <ExternalLink size={24} className="text-terminal-cyan mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-terminal-cyan/60">Live Demo</span>
              </a>
            )}
          </div>

          <GlassPanel className="bg-terminal-cyan/5 border-terminal-cyan/20">
            <p className="text-[10px] font-mono text-terminal-cyan/40 uppercase tracking-widest leading-relaxed">
              This project was developed as part of a research initiative to explore the intersection of IoT and urban planning.
            </p>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
};

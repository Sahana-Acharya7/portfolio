import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, TerminalWindow } from './Common';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <div className="pt-20 pb-12 space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-accent tracking-tighter uppercase">Project Directory</h2>
          <p className="text-xs text-accent/40 font-mono tracking-widest">/root/projects/list_all.sh</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Full Stack', 'IoT', 'Web'].map((filter) => (
            <button
              key={filter}
              className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-accent/20 hover:bg-accent/10 text-accent/60 hover:text-accent rounded transition-all"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => {
          const isContain = project.imageFit === 'contain';
          const hasImage = Boolean(project.image && project.image.trim().length > 0);
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onSelectProject(project.id)}
            >
              <GlassPanel className="h-full flex flex-col p-0 overflow-hidden relative group-hover:border-accent/60 group-hover:bg-bg-secondary/50 transition-all duration-200">
                {/* Project Image */}
                <div className={`relative aspect-video overflow-hidden ${isContain || !hasImage ? 'bg-bg/80' : ''}`}>
                  {hasImage && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full ${isContain ? 'object-contain' : 'object-cover'} grayscale group-hover:grayscale-0 transition-all duration-500 ${isContain ? '' : 'scale-105 group-hover:scale-100'}`}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {hasImage && (
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-bg rounded-full border border-accent/20 text-accent hover:bg-accent hover:text-bg transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-bg rounded-full border border-accent/20 text-accent hover:bg-accent hover:text-bg transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">{project.category}</span>
                  <div className="h-px flex-1 bg-accent/10" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-3 group-hover:translate-x-1 transition-transform">{project.title}</h3>
                <p className="text-sm text-accent/60 line-clamp-2 mb-4 font-mono leading-relaxed">{project.description}</p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-[9px] font-mono border border-accent/10 text-accent/40 rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-[9px] font-mono border border-accent/10 text-accent/40 rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Footer */}
              <div className="bg-accent/5 border-t border-accent/10 px-6 py-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">View Case Study</span>
                <ChevronRight size={14} className="text-accent" />
              </div>
            </GlassPanel>
          </motion.div>
        );
      })}
      </div>
    </div>
  );
};

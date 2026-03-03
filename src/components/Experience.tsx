import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, TerminalWindow } from './Common';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Techno Tut Solution LLP",
      location: "Mysore, Karnataka",
      role: "Full Stack Development Intern",
      period: "June 2024 - Present",
      description: "Leading the development of high-performance web and mobile solutions for enterprise clients.",
      highlights: [
        "Architected a real-time dashboard using React and Socket.io, improving data visualization speed by 40%.",
        "Developed a cross-platform mobile app with Flutter, achieving 95% code reuse across iOS and Android.",
        "Optimized MongoDB aggregation pipelines, reducing API response times by 200ms for complex queries.",
        "Integrated third-party payment gateways and automated invoice generation systems.",
        "Mentored 3 junior interns on Git workflow and clean code principles."
      ],
      skills: ["React", "Node.js", "MongoDB", "Socket.io", "Flutter", "Express"]
    }
  ];

  return (
    <div className="pt-20 pb-12 space-y-8 max-w-5xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-terminal-cyan tracking-tighter">EXPERIENCE</h2>
        <p className="text-terminal-cyan/60 font-mono text-sm uppercase tracking-widest">Professional_Journey.log</p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l border-terminal-cyan/20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-terminal-cyan shadow-[0_0_10px_rgba(6,249,249,0.5)]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-terminal-cyan">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-terminal-cyan/60 font-mono text-xs">
                      <Briefcase size={12} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs font-mono text-terminal-cyan/40">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-terminal-cyan/5 border border-terminal-cyan/20 rounded text-[10px] text-terminal-cyan/60 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <TerminalWindow title={`${exp.company.toLowerCase().replace(/\s+/g, '_')}_details.txt`}>
                  <div className="space-y-6">
                    <p className="text-terminal-cyan/80 leading-relaxed italic">
                      "{exp.description}"
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-terminal-cyan uppercase tracking-widest flex items-center gap-2">
                        <Award size={14} />
                        Key_Contributions
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-sm text-terminal-cyan/70">
                            <CheckCircle2 size={16} className="text-terminal-cyan shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TerminalWindow>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications or Other Experience */}
      <GlassPanel className="p-8 border-dashed border-terminal-cyan/20 bg-transparent">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full border border-terminal-cyan/20 flex items-center justify-center text-terminal-cyan/40">
            <Briefcase size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="text-terminal-cyan font-bold uppercase tracking-widest text-sm">Seeking New Opportunities</h4>
            <p className="text-xs text-terminal-cyan/40 font-mono">Open for SDE Internships & Full-time Roles starting 2024</p>
          </div>
          <button className="px-6 py-2 bg-terminal-cyan/10 border border-terminal-cyan/30 text-terminal-cyan text-xs font-mono uppercase tracking-widest rounded hover:bg-terminal-cyan/20 transition-all">
            View_Full_Resume.pdf
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

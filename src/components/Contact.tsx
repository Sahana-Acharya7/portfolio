import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, TerminalWindow } from './Common';
import { Send, Mail, Github, Linkedin, Twitter, Terminal as TerminalIcon } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-20 pb-12">
      {/* Left Column: Contact Info */}
      <div className="lg:col-span-4 space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-terminal-cyan tracking-tighter uppercase">Get in Touch</h2>
          <p className="text-xs text-terminal-cyan/40 font-mono tracking-widest">/root/contact/info.txt</p>
        </div>

        <GlassPanel className="space-y-6">
          <p className="text-sm text-terminal-cyan/60 font-mono leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-4">
            <a href="mailto:sahanasheshadri51@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-terminal-cyan/10 flex items-center justify-center border border-terminal-cyan/20 group-hover:border-terminal-cyan/50 transition-all">
                <Mail size={18} className="text-terminal-cyan" />
              </div>
              <span className="text-sm font-mono text-terminal-cyan/80 group-hover:text-terminal-cyan transition-colors">sahanasheshadri51@gmail.com</span>
            </a>
          </div>

          <div className="pt-6 border-t border-terminal-cyan/10">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-terminal-cyan/40 mb-4">Social Protocols</h3>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/Sahana-Acharya7' },
                { icon: Linkedin, href: 'https://linkedin.com/in/sahana-acharya77' },
                { icon: Twitter, href: '#' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-terminal-cyan/5 flex items-center justify-center border border-terminal-cyan/10 hover:border-terminal-cyan/50 hover:bg-terminal-cyan/10 transition-all text-terminal-cyan/60 hover:text-terminal-cyan"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </GlassPanel>

        <TerminalWindow title="status.sh">
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-terminal-cyan/40">AVAILABILITY</span>
              <span className="text-emerald-400">OPEN_FOR_WORK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-cyan/40">TIMEZONE</span>
              <span className="text-terminal-cyan">GMT +5:30</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-cyan/40">RESPONSE_TIME</span>
              <span className="text-terminal-cyan">&lt; 24H</span>
            </div>
          </div>
        </TerminalWindow>
      </div>

      {/* Right Column: Contact Form */}
      <div className="lg:col-span-8">
        <TerminalWindow title="send_message.sh" className="h-full">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Send size={32} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-emerald-500">MESSAGE_SENT_SUCCESSFULLY</h3>
              <p className="text-sm text-terminal-cyan/60 font-mono max-w-xs">
                Your transmission has been received. I will process your request and respond shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 bg-terminal-cyan/10 border border-terminal-cyan/20 rounded font-mono text-xs text-terminal-cyan hover:bg-terminal-cyan/20 transition-all"
              >
                SEND_ANOTHER_TRANSMISSION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-terminal-cyan/40 uppercase tracking-widest">User Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-terminal-cyan/40 text-xs font-mono">$</span>
                    <input 
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-terminal-cyan/5 border border-terminal-cyan/20 rounded px-8 py-2 text-sm font-mono text-terminal-cyan focus:outline-none focus:border-terminal-cyan/50 transition-all"
                      placeholder="guest_user"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-terminal-cyan/40 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-terminal-cyan/40 text-xs font-mono">$</span>
                    <input 
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-terminal-cyan/5 border border-terminal-cyan/20 rounded px-8 py-2 text-sm font-mono text-terminal-cyan focus:outline-none focus:border-terminal-cyan/50 transition-all"
                      placeholder="user@domain.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-terminal-cyan/40 uppercase tracking-widest">Subject</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-terminal-cyan/40 text-xs font-mono">$</span>
                  <input 
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    className="w-full bg-terminal-cyan/5 border border-terminal-cyan/20 rounded px-8 py-2 text-sm font-mono text-terminal-cyan focus:outline-none focus:border-terminal-cyan/50 transition-all"
                    placeholder="project_inquiry"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-terminal-cyan/40 uppercase tracking-widest">Message Payload</label>
                <div className="relative">
                  <span className="absolute left-3 top-4 text-terminal-cyan/40 text-xs font-mono">$</span>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-terminal-cyan/5 border border-terminal-cyan/20 rounded px-8 py-3 text-sm font-mono text-terminal-cyan focus:outline-none focus:border-terminal-cyan/50 transition-all resize-none"
                    placeholder="Type your message here..."
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full flex items-center justify-center gap-2 py-3 rounded font-mono text-sm uppercase tracking-widest transition-all
                  ${isSubmitting 
                    ? 'bg-terminal-cyan/10 text-terminal-cyan/40 cursor-not-allowed' 
                    : 'bg-terminal-cyan text-terminal-bg font-bold shadow-[0_0_20px_rgba(6,249,249,0.3)] hover:shadow-[0_0_30px_rgba(6,249,249,0.5)] active:scale-[0.98]'}
                `}
              >
                {isSubmitting ? (
                  <>
                    <TerminalIcon size={18} className="animate-spin" />
                    PROCESSING_TRANSMISSION...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    EXECUTE_SEND
                  </>
                )}
              </button>
            </form>
          )}
        </TerminalWindow>
      </div>
    </div>
  );
};

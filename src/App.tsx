import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DATA } from './data/data';
import Navbar from './components/Navbar';
import { ArrowUpRight, Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen relative selection:bg-[var(--accent)] selection:text-black scroll-smooth overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />

      {/* SECTION ABOUT */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32 pb-20">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="flex flex-col leading-[0.8]">
            <h1 className="text-[18vw] md:text-massive font-black tracking-tighter uppercase">{DATA.profile.name.split(' ')[0]}</h1>
            <h1 className="text-[18vw] md:text-massive font-black tracking-tighter uppercase text-outline italic">{DATA.profile.name.split(' ')[1]}</h1>
          </div>
          
          <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-8 border-l-2 border-[var(--accent)] pl-6 md:pl-8">
              <p className="text-lg md:text-2xl font-black uppercase tracking-tighter mb-4 text-[var(--accent)]">
                {DATA.profile.role}
              </p>
              <p className="text-base md:text-xl opacity-80 leading-relaxed max-w-2xl font-medium italic">
                {DATA.profile.desc}
              </p>
              <div className="flex items-center gap-2 mt-8 text-[10px] font-bold tracking-widest opacity-40 uppercase">
                <MapPin size={12} /> {DATA.profile.location}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION EXPERTISE */}
      <section id="skills" className="py-24 md:py-40 px-6 md:px-20 border-t border-current/5">
        <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase mb-16 md:mb-20 italic underline decoration-[var(--accent)] underline-offset-8">Technical Proficiency</h2>
        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {DATA.skills.map((cat) => (
            <div key={cat.cat}>
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[var(--accent)] mb-8 md:mb-12 pb-4 border-b border-current/10 italic">
                {cat.cat}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8">
                {cat.items.map(skill => (
                  <span key={skill} className="text-2xl md:text-5xl font-black tracking-tighter uppercase text-[var(--accent)] hover:italic transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION WORKS */}
      <section id="work" className="py-24 md:py-40 px-6 md:px-20 border-t border-current/5 bg-current/[0.01]">
        <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase mb-16 md:mb-24 italic underline decoration-[var(--accent)] underline-offset-8">Featured Projects</h2>
        <div className="space-y-0">
          {DATA.projects.map((proj) => (
            <motion.a 
              key={proj.id}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="group border-b border-current/10 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 cursor-pointer hover:bg-current/[0.02] px-4 transition-all block"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                <span className="font-mono text-[10px] opacity-20 italic">/{proj.id}</span>
                <h3 className="text-3xl md:text-7xl font-black tracking-tighter uppercase group-hover:italic transition-all duration-500">
                  {proj.title}
                </h3>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-6 md:gap-10">
                <div className="text-left md:text-right uppercase">
                  <p className="text-[9px] md:text-[10px] font-bold tracking-widest opacity-40 mb-1">{proj.cat}</p>
                  <p className="text-[11px] md:text-xs font-black text-[var(--accent)] tracking-tighter italic whitespace-nowrap">{proj.tech}</p>
                </div>
                <ArrowUpRight size={32} className="md:w-12 md:h-12 opacity-30 group-hover:opacity-100 transition-all text-[var(--accent)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="py-32 md:py-60 px-6 md:px-20 border-t border-current/5">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-16 md:gap-20">
          <div className="text-center md:text-left leading-none">
            <h2 className="text-[16vw] md:text-[12vw] font-black tracking-tighter uppercase italic text-outline">Get In</h2>
            <h2 className="text-[16vw] md:text-[12vw] font-black tracking-tighter uppercase text-[var(--accent)]">Touch.</h2>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-10 md:gap-12 w-full md:w-auto">
            <div className="flex gap-6 md:gap-10">
              <a href={`mailto:${DATA.profile.email}`} className="p-5 md:p-6 border-2 border-current rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all">
                <Mail size={24} className="md:w-8 md:h-8" strokeWidth={2.5}/>
              </a>
              <a href={`https://${DATA.profile.linkedin}`} target="_blank" rel="noreferrer" className="p-5 md:p-6 border-2 border-current rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all">
                <Linkedin size={24} className="md:w-8 md:h-8" strokeWidth={2.5}/>
              </a>
              <a href={`https://${DATA.profile.github}`} target="_blank" rel="noreferrer" className="p-5 md:p-6 border-2 border-current rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all">
                <Github size={24} className="md:w-8 md:h-8" strokeWidth={2.5}/>
              </a>
            </div>
            
            <div className="w-full pt-8 border-t border-current/10 flex flex-col md:items-end items-center gap-1">
              <p className="text-[10px] md:text-[12px] font-black tracking-[0.4em] opacity-60 uppercase italic">
                © 2026 EDRIC HUGO
              </p>
              <p className="text-[10px] md:text-[12px] font-black tracking-[0.4em] opacity-30 uppercase italic">
                TANGERANG, INDONESIA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
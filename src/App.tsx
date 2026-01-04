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
    <div className="min-h-screen relative selection:bg-[var(--accent)] selection:text-black scroll-smooth">
      <Navbar theme={theme} setTheme={setTheme} />

      {/* HERO SECTION */}
      <section id="home" className="h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-massive">{DATA.profile.name.split(' ')[0]}</h1>
          <h1 className="text-massive text-outline italic">{DATA.profile.name.split(' ')[1]}</h1>
          
          <div className="mt-16 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8 border-l-2 border-[var(--accent)] pl-8">
              <p className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 text-[var(--accent)]">
                {DATA.profile.role}
              </p>
              <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-2xl font-medium italic">
                {DATA.profile.desc}
              </p>
              <div className="flex items-center gap-2 mt-8 text-[10px] font-bold tracking-widest opacity-40 uppercase">
                <MapPin size={12} /> {DATA.profile.location}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section id="skills" className="py-40 px-6 md:px-20 border-t border-current/5">
        <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase mb-20 italic underline decoration-[var(--accent)] underline-offset-8">Technical Proficiency</h2>
        <div className="grid md:grid-cols-1 gap-24">
          {DATA.skills.map((cat) => (
            <div key={cat.cat}>
              <h3 className="text-xs font-black uppercase tracking-widest text-[var(--accent)] mb-12 pb-4 border-b border-current/10 italic">
                {cat.cat}
              </h3>
              <div className="flex flex-wrap gap-x-10 gap-y-8">
                {cat.items.map(skill => (
                  <span key={skill} className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-[var(--accent)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section id="work" className="py-40 px-6 md:px-20 border-t border-current/5 bg-current/[0.01]">
        <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase mb-24 italic underline decoration-[var(--accent)] underline-offset-8">Featured Projects</h2>
        <div className="space-y-0">
          {DATA.projects.map((proj) => (
            <motion.a 
              key={proj.id}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group border-b border-current/10 py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer hover:bg-current/[0.02] px-4 transition-all block"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <span className="font-mono text-xs opacity-20 italic">/{proj.id}</span>
                <div>
                  <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase group-hover:italic transition-all duration-500">
                    {proj.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-10 text-right">
                <div className="hidden md:block text-right uppercase">
                  <p className="text-[10px] font-bold tracking-widest opacity-40 mb-1">{proj.cat}</p>
                  <p className="text-xs font-black text-[var(--accent)] tracking-tighter italic whitespace-nowrap">{proj.tech}</p>
                </div>
                <ArrowUpRight size={48} className="opacity-40 group-hover:opacity-100 transition-all text-[var(--accent)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-60 px-6 md:px-20 border-t border-current/5">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-20">
          <div className="text-center md:text-left leading-none">
            <h2 className="text-[12vw] font-black tracking-tighter uppercase italic text-outline">Get In</h2>
            <h2 className="text-[12vw] font-black tracking-tighter uppercase text-[var(--accent)]">Touch.</h2>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-12">
            <div className="flex gap-8 md:gap-12">
              <a href={`mailto:${DATA.profile.email}`} className="p-6 border-2 border-current rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all transform hover:scale-110 shadow-lg">
                <Mail size={32} strokeWidth={2.5}/>
              </a>
              <a href={`https://${DATA.profile.linkedin}`} target="_blank" rel="noreferrer" className="p-6 border-2 border-current rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all transform hover:scale-110 shadow-lg">
                <Linkedin size={32} strokeWidth={2.5}/>
              </a>
              <a href={`https://${DATA.profile.github}`} target="_blank" rel="noreferrer" className="p-6 border-2 border-current rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all transform hover:scale-110 shadow-lg">
                <Github size={32} strokeWidth={2.5}/>
              </a>
            </div>
            
            <p className="text-[12px] font-black tracking-[0.5em] opacity-50 uppercase italic text-center md:text-right border-t border-current/10 pt-8 w-full md:w-auto">
              © 2026 EDRIC HUGO — TANGERANG, ID
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, setTheme }: { theme: string, setTheme: any }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-6 md:p-8 flex justify-between items-center bg-[var(--bg)]/70 backdrop-blur-md border-b border-current/5 transition-colors duration-500">
      <div className="font-black text-2xl tracking-tighter uppercase leading-none">EH.</div>
      
      <div className="flex items-center gap-10">
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.4em] opacity-60 font-sans">
          <a href="#home" className="hover:text-[var(--accent)] transition-colors">About</a>
          <a href="#skills" className="hover:text-[var(--accent)] transition-colors">Expertise</a>
          <a href="#work" className="hover:text-[var(--accent)] transition-colors">Works</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
        </div>
        
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          className="p-3 rounded-full border border-current/10 hover:bg-current/5 transition-all cursor-pointer"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
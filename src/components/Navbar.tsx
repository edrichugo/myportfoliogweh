import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, setTheme }: { theme: string, setTheme: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Expertise', id: 'skills' },
    { name: 'Works', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          window.history.replaceState(null, '', `/${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, '', `/${id}`);
      setActiveSection(id);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-5 md:p-8 flex justify-between items-center bg-[var(--bg)]/80 backdrop-blur-xl border-b border-current/5 transition-all">
      <div className="font-black text-xl md:text-2xl tracking-tighter uppercase cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        EH.
      </div>
      
      <div className="flex items-center gap-3 md:gap-10 relative">
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.4em]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`/${link.id}`}
              onClick={(e) => handleNavigation(e, link.id)} 
              className={`transition-all duration-300 ${activeSection === link.id ? 'text-[var(--accent)]' : 'opacity-40 hover:opacity-100'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2.5 md:p-3 rounded-full border border-current/10 hover:bg-current/5 transition-all">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="md:hidden">
          <button className="p-2.5 rounded-full border border-current/10 bg-current/5" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {isOpen && (
            <div className="absolute top-16 right-0 w-48 bg-[var(--bg)] shadow-2xl border border-current/10 rounded-2xl p-2 flex flex-col gap-1 z-[110]">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={`/${link.id}`}
                  onClick={(e) => handleNavigation(e, link.id)} 
                  className={`text-[10px] font-black uppercase tracking-widest p-4 rounded-xl transition-all ${activeSection === link.id ? 'bg-[var(--accent)] text-white' : 'hover:bg-current/5'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
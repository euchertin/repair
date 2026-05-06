'use client';

import React from 'react';

const Header = () => {
  // Определяем ссылки: название и соответствующий ID секции
  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Этапы', href: '#steps' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Логотип */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center rotate-[-10deg] group-hover:rotate-0 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <span className="text-black font-black text-xl tracking-tighter">R</span>
            </div>
            <div className="absolute -inset-1 bg-white/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white text-xl font-bold tracking-tight">REMO<span className="text-white/50">PRO</span></span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mt-1 font-medium italic">Digital Construction</span>
          </div>
        </div>

        {/* Навигация */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-[11px] uppercase font-bold text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] flex items-center gap-2 group"
            >
              <span className="w-1 h-1 bg-white opacity-0 group-hover:opacity-100 rounded-full transition-all" />
              {link.name}
            </a>
          ))}
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex flex-col items-end gap-1">
            <a href="tel:+79000000000" className="text-sm font-bold text-white tracking-tight hover:text-white/70 transition-colors">
              +7 (900) 000-00-00
            </a>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981] animate-pulse" />
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest italic">Online now</span>
            </div>
          </div>

          <a 
            href="#contacts"
            className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#e2e2e2] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

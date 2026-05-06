import React from 'react';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-[#0a0a0a] pt-32 pb-16 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          
          {/* Левая часть */}
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase  leading-none mb-6">
              ГОТОВЫ <span className="text-white/20">НАЧАТЬ?</span>
            </h2>
            <p className="text-white/40 text-sm font-medium tracking-wide leading-relaxed">
              Оставьте заявку на бесплатный расчет сметы и выезд замерщика. 
              Мы свяжемся с вами в течение 30 минут.
            </p>
          </div>

          {/* Правая часть */}
          <div className="flex flex-col lg:items-end justify-center gap-8">
            <div className="space-y-2 lg:text-right">
               <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Связаться напрямую</span>
               <a href="tel:+79000000000" className="block text-3xl md:text-4xl font-light text-white tracking-tighter hover:text-white/60 transition-colors">
                +7 (900) 000-00-00
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['WhatsApp', 'Telegram', 'Email'].map((link) => (
                <a key={link} href="#" className="text-[9px] uppercase tracking-[0.2em] font-black text-white/30 hover:text-white transition-all border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 active:scale-95">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя плашка */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="text-[9px] uppercase tracking-[0.3em] text-white/10 font-bold">
            © 2025 REMOPRO. АСТРАХАНЬ.
          </div>
          <div className="flex gap-10 text-[9px] uppercase tracking-[0.3em] text-white/10 font-bold">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-[0.3em]">DESIGNED BY EUCHERTIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

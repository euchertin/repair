'use client';
import React, { useRef, useEffect } from 'react';

const ServiceCard = ({ num, title, desc, videoSrc, posterSrc, size }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const forceVisual = async () => {
      try {
        video.muted = true;
        // preload="auto" вместе с загрузкой метаданных заставит браузер показать кадр
        video.load(); 
        
        if (window.innerWidth < 768) {
          await video.play();
        } else {
          // Для десктопа просто "прогреваем" видео
          video.currentTime = 0.5;
        }
      } catch (error) {
        console.log("Ожидание взаимодействия для " + title);
      }
    };

    forceVisual();
  }, [videoSrc]);

  return (
    <div 
      onMouseEnter={() => { if (window.innerWidth >= 768) videoRef.current?.play() }}
      onMouseLeave={() => { if (window.innerWidth >= 768) videoRef.current?.pause() }}
      className={`relative overflow-hidden group bg-[#111] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-700 hover:border-white/30 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] ${size}`}
    >
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-30 md:group-hover:opacity-70 transition-all duration-1000 pointer-events-none grayscale group-hover:grayscale-0">
        <video 
          ref={videoRef}
          muted 
          loop 
          playsInline 
          preload="auto"
          poster={posterSrc} // ВОТ ЭТО РЕШАЕТ ПРОБЛЕМУ: картинка видна сразу
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]"
        >
          <source src={videoSrc} type="video/webm" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/20 md:group-hover:bg-transparent transition-colors duration-1000" />
      </div>

      <div className="relative z-10 text-[10px] font-bold text-white/20 group-hover:text-orange-500 transition-colors tracking-[0.4em]">
        {num}
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-black text-white italic mb-4 group-hover:translate-x-3 transition-transform duration-700 uppercase leading-none">
          {title}
        </h3>
        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold leading-relaxed max-w-[260px] group-hover:text-white/80 transition-colors duration-700 italic font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mb-4 block italic">
            Services & Expertise
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-none">
            ЧТО МЫ <br /><span className="text-white/20 font-normal">УМЕЕМ</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[320px] md:auto-rows-[350px]">
          <ServiceCard 
            num="01" 
            title="Дизайн Проект" 
            desc="Планировка, 3D-визуализация, чертежи и авторский надзор." 
            videoSrc="/design.webm" 
            posterSrc="/design.jpg" 
            size="md:col-span-4" 
          />
          <ServiceCard 
            num="02" 
            title="Ремонт" 
            desc="Реализация интерьера от бетона до финального клининга." 
            videoSrc="/repair.webm" 
            posterSrc="/repair.jpg" 
            size="md:col-span-2" 
          />
          <ServiceCard 
            num="03" 
            title="Аудит" 
            desc="Приемка квартиры и проверка качества работ." 
            videoSrc="/audit.webm" 
            posterSrc="/audit.jpg" 
            size="md:col-span-3" 
          />
          <ServiceCard 
            num="04" 
            title="Сдача объекта" 
            desc="Клининг, проверка всех систем и передача ключей." 
            videoSrc="/final.webm" 
            posterSrc="/final.jpg" 
            size="md:col-span-3" 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

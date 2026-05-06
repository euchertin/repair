import React from 'react';

const steps = [
  { t: 'ЗАМЕР', d: 'Выезд специалиста и лазерное сканирование объекта.' },
  { t: 'СМЕТА', d: 'Детальный расчет стоимости и фиксация цены.' },
  { t: 'РЕМОНТ', d: 'Проведение работ под контролем технадзора.' },
  { t: 'СДАЧА', d: 'Клининг, проверка систем и передача ключей.' }
];

const Steps = () => {
  return (
    // Было:

    <section id="steps" className="py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6">

        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mb-4 block italic text-center">
            The Process
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-none text-center">
            КАК МЫ <span className="text-white/20 font-normal">РАБОТАЕМ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              {/* Огромная фоновая цифра */}
              <span className="text-[120px] font-black text-white/[0.03] absolute -top-16 -left-6 group-hover:text-orange-500/10 transition-colors duration-700 pointer-events-none">
                {i + 1}
              </span>

              <div className="relative z-10 border-l border-white/10 pl-6 py-2 group-hover:border-white transition-colors duration-500">
                <h3 className="text-xl font-black text-white tracking-widest mb-4 italic uppercase">
                  {step.t}
                </h3>
                <div className="w-6 h-[1px] bg-orange-500 mb-4 group-hover:w-12 transition-all duration-500" />
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold leading-relaxed max-w-[200px]">
                  {step.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

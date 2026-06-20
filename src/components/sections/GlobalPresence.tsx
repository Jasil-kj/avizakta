import React from 'react';

const COUNTRIES = ["INDIA", "UAE", "QATAR", "IRELAND", "AFRICA", "NETHERLANDS"];

export default function GlobalPresence() {
  const CountryItem = ({ name }: { name: string }) => (
    <div className="flex items-center gap-8 md:gap-16 mx-4 md:mx-8 group/item cursor-default">
      <span className="text-primary/40 text-[10px] md:text-xs">●</span>
      <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E3C15A] to-[#B8860B] opacity-50 group-hover/item:opacity-100 group-hover/item:drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-700 tracking-[0.15em] uppercase">
        {name}
      </span>
    </div>
  );

  const TickerSet = () => (
    <div className="flex items-center shrink-0">
      {[...COUNTRIES, ...COUNTRIES].map((country, idx) => (
        <CountryItem key={`${country}-${idx}`} name={country} />
      ))}
    </div>
  );

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden border-t border-primary/10">
      <style>{`
        @keyframes premium-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-premium-marquee {
          animation: premium-marquee 45s linear infinite;
        }
        .pause-on-hover:hover .animate-premium-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="text-center mb-16 md:mb-24 px-6">
        <h3 className="font-label text-primary wide-tracking uppercase text-xs md:text-sm mb-6 tracking-[0.3em]">Global Presence</h3>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Delivering engineering, manufacturing, and lighting solutions across international markets.
        </p>
      </div>

      <div className="relative flex w-full pause-on-hover">
        {/* Left and Right Edge Fades (Luxury fade-in/fade-out effect) */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-[400px] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-[400px] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Top Gold Divider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Marquee Track */}
        <div className="flex animate-premium-marquee py-12 md:py-16 w-max">
          <TickerSet />
          <TickerSet />
        </div>

        {/* Bottom Gold Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </section>
  );
}

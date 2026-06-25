"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-background/80 backdrop-blur-md" id="company" aria-labelledby="about-heading">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight">
              Engineering Excellence <br/><span className="text-on-surface-variant">Since 2012</span>
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Avizakta Enterprises stands at the vanguard of industrial design and technical manufacturing. Founded on the principle of "precision first," we have evolved into a premier engineering company providing end-to-end solutions for architectural lighting, industrial OEM manufacturing, and custom engineering.
          </p>
          <div className="flex flex-col gap-12 pt-4">
            <div className="relative pl-6 border-l border-primary/20">
              <div className="absolute left-[-1px] top-0 w-[2px] h-10 bg-gradient-to-b from-primary to-transparent"></div>
              <div className="text-6xl md:text-7xl font-display font-bold gold-gradient-text tracking-tighter drop-shadow-sm leading-none">13+</div>
              <p className="font-label text-xs md:text-sm uppercase tracking-[0.4em] text-primary/80 mt-4">Years of Innovation</p>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="font-display font-light text-sm md:text-base uppercase tracking-[0.4em] text-on-surface/80">
                Design <span className="text-primary/40 mx-2 tracking-normal">•</span> Technology <span className="text-primary/40 mx-2 tracking-normal">•</span> Manufacturing
              </h3>
              <div className="w-full max-w-[320px] h-[1px] bg-gradient-to-r from-primary/60 via-primary/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-2 md:-inset-4 border border-primary/10 group-hover:border-primary/40 transition-all duration-700 hidden md:block"></div>
          <div className="w-full aspect-video bg-surface-container overflow-hidden gold-border rounded-xl md:rounded-2xl shadow-lg">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="none"
              aria-label="Avizakta Manufacturing Process Video"
              className="w-full h-full object-cover transform-gpu will-change-transform hover:scale-105 transition-transform duration-1000" 
            >
              <source src="/mid_vid_new.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-background/80 backdrop-blur-md" id="company">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div>
            <span className="font-label text-primary wide-tracking uppercase text-xs">The Narrative</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight">
              Engineering Excellence <br/><span className="text-on-surface-variant">Since 2012</span>
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Avizakta Enterprises stands at the vanguard of industrial design and technical manufacturing. Founded on the principle of "precision first," we have evolved into a global leader providing end-to-end solutions for lighting, infrastructure, and custom engineering.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div className="border-l border-primary/30 pl-6">
              <div className="text-4xl font-display font-bold gold-gradient-text">13+</div>
              <p className="font-label text-[10px] uppercase wide-tracking text-on-surface-variant mt-2">Years of Innovation</p>
            </div>
            <div className="border-l border-primary/30 pl-6">
              <div className="text-4xl font-display font-bold gold-gradient-text">500+</div>
              <p className="font-label text-[10px] uppercase wide-tracking text-on-surface-variant mt-2">Global Patents</p>
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
          <div className="absolute -inset-4 border border-primary/10 group-hover:border-primary/40 transition-all duration-700"></div>
          <div className="aspect-square bg-surface-container overflow-hidden gold-border">
            <img 
              alt="Engineering" 
              className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT4tYJp5SI3r9z643iEWUv3shtMDPuPYayzhu85iAOtfa0w0oR82ng1zF4IYBuzZXPItLA8mUEy6n-_gf4YZK3aqc7MRpZbIAmh2SnVY4gVuhKz_q6jtfCFnMHqK-PvfPn-YRrPE23BDtjQaS2PYGijVDQbhbiFOHi-WpKVyhYEAeTDXSmG-sVzO23tj3aV3nlC428FQ7u_EjvPhSDBqs933GqEKZwo0lX0ix6ZNq-2TGzFH90V13Qtf9DH-FWN8dxU66ZPTmcAfs" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

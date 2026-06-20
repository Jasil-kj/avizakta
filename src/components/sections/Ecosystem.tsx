"use client";

import { motion } from "framer-motion";

export default function Ecosystem() {
  return (
    <section className="py-20 md:py-32 bg-background/80 backdrop-blur-md px-6 md:px-16" id="divisions">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-label text-primary wide-tracking uppercase text-xs">Our Brands & Divisions</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">AVIZAKTA ENTERPRISES</h2>
        </motion.div>

        <div className="w-full relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 gap-16 md:gap-32 relative z-10">
            {/* DECOBOX */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-10 md:p-16 gold-border group text-center md:text-right flex flex-col items-center md:items-end"
            >
              <h3 className="text-3xl font-display font-bold gold-gradient-text mb-4">DECOBOX</h3>
              <p className="text-on-surface-variant max-w-sm mb-8">
                Luxury decorative lighting. Custom chandeliers. Architectural lighting. Home décor solutions.
              </p>
              <button className="font-label text-xs uppercase wide-tracking text-primary border-b border-primary/50 pb-1 hover:border-primary transition-colors">
                Explore Decobox
              </button>
            </motion.div>

            {/* BOVEX */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-10 md:p-16 gold-border group text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-3xl font-display font-bold gold-gradient-text mb-4">BOVEX</h3>
              <p className="text-on-surface-variant max-w-sm mb-8">
                Commercial lighting. Industrial lighting. Infrastructure projects. LED systems.
              </p>
              <button className="font-label text-xs uppercase wide-tracking text-primary border-b border-primary/50 pb-1 hover:border-primary transition-colors">
                Explore Bovex
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Ecosystem() {
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

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
          
          <div className="grid md:grid-cols-2 gap-16 md:gap-32 relative z-10 items-start">
            {/* DECOBOX */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-6 md:p-16 gold-border group text-center md:text-right flex flex-col items-center md:items-end"
            >
              <h3 className="text-3xl font-display font-bold gold-gradient-text mb-4">DECOBOX<sup className="text-lg font-normal">&reg;</sup></h3>
              <p className="text-on-surface-variant max-w-sm mb-8">
                Luxury decorative lighting. Custom chandeliers. Architectural lighting. Home décor solutions.
              </p>
              <button 
                onClick={() => setExpandedBrand(expandedBrand === 'decobox' ? null : 'decobox')}
                className="font-label text-xs uppercase wide-tracking text-primary border-b border-primary/50 pb-1 hover:border-primary transition-colors"
              >
                {expandedBrand === 'decobox' ? 'Close Details' : 'Explore Decobox'}
              </button>

              <AnimatePresence>
                {expandedBrand === 'decobox' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-8 w-full flex flex-col md:items-end"
                  >
                    <div className="pt-6 border-t border-primary/20 flex flex-col gap-4 text-sm text-on-surface-variant max-w-lg leading-relaxed text-left md:text-right">
                      <p>
                        Decobox represents our design-oriented division that focuses on custom lighting and decorative products for modern interiors and architectural spaces. The brand works closely with homeowners, architects, and designers to create unique installations and décor solutions.
                      </p>
                      <p className="text-primary font-medium mt-2">
                        Decobox – Custom Lighting & Home Décor
                      </p>
                      <p>
                        Decobox is the direct-to-customer division of Avizakta focused on custom lighting and decorative home solutions.
                      </p>
                      <p>
                        Through Decobox, we design and deliver unique lighting pieces including chandeliers, staircase lighting, double-height installations, and bespoke decorative fixtures tailored for villas and luxury interiors.
                      </p>
                      <p>
                        The brand was created to bring design-driven lighting directly to homeowners, interior designers, and architects who are looking for something beyond standard catalogue products.
                      </p>
                      
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-6 self-center md:self-end inline-flex items-center justify-center font-label uppercase text-xs wide-tracking bg-primary text-background px-8 py-4 hover:bg-[#E3C15A] transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* BOVEX */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-6 md:p-16 gold-border group text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-3xl font-display font-bold gold-gradient-text mb-4">BOVEX<sup className="text-lg font-normal">&reg;</sup></h3>
              <p className="text-on-surface-variant max-w-sm mb-8">
                Commercial lighting. Industrial lighting. Infrastructure projects. LED systems.
              </p>
              <button 
                onClick={() => setExpandedBrand(expandedBrand === 'bovex' ? null : 'bovex')}
                className="font-label text-xs uppercase wide-tracking text-primary border-b border-primary/50 pb-1 hover:border-primary transition-colors"
              >
                {expandedBrand === 'bovex' ? 'Close Details' : 'Explore Bovex'}
              </button>

              <AnimatePresence>
                {expandedBrand === 'bovex' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-8 w-full flex flex-col md:items-start"
                  >
                    <div className="pt-6 border-t border-primary/20 flex flex-col gap-4 text-sm text-on-surface-variant max-w-lg leading-relaxed text-left">
                      <p>
                        Bovex is our commercial lighting brand developed to provide reliable and efficient lighting systems for business environments, infrastructure projects, and professional applications.
                      </p>
                      <p className="text-primary font-medium mt-2">
                        Bovex – Commercial Lighting Brand
                      </p>
                      <p>
                        Bovex is the commercial lighting brand under Avizakta Enterprises.
                      </p>
                      <p>
                        The brand focuses on functional, durable lighting solutions used in commercial environments such as offices, retail spaces, industrial facilities, and infrastructure projects.
                      </p>
                      <p>
                        The Bovex product range includes LED panel lights, flood lights, street lighting, and other performance-oriented lighting systems designed for reliability and efficiency.
                      </p>
                      
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-6 self-center md:self-start inline-flex items-center justify-center font-label uppercase text-xs wide-tracking bg-primary text-background px-8 py-4 hover:bg-[#E3C15A] transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

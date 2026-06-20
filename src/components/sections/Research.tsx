"use client";

import { motion } from "framer-motion";

export default function Research() {
  return (
    <section className="py-20 md:py-32 bg-background/80 backdrop-blur-md px-6 md:px-16 overflow-hidden" id="rd">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-label text-primary wide-tracking uppercase text-xs">Innovation Lab</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mt-4 mb-8">
            Researching <br/>The Future.
          </h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Our R&D division focuses on the intersection of materials science and digital systems. From smart-city connectivity to advanced thermal management in electronics, we are building the substrate of tomorrow's technology.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-1.5 h-16 bg-primary group-hover:h-20 transition-all"></div>
              <div>
                <h5 className="text-xl font-display font-semibold mb-2">Smart Control Systems</h5>
                <p className="text-on-surface-variant text-sm">Advanced IoT integration for industrial automation.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-1.5 h-16 bg-primary/30 group-hover:bg-primary transition-all"></div>
              <div>
                <h5 className="text-xl font-display font-semibold mb-2">Thermal Engineering</h5>
                <p className="text-on-surface-variant text-sm">Proprietary heat dissipation technologies for high-performance hardware.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="glass-panel p-1 border-2 border-primary/20">
            <img 
              alt="R&D" 
              className="w-full h-full object-cover grayscale brightness-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0ikHh0UeuWT7b0gYT8YHEBd4U2teixS-hhqebTv1J4ouln7b_dKwegotG8XLG6ASoi7HluK833w92ZbbfFgapHKQ31f1zYagvA9tt70BkJqLAGQobUCdsQgJUgk4QgZk_hRbYJekE0AjEc_JrlO911o-a7kxHqsG1TjrRnNfCQkWO_5ZGIVIHNC2NFJy2j6b9VLya4MpagxRe8qFZ6Wz7w5eqKlA_h_5NzftgHYlFPjBlU9gqqcSH1SbZRJlCeA8GBqdYDQcYuzw" 
            />
          </div>
          <div className="absolute -bottom-8 -left-8 md:-left-16 glass-panel p-8 gold-border animate-pulse">
            <div className="text-3xl font-display font-bold text-primary mb-1">98.4%</div>
            <p className="font-label text-[10px] uppercase wide-tracking text-on-surface-variant">Efficiency Gain</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

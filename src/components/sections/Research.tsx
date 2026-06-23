"use client";

import { motion } from "framer-motion";

export default function Research() {
  return (
    <section className="py-32 md:py-48 bg-background relative overflow-hidden" id="rd">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        
        {/* Content Side */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-on-surface mb-8 leading-[1.1]">
              Researching <br/>The Future.
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-on-surface-variant text-xl leading-relaxed mb-12 max-w-xl font-light"
          >
            At Avizakta, innovation is driven by continuous research, advanced engineering, and intelligent manufacturing. We explore emerging technologies to create solutions that are efficient, reliable, and built for tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Capability Row */}
            <div className="flex flex-wrap items-center gap-3 text-primary text-sm md:text-base tracking-widest uppercase font-label">
              <span>Advanced Product Development</span>
              <span className="opacity-50">•</span>
              <span>Smart Manufacturing</span>
              <span className="opacity-50">•</span>
              <span>Future-Ready Engineering</span>
            </div>
            
            {/* Divider Line */}
            <div className="h-px w-full max-w-2xl bg-gradient-to-r from-primary/50 to-transparent mt-6" />
          </motion.div>
        </div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[750px] w-full group order-1 lg:order-2"
        >
          <div className="absolute inset-0 z-10 overflow-hidden border border-primary/20 bg-surface-container">
            <img 
              alt="Advanced Engineering Research" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out" 
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop" 
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

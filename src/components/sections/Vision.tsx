"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="h-[100dvh] w-full relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md z-0">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight text-on-surface"
        >
          Building a <br />
          <span className="gold-gradient-text">Forward-Looking</span> <br />
          Technology and Manufacturing Company.
        </motion.h2>
      </div>
    </section>
  );
}

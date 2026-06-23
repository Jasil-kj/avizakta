"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Concept",
      desc: "Ideation and feasibility study within specific parameters.",
      img: "/images/concept.png",
      short: "CT"
    },
    {
      num: "02",
      title: "Engineering",
      desc: "Precise CAD modeling and structural validation.",
      img: "/images/industrial-engineer.png",
      short: "EN"
    },
    {
      num: "03",
      title: "Manufacturing",
      desc: "Scaling production through advanced fabrication facilities.",
      img: "/images/manufacturing-chip.png",
      short: "MF"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-surface-dim/80 backdrop-blur-md px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto text-center mb-24">
        {/* Label removed */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-on-surface mt-4"
        >
          Our Technical Process
        </motion.h2>
      </div>
      <div className="max-w-5xl mx-auto space-y-32">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-16 group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
              <h4 className="text-2xl font-display font-bold gold-gradient-text mb-4">
                {step.num}. {step.title}
              </h4>
              <p className="text-on-surface-variant">{step.desc}</p>
            </div>
            <div className="w-24 h-24 glass-panel gold-border flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform duration-500">
              <span className="font-label text-primary text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                {step.short}
              </span>
            </div>
            <div className="flex-1">
              <div className="aspect-video glass-panel overflow-hidden gold-border">
                <img 
                  alt={step.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={step.img} 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

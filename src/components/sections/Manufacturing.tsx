"use client";

import { motion } from "framer-motion";
import { Cpu, Lightbulb, Boxes, Headset } from "lucide-react";

export default function Manufacturing() {
  const cards = [
    {
      icon: <Boxes size={48} className="text-primary mb-8" />,
      title: "OEM Solutions",
      desc: "End-to-end OEM manufacturing services for lighting brands, distributors, and private-label partners with strict quality control and scalable production capabilities.",
      features: ["DESIGN FOR MANUFACTURING", "PRIVATE LABEL PRODUCTION", "QUALITY ASSURANCE"]
    },
    {
      icon: <Lightbulb size={48} className="text-primary mb-8" />,
      title: "Lighting Solutions",
      desc: "Design and production of decorative, architectural, commercial, and industrial lighting systems through our Decobox and Bovex divisions.",
      features: ["ARCHITECTURAL LIGHTING", "COMMERCIAL LIGHTING", "CUSTOM LIGHTING SYSTEMS"]
    },
    {
      icon: <Cpu size={48} className="text-primary mb-8" />,
      title: "Custom Development",
      desc: "Custom product development services from concept and prototyping to engineering validation and production-ready solutions.",
      features: ["RAPID PROTOTYPING", "PRODUCT ENGINEERING", "TECHNICAL INNOVATION"]
    },
    {
      icon: <Headset size={48} className="text-primary mb-8" />,
      title: "Engineering Support",
      desc: "Expert engineering consultation, technical problem-solving, product optimization, and ongoing project support throughout the product lifecycle.",
      features: ["TECHNICAL CONSULTING", "SYSTEM INTEGRATION", "PERFORMANCE OPTIMIZATION"]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-surface-dim/80 backdrop-blur-md px-6 md:px-16" id="capabilities">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="font-label text-primary wide-tracking uppercase text-xs">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mt-4">
              Core Capabilities.
            </h2>
          </motion.div>
          <motion.a 
            href="/Avizakta_Product_List_New.pdf"
            download="Avizakta_Brochure.pdf"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel px-10 py-4 font-label text-[10px] uppercase wide-tracking text-on-surface hover:bg-primary hover:text-on-primary transition-all duration-300 inline-block"
          >
            Download Brochure
          </motion.a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-10 gold-border group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="group-hover:scale-110 transition-transform duration-500 inline-block">
                {card.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-4">{card.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 h-20">{card.desc}</p>
              <div className="h-px w-0 bg-primary group-hover:w-full transition-all duration-500 mb-6"></div>
              <ul className="font-label text-[10px] text-primary/60 space-y-2">
                {card.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

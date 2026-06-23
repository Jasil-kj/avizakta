"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function FoundersNote() {
  const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E3C15A] font-medium tracking-wide">
      {children}
    </span>
  );

  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden border-t border-primary/10">
      {/* Subtle gold gradient glow behind the content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full max-h-[800px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Background large quotation mark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[15rem] md:text-[30rem] font-serif leading-none text-primary/[0.02] select-none pointer-events-none">
        "
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-label text-primary wide-tracking uppercase text-xs md:text-sm mb-4 tracking-[0.3em]"
          >
            Founder's Note
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground text-center"
          >
            A Message from the Founder
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center text-center md:text-left md:items-start"
        >
          {/* Large quotation-style opening statement */}
          <div className="mb-8 md:mb-12 text-center w-full">
            <span className="block text-4xl md:text-6xl font-serif text-primary mb-2 leading-none opacity-50">"</span>
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F0DDAA] to-[#B8860B] leading-tight md:leading-snug max-w-3xl mx-auto">
              At Avizakta, we believe great spaces are shaped by the technologies that power them.
            </p>
          </div>

          <div className="space-y-10 md:space-y-12 text-on-surface-variant text-lg md:text-xl leading-relaxed font-light text-left mx-auto max-w-[800px]">
            <p>
              What started as a simple vision—to create intelligent, design-driven products—has grown into a company built on <Highlight>Innovation</Highlight>, <Highlight>Engineering Excellence</Highlight>, and <Highlight>Advanced Manufacturing</Highlight>. From the very beginning, our goal has been to develop solutions that balance aesthetics, performance, and reliability while adapting to the evolving needs of modern architecture and infrastructure.
            </p>
            <p>
              Today, Avizakta operates through specialized brands and manufacturing divisions, serving homeowners, architects, interior designers, developers, businesses, and industry partners. Whether it's bespoke decorative lighting, architectural installations, commercial systems, or OEM manufacturing, every product we create reflects our commitment to <Highlight>Quality</Highlight>, precision, and continuous improvement.
            </p>
            <p>
              We see ourselves as more than a manufacturer. We are a <Highlight>Technology-Driven</Highlight> organization dedicated to transforming ideas into meaningful solutions that enhance experiences, improve efficiency, and create lasting value.
            </p>
            <p>
              As we continue to grow, our focus remains the same—investing in research, embracing innovation, and delivering products that inspire confidence and stand the test of time.
            </p>
            <p className="italic text-foreground/80 pt-4">
              Thank you for being part of our journey. We look forward to shaping the future together.
            </p>
          </div>

          {/* Signature Block */}
          <div className="mt-12 pt-8 w-full flex flex-col items-center">
            {/* Premium signature-style divider */}
            <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mb-6"></div>
            
            <div className="flex flex-col items-center text-center">
              {/* Script font for signature feeling */}
              <h4 className="text-4xl md:text-5xl text-primary font-serif italic tracking-wide mb-3">
                Aju K Rajan
              </h4>
              <p className="text-sm md:text-base font-label uppercase wide-tracking text-on-surface-variant/80 tracking-[0.2em] mb-1">
                Founder & Managing Director
              </p>
              <p className="text-xs md:text-sm font-label uppercase text-primary/60 tracking-wider">
                Avizakta Enterprises
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

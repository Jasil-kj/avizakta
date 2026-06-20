"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 md:py-32 bg-background/80 backdrop-blur-md px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Get in Touch</h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Let's discuss how Avizakta can support your next project through innovative lighting solutions, OEM manufacturing, engineering expertise, and product development services.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 glass-panel flex items-center justify-center gold-border">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h5 className="font-label text-xs uppercase wide-tracking text-primary mb-1">Our Office</h5>
                <p className="text-on-surface max-w-xs">Manjanamkuzhiyil Building, Thiruvalla Road, near SBI Branch, Mallappally, Kerala 689585, India</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 glass-panel flex items-center justify-center gold-border">
                <Mail className="text-primary" />
              </div>
              <div>
                <h5 className="font-label text-xs uppercase wide-tracking text-primary mb-1">Contact Us</h5>
                <p className="text-on-surface">info@avizakta.com</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 border-2 border-primary/20"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase wide-tracking text-primary/60">First Name</label>
                <input className="w-full bg-background/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface px-4 py-3 transition-colors" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase wide-tracking text-primary/60">Last Name</label>
                <input className="w-full bg-background/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface px-4 py-3 transition-colors" type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase wide-tracking text-primary/60">Work Email</label>
              <input className="w-full bg-background/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface px-4 py-3 transition-colors" type="email" />
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase wide-tracking text-primary/60">Division</label>
              <select className="w-full bg-background/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface px-4 py-3 transition-colors appearance-none">
                <option>Manufacturing / OEM</option>
                <option>DECOBOX</option>
                <option>BOVEX</option>
                <option>R&D Consultation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase wide-tracking text-primary/60">Message</label>
              <textarea className="w-full bg-background/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface px-4 py-3 transition-colors" rows={4}></textarea>
            </div>
            <a href="https://wa.me/919383428349" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-primary text-on-primary py-4 font-bold uppercase wide-tracking text-sm hover:brightness-110 active:scale-[0.98] transition-all">
              SEND INQUIRY
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

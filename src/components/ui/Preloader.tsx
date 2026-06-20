"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    // Wait for 2.5 seconds to show the animation, then fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center"
        >
          {/* Glowing pulse behind the logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            className="absolute w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"
          />

          {/* Logo animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Logo className="h-12 md:h-16 lg:h-20 w-auto object-contain" />
          </motion.div>
          
          {/* Animated loading line */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "150px", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mt-8"
          />

          {/* Loading Text */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-label text-primary/60 uppercase text-[10px] tracking-[0.3em] mt-6"
          >
            Initializing System
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

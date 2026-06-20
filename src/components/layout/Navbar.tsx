"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] border-b transition-all duration-300 backdrop-blur-xl",
        scrolled || mobileMenuOpen
          ? "bg-background/90 py-2 border-primary/20"
          : "bg-background/40 py-4 border-transparent"
      )}
    >
      <div className="flex justify-between items-center px-6 md:px-16 max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4 relative z-50 group"
        >
          <img src="/logo-mark.png" alt="Avizakta Mark" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain" />
          <Logo className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex items-center space-x-12">
          <Link
            href="#home"
            className="font-label text-sm uppercase wide-tracking text-primary font-bold transition-all duration-300 border-b-2 border-primary pb-1"
          >
            Home
          </Link>
          <Link
            href="#divisions"
            className="font-label text-sm uppercase wide-tracking text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            Divisions
          </Link>
          <Link
            href="#capabilities"
            className="font-label text-sm uppercase wide-tracking text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            Engineering
          </Link>
          <Link
            href="#company"
            className="font-label text-sm uppercase wide-tracking text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-4 lg:gap-6 relative z-50">

          <a href="https://wa.me/919383428349" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-2 font-bold uppercase wide-tracking text-xs hover:brightness-110 active:scale-95 transition-all hidden md:block text-center">
            Contact Sales
          </a>
          <button 
            aria-label="Toggle mobile menu"
            className="lg:hidden text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-primary/20 shadow-2xl py-8 px-6 flex flex-col gap-8"
          >
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="font-label text-lg uppercase wide-tracking text-primary font-bold"
            >
              Home
            </Link>
            <Link
              href="#divisions"
              onClick={() => setMobileMenuOpen(false)}
              className="font-label text-lg uppercase wide-tracking text-on-surface-variant"
            >
              Divisions
            </Link>
            <Link
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="font-label text-lg uppercase wide-tracking text-on-surface-variant"
            >
              Engineering
            </Link>
            <Link
              href="#company"
              onClick={() => setMobileMenuOpen(false)}
              className="font-label text-lg uppercase wide-tracking text-on-surface-variant"
            >
              About
            </Link>
            <a href="https://wa.me/919383428349" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-4 font-bold uppercase wide-tracking text-sm mt-4 text-center">
              Contact Sales
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

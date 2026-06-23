"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LogoCanvas from "./LogoCanvas";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Divisions", href: "divisions" },
    { name: "Engineering", href: "capabilities" },
    { name: "About", href: "company" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Scroll spy logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const sectionIds = ["home", "divisions", "capabilities", "company"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
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
          <LogoCanvas src="/images/gold-logo.png" className="h-10 sm:h-12 md:h-14 lg:h-16" />
          <LogoCanvas src="/images/gold-text-logo.jpg" className="h-6 sm:h-8 md:h-10 lg:h-12" />
        </Link>
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`#${link.href}`}
              className={cn(
                "font-label text-sm uppercase wide-tracking font-bold transition-all duration-300 pb-1",
                activeSection === link.href
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary border-b-2 border-transparent"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 lg:gap-6 relative z-50">

          <a href="https://wa.me/919383428349" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-2 font-bold uppercase wide-tracking text-xs hover:brightness-110 active:scale-95 transition-all hidden md:block text-center">
            Contact
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={`#${link.href}`}
                className={cn(
                  "text-3xl font-display font-medium uppercase wide-tracking transition-colors",
                  activeSection === link.href ? "text-primary" : "text-on-background hover:text-primary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/919383428349" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-4 font-bold uppercase wide-tracking text-sm mt-4 text-center">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

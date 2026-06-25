"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { name: "Home", sectionId: "home", path: "/" },
    { name: "Divisions", sectionId: "divisions", path: "/divisions" },
    { name: "Engineering", sectionId: "capabilities", path: "/engineering" },
    { name: "About", sectionId: "company", path: "/about" },
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
            // Update URL cleanly for SEO without triggering re-renders or losing scroll state
            const matchedLink = navLinks.find(link => link.sectionId === entry.target.id) || { path: "/" };
            if (window.location.pathname !== matchedLink.path) {
              window.history.replaceState(null, "", matchedLink.path);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const sectionIds = ["home", "divisions", "capabilities", "company", "global-presence", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        aria-label="Main Navigation"
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
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-3 md:gap-4 relative z-50 group"
            aria-label="Avizakta Home"
          >
            <Image 
              src="/images/Avizakta_Letter_Big_Size.png" 
              width={200}
              height={56}
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain mix-blend-screen" 
              alt="Avizakta Enterprises Logo"
              priority
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.sectionId)}
                className={cn(
                  "font-label text-sm uppercase wide-tracking font-bold transition-all duration-300 pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeSection === link.sectionId
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary border-b-2 border-transparent"
                )}
                aria-current={activeSection === link.sectionId ? "page" : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 lg:gap-6 relative z-50">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, "contact")}
              className="bg-primary text-on-primary px-8 py-2 font-bold uppercase wide-tracking text-xs hover:brightness-110 active:scale-95 transition-all hidden md:block text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              aria-label="Contact Us"
            >
              Contact
            </a>
            <button 
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
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
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={cn(
                    "font-label text-lg uppercase wide-tracking transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-block",
                    activeSection === link.sectionId ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                  )}
                  onClick={(e) => scrollToSection(e, link.sectionId)}
                  aria-current={activeSection === link.sectionId ? "page" : undefined}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, "contact")}
                className="bg-primary text-on-primary px-8 py-4 font-bold uppercase wide-tracking text-sm mt-4 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

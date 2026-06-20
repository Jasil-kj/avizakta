import Link from "next/link";
import { Hexagon, Box, Microscope } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-dim/80 backdrop-blur-md border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img src="/logo.png" alt="Avizakta Logo" className="h-10 w-auto object-contain mix-blend-screen" />
            <span className="text-3xl font-display font-bold gold-gradient-text uppercase">
              AVIZAKTA
            </span>
          </div>
          <p className="text-on-surface-variant max-w-md leading-relaxed mb-8">
            An enterprise dedicated to the rigorous application of engineering
            principles and innovative manufacturing processes for a global clientele.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 glass-panel flex items-center justify-center gold-border hover:bg-primary/10 transition-colors"
            >
              <Hexagon className="text-primary" size={16} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 glass-panel flex items-center justify-center gold-border hover:bg-primary/10 transition-colors"
            >
              <Box className="text-primary" size={16} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 glass-panel flex items-center justify-center gold-border hover:bg-primary/10 transition-colors"
            >
              <Microscope className="text-primary" size={16} />
            </Link>
          </div>
        </div>
        <div>
          <h6 className="font-label text-primary wide-tracking mb-8 uppercase text-xs">
            Divisions
          </h6>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Decobox Division
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Bovex Aerospace
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Precision Engineering
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Global Logistics
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-label text-primary wide-tracking mb-8 uppercase text-xs">
            Legal
          </h6>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Ethics & Quality
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Global Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/5 py-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-label uppercase wide-tracking text-on-surface-variant text-center md:text-left">
            © {new Date().getFullYear()} Avizakta Manufacturing Group. All rights
            reserved.
          </p>
          <p className="text-[10px] font-label uppercase wide-tracking text-primary/40">
            Engineered for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

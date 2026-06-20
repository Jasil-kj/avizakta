import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.061-.301-.15-1.265-.462-2.406-1.474-.889-.788-1.489-1.76-1.663-2.059-.175-.3-.019-.461.13-.611.136-.136.301-.35.45-.524.15-.175.2-.3.301-.501.099-.199.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.199 0-.523.074-.797.374-.273.3-1.045 1.02-1.045 2.479 0 1.462 1.069 2.876 1.219 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.199-.572-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-surface-dim/80 backdrop-blur-md border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <img src="/logo-mark.png" alt="Avizakta Mark" className="h-10 md:h-14 w-auto object-contain" />
            <Logo className="h-14 md:h-20 w-auto object-contain" />
          </div>
          <p className="text-on-surface-variant max-w-md leading-relaxed mb-8">
            An enterprise dedicated to the rigorous application of engineering
            principles and innovative manufacturing processes for a global clientele.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://wa.me/919383428349"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-panel flex items-center justify-center gold-border hover:bg-primary/10 transition-colors"
            >
              <WhatsAppIcon className="text-primary" size={16} />
            </Link>
            <Link
              href="https://www.instagram.com/avizakta_?igsh=MWR3bmljYnF6Ym1zYg=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-panel flex items-center justify-center gold-border hover:bg-primary/10 transition-colors"
            >
              <InstagramIcon className="text-primary" size={16} />
            </Link>
            <Link
              href="https://www.facebook.com/share/181RDQFZSc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-panel flex items-center justify-center gold-border hover:bg-primary/10 transition-colors"
            >
              <FacebookIcon className="text-primary" size={16} />
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
            © 2012 Avizakta Manufacturing Group. All rights
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

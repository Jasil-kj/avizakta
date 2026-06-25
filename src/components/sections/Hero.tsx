"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const ctx = gsap.context(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      // Use a fixed resolution that matches the extracted frames
      const isMobile = window.innerWidth < 768;
      canvas.width = isMobile ? 608 : 1920;
      canvas.height = 1080;

      const frameCount = 240;
      const currentFrame = (index: number) =>
        isMobile
          ? `/hero-sequence-mobile/${(index + 1).toString().padStart(4, "0")}.webp?v=2`
          : `/hero-sequence/${(index + 1).toString().padStart(4, "0")}.webp?v=2`;

      const images: HTMLImageElement[] = [];
      const sequence = { frame: 0 };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      let lastDrawnImage: HTMLImageElement | null = null;

      const render = () => {
        const img = images[sequence.frame];
        // Only draw if the image is fully downloaded and decoded
        if (img && img.complete && img.naturalHeight !== 0) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          lastDrawnImage = img;
        } else if (lastDrawnImage) {
          // If the target frame hasn't loaded over the network yet, keep drawing the last good frame
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(lastDrawnImage, 0, 0, canvas.width, canvas.height);
        }
      };

      images[0].onload = render;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800%",
          scrub: 1, // Increased scrub delay for much smoother momentum
          pin: true,
          onUpdate: render,
        },
      });

      // Animate frames 0 -> 119 over the 10 "duration" units of the timeline
      tl.to(sequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 10,
      }, 0);



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-[100dvh] w-full relative bg-background overflow-hidden" id="home" aria-label="Welcome to Avizakta">
      {/* Visually hidden H1 for SEO and Screen Readers */}
      <div className="sr-only">
        <h1>Avizakta Enterprises - Premium Lighting Manufacturer & Engineering Company</h1>
        <p>Leading the industry in architectural lighting, custom lighting solutions, and industrial OEM manufacturing. Discover engineering excellence and smart manufacturing with Avizakta.</p>
      </div>

      <div className="absolute inset-0 z-0 bg-[#0F0F0F]">
        {/* Preload first frames for LCP */}
        <link rel="preload" as="image" href="/hero-sequence/0001.webp?v=2" media="(min-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/hero-sequence-mobile/0001.webp?v=2" media="(max-width: 767px)" fetchPriority="high" />
        
        <canvas
          ref={canvasRef}
          aria-label="Avizakta Premium Lighting Product Visualization"
          role="img"
          className="w-full h-full object-cover object-[center_center] md:object-center max-md:object-[left_center]"
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">

      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-primary/50" size={32} aria-hidden="true" />
      </div>
    </section>
  );
}

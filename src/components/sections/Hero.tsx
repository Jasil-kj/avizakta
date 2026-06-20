"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textGroup1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const ctx = gsap.context(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      // Use a fixed resolution that matches the extracted frames
      canvas.width = 1920;
      canvas.height = 1080;

      const frameCount = 240;
      const currentFrame = (index: number) =>
        `/hero-sequence/${(index + 1).toString().padStart(4, "0")}.webp`;

      const images: HTMLImageElement[] = [];
      const sequence = { frame: 0 };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      const render = () => {
        if (images[sequence.frame]) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          // Draw the image to fill the canvas. CSS object-cover handles the aspect ratio cropping.
          context.drawImage(images[sequence.frame], 0, 0, canvas.width, canvas.height);
        }
      };

      images[0].onload = render;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 0.5, // Small scrub delay for smooth interpolation
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

      // Text Animations Sync
      // Scene 1: Initial Logo (0-2)
      tl.to(textGroup1Ref.current, { opacity: 1, scale: 1, duration: 1 }, 0)
        .to(textGroup1Ref.current, { opacity: 0, scale: 1.1, duration: 1 }, 2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-background overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure text is readable over the video */}
        <div className="absolute inset-0 bg-background/50 mix-blend-overlay"></div>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Scene 1: Logo */}
        <div ref={textGroup1Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-90">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tighter gold-gradient-text">
            AVIZAKTA
          </h1>
          <p className="font-label text-primary wide-tracking uppercase mt-4">
            Forging The Future
          </p>
        </div>


      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-primary/50" size={32} />
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";

export default function LogoCanvas({ src, className }: { src: string, className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        
        // Calculate Euclidean distance from pure white (255, 255, 255)
        const dist = Math.sqrt(
          Math.pow(255 - r, 2) + 
          Math.pow(255 - g, 2) + 
          Math.pow(255 - b, 2)
        );
        
        // Advanced feathering algorithm:
        // - dist < 30: purely background (including JPEG artifacts), set completely transparent
        // - 30 <= dist < 120: anti-aliased edges, feather the transparency
        // - dist >= 120: completely foreground (gold logo), set fully opaque
        if (dist < 30) {
          data[i+3] = 0;
        } else if (dist < 120) {
          data[i+3] = ((dist - 30) / 90) * 255;
        } else {
          data[i+3] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);
    };
  }, [src]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas 
        ref={canvasRef} 
        style={{ height: '100%', width: 'auto', objectFit: 'contain' }} 
      />
    </div>
  );
}

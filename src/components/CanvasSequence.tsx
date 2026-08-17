"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

// Helper to format frame numbers (e.g., 001, 012, 240)
const currentFrame = (index: number) =>
  `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // We track overall page scroll
  const { scrollYProgress } = useScroll();
  
  // Map scroll progress (0 to 1) to frame index (1 to 240)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload all images
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        await new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            loadedImages[i] = img;
            resolve(null);
          };
          img.onerror = () => {
            console.error(`Failed to load frame ${i}`);
            resolve(null); // Continue anyway
          };
        });
      }
      setImages(loadedImages);
      setLoaded(true);
    };

    loadImages();
  }, []);

  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Ensure canvas size matches display size to prevent blurring
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    // Scale context by device pixel ratio
    ctx.save();
    ctx.scale(dpr, dpr);

    // Fill with background color to ensure seamless edge
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Calculate scaling to 'cover' the canvas while maintaining aspect ratio
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawWidth = rect.width;
      drawHeight = rect.width / imgRatio;
      offsetX = 0;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawHeight = rect.height;
      drawWidth = rect.height * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Initial render when loaded
  useEffect(() => {
    if (loaded) {
      renderFrame(1);
    }
    
    const handleResize = () => {
      if (loaded) {
        renderFrame(Math.round(frameIndex.get()) || 1);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (loaded) {
      renderFrame(Math.round(latest));
    }
  });

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden bg-primary -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ width: "100%", height: "100%" }}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary z-10">
          <p className="text-white/60 tracking-widest uppercase text-sm animate-pulse">
            Loading Experience...
          </p>
        </div>
      )}
    </div>
  );
}

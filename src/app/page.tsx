"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import CanvasSequence from "@/components/CanvasSequence";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Scroll mapping for Opacity
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.18], [1, 1, 0, 0]);
  const engOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const ncOpacity = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const soundOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);

  // Scroll mapping for Y Translation
  const engY = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [50, 0, 0, -50]);
  const ncY = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [50, 0, 0, -50]);
  const soundY = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [50, 0, 0, -50]);
  const finalY = useTransform(scrollYProgress, [0.85, 0.9, 1], [50, 0, 0]);

  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      
      {/* Scrollable Container (Height defines the total scroll length) */}
      <div className="relative h-[600vh]">
        {/* Sticky Canvas Background */}
        <div className="sticky top-0 h-screen w-full">
          <CanvasSequence />

          {/* Overlays Container (Pointer events none so canvas is click-through if needed) */}
          <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-6">
            
            {/* HERO / INTRO (0 - 15%) */}
            <motion.div 
              style={{ opacity: heroOpacity }}
              className="absolute inset-x-0 top-1/3 flex flex-col items-center text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4 pb-2">
                Sony WH-1000XM6
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-6">
                Silence, perfected.
              </h2>
              <p className="text-white/60 max-w-lg text-lg">
                Flagship wireless noise cancelling, re-engineered for a world that never stops.
              </p>
            </motion.div>

            {/* ENGINEERING REVEAL (15% - 40%) */}
            <motion.div 
              style={{ opacity: engOpacity, y: engY }}
              className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 max-w-sm md:max-w-md pointer-events-auto"
            >
              <h3 className="text-4xl font-bold text-white/90 mb-4 tracking-tight">
                Precision-engineered<br />for silence.
              </h3>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>
                  Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
                </p>
                <p>
                  Every component is tuned for balance, power, and comfort—hour after hour.
                </p>
              </div>
            </motion.div>

            {/* NOISE CANCELLING (40% - 65%) */}
            <motion.div 
              style={{ opacity: ncOpacity, y: ncY }}
              className="absolute right-6 md:right-24 top-1/2 -translate-y-1/2 max-w-sm md:max-w-md text-right pointer-events-auto"
            >
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-sony-cyan mb-4 tracking-tight">
                Adaptive noise<br />cancelling, redefined.
              </h3>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>Multi-microphone array listens in every direction.</p>
                <p>Real-time noise analysis adjusts to your environment.</p>
                <p>Your music stays pure—planes, trains, and crowds fade away.</p>
              </div>
            </motion.div>

            {/* SOUND QUALITY (65% - 85%) */}
            <motion.div 
              style={{ opacity: soundOpacity, y: soundY }}
              className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 max-w-sm md:max-w-md pointer-events-auto"
            >
              <h3 className="text-4xl font-bold text-white/90 mb-4 tracking-tight">
                Immersive,<br />lifelike sound.
              </h3>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>High-performance drivers unlock detail, depth, and texture in every track.</p>
                <p>AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.</p>
              </div>
            </motion.div>

            {/* REASSEMBLY & CTA (85% - 100%) */}
            <motion.div 
              style={{ opacity: finalOpacity, y: finalY }}
              className="absolute inset-x-0 bottom-32 md:bottom-48 flex flex-col items-center text-center pointer-events-auto"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Hear everything.<br />Feel nothing else.
              </h3>
              <p className="text-white/60 text-xl mb-10 max-w-lg">
                WH-1000XM6. Designed for focus, crafted for comfort.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="relative group overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-0 bg-gradient-to-r from-sony-blue to-sony-cyan transition-opacity duration-300"></span>
                  <div className="px-8 py-4 bg-primary rounded-full relative transition-colors duration-300 group-hover:bg-transparent">
                    <span className="text-white font-medium text-lg">Experience WH-1000XM6</span>
                  </div>
                </button>
                <a href="#specs" className="text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline">
                  See full specs
                </a>
              </div>
              <p className="mt-8 text-white/40 text-sm">
                Engineered for airports, offices, and everything in between.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ADDITIONAL CONTENT SECTION (Below Scrollytelling) */}
      <section className="relative bg-secondary py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineering Excellence.</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Discover the meticulously crafted internal components that power the industry-leading noise cancellation and sound quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Component 1 */}
            <div className="bg-primary/50 border border-white/5 rounded-2xl hover:bg-primary/80 transition-colors overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <img src="/images/component_driver.png" alt="High-Performance Driver" className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
              </div>
              <div className="p-8 relative -mt-16">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sony-blue to-sony-cyan flex items-center justify-center mb-6 shadow-lg shadow-sony-blue/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Precision Drivers</h3>
                <p className="text-white/60 leading-relaxed">
                  Custom 30mm dynamic drivers engineered with a carbon fiber dome. They deliver unparalleled clarity, deep bass, and high-resolution audio precision.
                </p>
              </div>
            </div>

            {/* Component 2 */}
            <div className="bg-primary/50 border border-white/5 rounded-2xl hover:bg-primary/80 transition-colors overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <img src="/images/component_processor.png" alt="V1 Processor" className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
              </div>
              <div className="p-8 relative -mt-16">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sony-blue to-sony-cyan flex items-center justify-center mb-6 shadow-lg shadow-sony-cyan/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Aura ANC-X1 Processor</h3>
                <p className="text-white/60 leading-relaxed">
                  Our next-generation noise-canceling chip. It processes ambient sound at ultra-low latency, eliminating background noise before it ever reaches your ears.
                </p>
              </div>
            </div>

            {/* Component 3 */}
            <div className="bg-primary/50 border border-white/5 rounded-2xl hover:bg-primary/80 transition-colors overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <img src="/images/component_microphone.png" alt="Microphone Array" className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
              </div>
              <div className="p-8 relative -mt-16">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sony-blue to-sony-cyan flex items-center justify-center mb-6 shadow-lg shadow-sony-blue/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Multi-Mic Array</h3>
                <p className="text-white/60 leading-relaxed">
                  Strategically placed dual-noise sensor microphones. They capture ambient sound in all directions, feeding the processor with exact environmental data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>&copy; 2026 Sony Corporation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

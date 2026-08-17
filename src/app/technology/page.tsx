import Navbar from "@/components/Navbar";

export default function Technology() {
  return (
    <main className="bg-primary min-h-screen pt-24 pb-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Engineered for Audio Perfection.
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Discover the groundbreaking acoustic innovations inside the WH-1000XM6, driving high-resolution sound and ultimate precision.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Card 1 */}
          <div className="bg-secondary rounded-3xl p-12 border border-white/5 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">Integrated Processor V1</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Specially developed by Sony, the new Integrated Processor V1 unlocks the full potential of our HD Noise Cancelling Processor QN1. This unique combination of technology controls multiple microphones to deliver unprecedented noise cancelling quality.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#151520] rounded-3xl min-h-[300px] border border-white/5 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sony-blue/20 via-transparent to-transparent opacity-50"></div>
             <p className="text-sony-cyan font-mono tracking-widest uppercase text-sm z-10">Processor V1 Architecture</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-bl from-[#0a0a0f] to-[#151520] rounded-3xl min-h-[300px] border border-white/5 relative overflow-hidden flex items-center justify-center order-last md:order-none">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sony-blue/20 via-transparent to-transparent opacity-50"></div>
             <p className="text-sony-cyan font-mono tracking-widest uppercase text-sm z-10">30mm Driver Unit</p>
          </div>
          <div className="bg-secondary rounded-3xl p-12 border border-white/5 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">Precision 30mm Drivers</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              A specially designed 30mm driver unit featuring a light and rigid dome using carbon fiber composite material improves high-frequency sensitivity for more natural sound quality.
            </p>
          </div>
        </div>

        {/* DSEE Extreme Section */}
        <div className="bg-primary/50 border border-white/5 rounded-3xl p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">High-Resolution Audio, wireless or wired.</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Using Edge-AI (Artificial Intelligence), DSEE Extreme™ upscales compressed digital music files in real time. Dynamically recognizing instrumentation, musical genres, and individual elements of each song, it restores the high-range sound lost in compression.
          </p>
        </div>
      </div>
    </main>
  );
}

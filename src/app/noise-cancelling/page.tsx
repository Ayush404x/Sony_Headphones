import Navbar from "@/components/Navbar";

export default function NoiseCancelling() {
  return (
    <main className="bg-primary min-h-screen pt-24 pb-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Silence the world.
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Our most advanced noise cancelling technology yet. Adaptive, intelligent, and incredibly powerful.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Card 1 */}
          <div className="bg-secondary rounded-3xl p-12 border border-white/5 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sony-blue to-sony-cyan mb-4">Multi-Noise Sensor Technology</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Four microphones on each earcup—our biggest step ever in noise cancelling. Ambient sound is captured even more accurately for a dramatic reduction in high frequency noise. Thanks to Auto NC Optimizer, noise cancelling performance is always and automatically optimized based on wearing conditions and external environmental factors.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#151520] rounded-3xl min-h-[300px] border border-white/5 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sony-cyan/10 via-transparent to-transparent opacity-50"></div>
             <p className="text-sony-blue font-mono tracking-widest uppercase text-sm z-10">Microphone Array</p>
          </div>
        </div>

        {/* Adaptive Sound Control Section */}
        <div className="bg-primary/50 border border-white/5 rounded-3xl p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Adapts to whatever you do.</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12">
            Adaptive Sound Control is a smart function that senses where you are and what you’re doing, then adjusts ambient sound settings for the ideal listening experience. Over time, it learns your behavior and recognizes locations that you frequently visit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
             <div className="bg-secondary p-8 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold text-xl mb-2">Traveling</h4>
                <p className="text-white/50 text-sm">Lose yourself in the journey, with no background noise to interrupt your favorite tracks.</p>
             </div>
             <div className="bg-secondary p-8 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold text-xl mb-2">Walking</h4>
                <p className="text-white/50 text-sm">Stay aware of everything around you, from the street to the office, while still enjoying music.</p>
             </div>
             <div className="bg-secondary p-8 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold text-xl mb-2">Waiting</h4>
                <p className="text-white/50 text-sm">Hear important announcements while you wait with reduced background noise.</p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}

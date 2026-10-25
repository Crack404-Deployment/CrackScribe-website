import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
      {/* Dynamic Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.04] blur-[100px] rounded-[100%] pointer-events-none animate-pulse-slow" />
      
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-white drop-shadow-lg animate-fade-in-up">
          Flawless Audio. Cinematic Video. <br className="hidden md:block" />
          <span className="text-gradient-c404">Powered by AI.</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up delay-100">
          CrackScribe is the ultimate all-in-one studio to wash away noise, auto-generate captions, trim silence, and edit your media with cutting-edge AI.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
          <Button variant="primary" className="w-full sm:w-auto">
            Download Now
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Watch the Promo
          </Button>
        </div>
      </div>

      {/* Premium Editor UI Mockup - Active Editing Session */}
      <div className="w-full max-w-5xl mt-24 relative z-10 group animate-fade-in-up delay-300">
        <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-transparent rounded-xl opacity-30 group-hover:opacity-100 transition duration-1000 blur-md"></div>
        
        <div className="aspect-[16/9] rounded-xl border border-white/10 bg-[#050505]/95 backdrop-blur-3xl shadow-2xl overflow-hidden flex flex-col relative z-10 animate-float">
          
          {/* Mockup Window Controls Header */}
          <div className="w-full h-12 border-b border-white/10 bg-[#0a0a0a] flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-green-500 transition-colors" />
            </div>
            <div className="text-xs text-gray-400 font-mono tracking-wider flex items-center gap-2">
              project_v2_final.mp4 <span className="text-gray-600">•</span> <span className="text-purple-400 animate-pulse-slow">AI Enhancing</span>
            </div>
            <div className="w-12"></div> {/* Spacer for centering */}
          </div>
          
          <div className="flex h-full w-full">
            {/* Interactive Sidebar Panel */}
            <div className="w-64 border-r border-white/5 bg-[#080808] hidden md:flex flex-col p-4 gap-6">
              <div className="h-8 w-28 bg-white/10 rounded flex items-center px-3 text-[10px] text-white/50 font-mono">TOOLS</div>
              
              <div className="flex flex-col gap-2">
                {/* Active Tool */}
                <div className="h-10 w-full bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center px-3 gap-3 cursor-pointer relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                  <div className="w-4 h-4 rounded-full border-2 border-purple-500 border-t-transparent animate-spin"></div>
                  <span className="text-xs text-purple-100 font-medium">Noise Wash (98%)</span>
                </div>
                
                {/* Inactive Tools */}
                <div className="h-10 w-full bg-white/[0.02] border border-white/5 rounded-lg flex items-center px-3 gap-3 hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="w-4 h-4 rounded bg-white/20"></div>
                  <span className="text-xs text-white/60">Auto-Trim Silence</span>
                </div>
                
                <div className="h-10 w-full bg-white/[0.02] border border-white/5 rounded-lg flex items-center px-3 gap-3 hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="w-4 h-4 rounded bg-white/20"></div>
                  <span className="text-xs text-white/60">Generate Captions</span>
                </div>
              </div>
            </div>
            
            {/* Main Area */}
            <div className="flex-1 flex flex-col relative">
              {/* Live Video Preview Area */}
              <div className="flex-1 flex flex-col items-center justify-end bg-gradient-to-b from-[#0a0a0a] to-[#111111] relative overflow-hidden pb-8">
                 
                 {/* Simulated Video Glow */}
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.05] to-transparent"></div>
                 
                 {/* AI Processing Scanning Line Overlay */}
                 <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent shadow-[0_0_20px_#a855f7] animate-pulse"></div>

                 {/* Simulated AI Captions */}
                 <div className="px-6 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg z-10 shadow-2xl flex items-center gap-2 transform transition-transform hover:scale-105 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-white font-medium text-sm tracking-wide">"Flawless audio, cinematic video."</span>
                 </div>
              </div>
              
              {/* Interactive Timeline Editor */}
              <div className="h-40 border-t border-white/5 bg-[#050505] p-4 flex flex-col gap-2 relative">
                
                {/* Time Ruler */}
                <div className="h-4 w-full border-b border-white/10 flex justify-between px-2 text-[9px] text-gray-600 font-mono items-end pb-1">
                  <span>00:00</span><span>00:05</span><span>00:10</span><span>00:15</span><span>00:20</span><span>00:25</span>
                </div>
                
                {/* Tracks Container */}
                <div className="relative w-full h-full flex flex-col gap-2 mt-2">
                  
                  {/* Playhead with scrubbing line */}
                  <div className="absolute top-[-10px] bottom-0 w-[2px] bg-white z-30 shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ left: '45%' }}>
                    <div className="w-3 h-3 bg-white rounded-sm absolute -top-1 -left-[5px] cursor-ew-resize hover:scale-125 transition-transform" />
                  </div>

                  {/* Track 1: Video (Showing cut clip) */}
                  <div className="h-10 w-full bg-white/[0.02] rounded border border-white/5 relative flex items-center">
                     {/* Clip 1 */}
                     <div className="absolute inset-y-1 left-[5%] right-[60%] bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-between px-1">
                       <div className="w-1 h-4 bg-blue-500/50 rounded-full cursor-ew-resize"></div>
                       <span className="text-[9px] text-blue-300/80 font-mono">Clip_01.mp4</span>
                       <div className="w-1 h-4 bg-blue-500/50 rounded-full cursor-ew-resize"></div>
                     </div>
                     {/* Auto-Trimmed Silence Section */}
                     <div className="absolute inset-y-1 left-[40%] right-[45%] border border-red-500/50 rounded flex items-center justify-center bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(239,68,68,0.1)_2px,rgba(239,68,68,0.1)_4px)] group cursor-pointer">
                        <span className="text-[8px] text-red-400 bg-black/80 px-1 rounded opacity-0 group-hover:opacity-100 absolute -top-4 transition-opacity whitespace-nowrap">Silence Trimmed</span>
                     </div>
                     {/* Clip 2 */}
                     <div className="absolute inset-y-1 left-[55%] right-[10%] bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-between px-1">
                       <div className="w-1 h-4 bg-blue-500/50 rounded-full cursor-ew-resize"></div>
                       <span className="text-[9px] text-blue-300/80 font-mono">Clip_02.mp4</span>
                       <div className="w-1 h-4 bg-blue-500/50 rounded-full cursor-ew-resize"></div>
                     </div>
                  </div>

                  {/* Track 2: AI Audio Wash (Matching Video Cuts) */}
                  <div className="h-10 w-full bg-white/[0.02] rounded border border-white/5 relative flex items-center">
                     <div className="absolute inset-y-1 left-[5%] right-[60%] bg-purple-500/20 border border-purple-500/50 rounded flex items-center gap-[2px] px-2 overflow-hidden">
                       {[...Array(25)].map((_, i) => (
                         <div key={i} className="w-[2px] bg-purple-400/70 rounded-full" style={{ height: `${Math.max(20, Math.random() * 80)}%` }} />
                       ))}
                     </div>
                     <div className="absolute inset-y-1 left-[55%] right-[10%] bg-purple-500/20 border border-purple-500/50 rounded flex items-center gap-[2px] px-2 overflow-hidden">
                       {[...Array(25)].map((_, i) => (
                         <div key={i} className="w-[2px] bg-purple-400/70 rounded-full" style={{ height: `${Math.max(20, Math.random() * 80)}%` }} />
                       ))}
                     </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
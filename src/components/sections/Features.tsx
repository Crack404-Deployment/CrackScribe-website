import React from 'react';

export const Features = () => {
  return (
    <section id="features" className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        
        {/* Premium Section Header */}
        <div className="flex flex-col items-center text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-slow"></span>
            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Core Features</span>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Precision engineering. <br />
            <span className="text-gradient-c404">For professional creators.</span>
          </h3>
        </div>

        {/* Animated Bento Box Grid - 6 Dedicated Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[360px]">
          
          {/* Feature 1: AI Noise Wash */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-white/30 flex flex-col justify-between animate-fade-in-up delay-100">
            <div className="relative h-48 w-full bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Simulated Waveform that "cleans up" */}
              <div className="flex items-center gap-1 w-full h-16 justify-center px-10 mb-4">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 bg-purple-400/40 rounded-full transition-all duration-700 group-hover:bg-purple-400"
                    style={{ height: `${Math.random() * 80 + 20}%`, transform: `scaleY(1)` }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mb-4">
                   <div className="w-[70%] h-[2px] bg-purple-400 shadow-[0_0_15px_#a855f7]"></div>
                </div>
              </div>
              
              {/* Intensity Selectors */}
              <div className="flex items-center gap-6 mt-2 relative z-10">
                <div className="flex flex-col items-center gap-1"><div className="w-3 h-3 rounded-full border border-white/40"></div><span className="text-[9px] text-gray-500 uppercase">Light</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#ffffff]"></div><span className="text-[9px] text-white uppercase font-bold">Normal</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-3 h-3 rounded-full border border-white/40"></div><span className="text-[9px] text-gray-500 uppercase">Strong</span></div>
              </div>
            </div>
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-white mb-2 tracking-tight">AI Noise Wash</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">
                Select Light, Normal, or Strong thresholds to isolate vocal frequencies and eliminate wind, static, and background hums instantly.
              </p>
            </div>
          </div>

          {/* Feature 2: Transcribe */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-white/30 flex flex-col justify-between animate-fade-in-up delay-200">
            <div className="relative h-48 w-full bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col items-center justify-center gap-4 border-b border-white/5 px-8">
               
               {/* Real-time transcription UI mockup */}
               <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-4 h-28 relative overflow-hidden flex flex-col gap-2">
                 {/* Sweeping scanline */}
                 <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent to-white/5 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-linear z-0"></div>
                 
                 <div className="w-1/2 h-2 bg-white/10 rounded relative z-10"></div>
                 <div className="w-3/4 h-2 bg-white/10 rounded relative z-10"></div>
                 
                 {/* Text that "appears" on hover */}
                 <div className="flex items-center gap-2 mt-2 relative z-10">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[10px] font-mono text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">Extracting speech...</span>
                 </div>

                 {/* Export Tags */}
                 <div className="flex gap-2 absolute bottom-2 right-3 z-20">
                   <span className="bg-white/5 px-2 py-1 rounded text-[8px] font-bold font-mono text-gray-400">TXT</span>
                   <span className="bg-white/5 px-2 py-1 rounded text-[8px] font-bold font-mono text-gray-400">SRT</span>
                 </div>
               </div>
            </div>
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-white mb-2 tracking-tight">AI Transcribe</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">
                Auto-detect languages and generate highly accurate, searchable transcripts from your audio to export directly as TXT or SRT files.
              </p>
            </div>
          </div>

          {/* Feature 3: AI Video Captions */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-white/30 flex flex-col justify-between animate-fade-in-up delay-300">
            <div className="relative h-48 w-full bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col items-center justify-end pb-4 border-b border-white/5 overflow-hidden gap-2">
              
              {/* Video Skeleton */}
              <div className="w-2/3 h-28 border border-white/10 rounded-t-lg bg-[#0a0a0a] relative flex items-end justify-center pb-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Animated Caption Box sliding up */}
                <div className="px-4 py-2 bg-white text-black text-[12px] font-black rounded translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)] tracking-wide border-2 border-black">
                  AI CAPTIONS
                </div>
              </div>
            </div>
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Add AI Video Captions</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">
                Burn dynamic, AI-generated captions directly into your videos using premium typography presets like Classic, Creator, Minimal, or Bold.
              </p>
            </div>
          </div>

          {/* Feature 4: Trim Silence */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-white/30 flex flex-col justify-between animate-fade-in-up delay-400">
            <div className="relative h-48 w-full bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col items-center justify-center gap-4 border-b border-white/5 px-8">
               {/* UI Sliders */}
               <div className="w-full flex flex-col gap-3">
                 <div className="flex justify-between items-center w-full text-[10px] font-mono text-gray-400">
                   <span>Threshold</span><span className="text-white group-hover:text-red-400 transition-colors">-40 dB</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full relative">
                   <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white rounded-full"></div>
                   <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-1/3 shadow-[0_0_10px_#ffffff]"></div>
                 </div>

                 <div className="flex justify-between items-center w-full text-[10px] font-mono text-gray-400 mt-2">
                   <span>Min Silence</span><span className="text-white">1.0 sec</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full relative">
                   <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-white rounded-full group-hover:w-1/2 transition-all duration-1000"></div>
                   <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-1/4 group-hover:left-1/2 transition-all duration-1000 shadow-[0_0_10px_#ffffff]"></div>
                 </div>
               </div>
            </div>
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Trim Silence</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">
                Visualize dead air instantly. Set custom dB thresholds and durations to automatically ripple-delete awkward pauses in seconds.
              </p>
            </div>
          </div>

          {/* Feature 5: Pro Video Editor */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-white/30 flex flex-col justify-between animate-fade-in-up delay-500">
            <div className="relative h-48 w-full bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col items-center justify-center gap-2 border-b border-white/5">
              {/* Timeline Mockup */}
              <div className="w-4/5 h-6 bg-blue-500/20 rounded-sm border border-blue-500/50 relative overflow-hidden flex items-center justify-between px-2">
                <span className="text-[8px] text-blue-300 font-mono">Video.mp4</span>
                <span className="text-[8px] bg-white/20 px-1 rounded text-white group-hover:bg-white group-hover:text-black transition-colors">1.0x</span>
              </div>
              <div className="w-4/5 h-6 bg-purple-500/20 rounded-sm border border-purple-500/50 flex items-center px-2">
                 <span className="text-[8px] text-purple-300 font-mono">Cleaned_Audio.wav</span>
              </div>
              <div className="w-4/5 h-4 bg-white/5 rounded-sm border border-white/10 relative">
                {/* Playhead */}
                <div className="absolute top-[-25px] bottom-[-5px] w-[2px] bg-white left-[20%] group-hover:left-[80%] transition-all duration-1000 ease-in-out shadow-[0_0_10px_#ffffff] z-20"></div>
              </div>
            </div>
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Pro Video Editor</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">
                A robust non-linear editor allowing you to split clips, adjust playback speed, and layer additional voiceovers, music, text, and logos.
              </p>
            </div>
          </div>

          {/* Feature 6: Format Converter */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-white/30 flex flex-col justify-between animate-fade-in-up delay-600">
            <div className="relative h-48 w-full bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col items-center justify-center gap-4 border-b border-white/5 px-8">
              
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="px-3 py-2 border border-white/20 rounded bg-[#0a0a0a] shadow-lg">
                  <span className="text-xs font-mono font-bold text-gray-300">MP4</span>
                </div>
                
                <div className="w-8 h-[2px] bg-white/20 relative overflow-hidden">
                   <div className="absolute inset-0 bg-green-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
                
                {/* Rolling Export Formats */}
                <div className="px-3 py-2 border border-green-500/50 rounded bg-green-500/10 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                  <div className="h-4 overflow-hidden relative w-8">
                    <div className="absolute top-0 flex flex-col text-xs font-mono font-bold text-green-400 group-hover:-translate-y-[48px] transition-transform duration-1000 ease-in-out">
                      <span className="h-4">MP3</span>
                      <span className="h-4">AAC</span>
                      <span className="h-4">WAV</span>
                      <span className="h-4">M4A</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Slider */}
              <div className="w-full flex flex-col gap-1 mt-2">
                 <div className="flex justify-between items-center w-full text-[9px] font-mono text-gray-500 uppercase">
                   <span>Quality</span><span className="text-white group-hover:text-green-400 transition-colors duration-1000">100%</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
                   <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white/20 to-white rounded-full group-hover:w-full group-hover:to-green-400 transition-all duration-1000"></div>
                 </div>
               </div>
            </div>
            
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Format Converter</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">
                Render your final timeline or convert raw files seamlessly. Supports high-fidelity exports to MP3, AAC, WAV, and M4A with variable quality control.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
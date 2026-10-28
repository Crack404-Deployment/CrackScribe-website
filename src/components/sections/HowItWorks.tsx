"use client";

import React, { useState, useEffect } from 'react';

const featuresWorkflow = [
  {
    id: "noise-wash",
    title: "AI Noise Wash",
    subtitle: "Feature 01",
    description: "The Native Engine analyzes frequencies in real-time, isolating vocals and stripping away wind, hums, and static instantly.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#010507]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,181,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating UI Card */}
        <div className="relative w-[85%] max-w-sm bg-[#020a0d]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl transform transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-2 ring-1 ring-white/5 z-10">
          <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Audio Profile</span>
            <span className="px-2 py-1 rounded bg-[#00f0b5]/10 text-[#00f0b5] text-[10px] font-bold uppercase tracking-wider animate-pulse">Processing</span>
          </div>

          {/* Snappy Waveform */}
          <div className="h-16 flex items-center justify-center gap-1.5 w-full relative">
            {/* Chaotic background wave */}
            <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-30 group-hover:opacity-10 transition-opacity duration-300">
               {[...Array(24)].map((_, i) => <div key={`bg-${i}`} className="w-1.5 bg-gray-500 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>)}
            </div>
            
            {/* Clean foreground wave that snaps into place on hover */}
            <div className="absolute inset-0 flex items-center justify-center gap-1.5 z-10">
               {[...Array(24)].map((_, i) => (
                 <div 
                   key={`fg-${i}`} 
                   className="w-1.5 bg-[#00f0b5] rounded-full transition-all duration-300 ease-out" 
                   style={{ height: '20%' }}
                   // React inline style trick to simulate hover state without complex state management
                   ref={(el) => { if(el) el.style.height = el.closest('.group:hover') ? '20%' : `${Math.max(30, Math.random() * 90)}%` }}
                 ></div>
               ))}
            </div>
            
            {/* Scanning Laser */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_#ffffff] left-0 group-hover:left-full transition-all duration-1000 ease-out z-20"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "transcribe",
    title: "AI Transcribe",
    subtitle: "Feature 02",
    description: "Auto-detect languages and generate highly accurate, searchable transcripts to export directly as TXT or SRT files.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#010507]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,198,221,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative w-[85%] max-w-sm bg-[#020a0d]/90 backdrop-blur-2xl border border-[#00c6dd]/20 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,198,221,0.1)] transform transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-2 ring-1 ring-white/5 z-10">
          
          <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
            <div className="w-8 h-8 rounded-full bg-[#00c6dd]/10 flex items-center justify-center border border-[#00c6dd]/30">
              <svg className="w-4 h-4 text-[#00c6dd]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </div>
            <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Live Output</span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 bg-[#00c6dd] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
            <div className="w-[80%] h-2.5 bg-white/10 rounded-full overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 bg-[#00c6dd] w-0 group-hover:w-full transition-all duration-500 delay-100 ease-out"></div>
            </div>
            <div className="w-[50%] h-2.5 bg-white/10 rounded-full overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 bg-[#00c6dd] w-0 group-hover:w-full transition-all duration-500 delay-200 ease-out"></div>
            </div>
          </div>

          <div className="flex gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 transform translate-y-2 group-hover:translate-y-0">
             <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold rounded">.TXT</span>
             <span className="px-3 py-1 bg-[#00c6dd]/20 text-[#00c6dd] border border-[#00c6dd]/40 text-[10px] font-bold rounded">.SRT</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "captions",
    title: "Add AI Video Captions",
    subtitle: "Feature 03",
    description: "Burn dynamic, AI-generated captions directly into your videos using premium typography presets like Classic, Creator, or Bold.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#010507]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,170,255,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Sleek Video Player Mockup */}
        <div className="relative w-[85%] max-w-sm aspect-[4/5] bg-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out group-hover:scale-[1.02] flex items-end justify-center pb-12 z-10 ring-1 ring-white/5">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
           
           {/* Snappy Caption Element */}
           <div className="relative z-10 px-5 py-2 bg-white text-black text-sm md:text-base font-black rounded tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.5)] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out border-2 border-black rotate-[-2deg]">
             HIGH-IMPACT CAPTIONS.
           </div>
        </div>
      </div>
    )
  },
  {
    id: "trim-silence",
    title: "Trim Silence",
    subtitle: "Feature 04",
    description: "Visualize dead air instantly. Set custom dB thresholds to ripple-delete awkward pauses with precision control.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#010507]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(32,216,186,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative w-[90%] bg-[#020a0d]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl transform transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-2 ring-1 ring-white/5 z-10 flex flex-col gap-6">
          
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Timeline</span>
            <span className="text-[10px] font-mono font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded border border-red-400/20">Detecting Gaps</span>
          </div>

          {/* Snapping Timeline */}
          <div className="w-full h-12 bg-black rounded-lg border border-white/5 flex items-center p-1 relative overflow-hidden">
             {/* Clip 1 */}
             <div className="absolute inset-y-1 left-1 right-[60%] bg-[#20d8ba]/20 border border-[#20d8ba]/40 rounded flex items-center px-2">
               <div className="w-full h-1/2 bg-white/20 rounded-full"></div>
             </div>
             
             {/* Silence Gap (Disappears on hover) */}
             <div className="absolute inset-y-1 left-[41%] right-[41%] bg-red-500/10 border border-red-500/30 rounded flex items-center justify-center group-hover:scale-x-0 group-hover:opacity-0 transition-all duration-300 ease-out origin-center">
                <span className="text-[8px] text-red-500 font-bold tracking-widest hidden md:block">TRIM</span>
             </div>

             {/* Clip 2 (Snaps left on hover) */}
             <div className="absolute inset-y-1 left-[60%] right-1 bg-[#20d8ba]/20 border border-[#20d8ba]/40 rounded flex items-center px-2 group-hover:left-[41%] transition-all duration-300 ease-out">
               <div className="w-full h-1/2 bg-white/20 rounded-full"></div>
             </div>
          </div>

          <div className="w-full h-8 bg-white text-black font-bold text-xs rounded flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            Ripple Delete
          </div>
        </div>
      </div>
    )
  },
  {
    id: "pro-editor",
    title: "Pro Video Editor",
    subtitle: "Feature 05",
    description: "A robust non-linear timeline allowing you to split clips, adjust playback speed, and layer additional voiceovers and music.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#010507]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,136,204,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Sleek Multi-Track Editor UI */}
        <div className="relative w-[90%] bg-[#020a0d]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl transform transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2 ring-1 ring-white/5 z-10 flex flex-col gap-3">
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Workspace</span>
          </div>

          {/* Track 1 */}
          <div className="w-full h-10 bg-blue-500/10 border border-blue-500/30 rounded flex items-center px-3 relative overflow-hidden">
             <span className="text-[9px] font-mono font-bold text-blue-400">MAIN_CAM.MP4</span>
             <div className="absolute left-[30%] -translate-x-1/2 w-4 h-full bg-red-500/20 border-x border-red-500/50"></div>
          </div>
          
          {/* Track 2 */}
          <div className="w-full h-8 bg-purple-500/10 border border-purple-500/30 rounded flex items-center px-3">
             <span className="text-[9px] font-mono font-bold text-purple-400">B_ROLL_01.MP4</span>
          </div>

          {/* Track 3 */}
          <div className="w-full h-8 bg-[#00f0b5]/10 border border-[#00f0b5]/30 rounded flex items-center px-3">
             <span className="text-[9px] font-mono font-bold text-[#00f0b5]">CLEANED_AUDIO.WAV</span>
          </div>

          {/* Rapid Playhead */}
          <div className="absolute top-10 bottom-4 w-[2px] bg-white shadow-[0_0_15px_#ffffff] left-[10%] group-hover:left-[85%] transition-all duration-500 ease-out z-20">
            <div className="w-3 h-3 bg-white rounded-sm absolute -top-1 -left-[5px]"></div>
          </div>

        </div>
      </div>
    )
  },
  {
    id: "format-converter",
    title: "Format Converter",
    subtitle: "Feature 06",
    description: "Export in cinematic formats or convert audio losslessly to MP3, AAC, WAV, or M4A with our variable quality scaler.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#010507]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,181,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative w-[85%] max-w-sm bg-[#020a0d]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl transform transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-2 ring-1 ring-white/5 z-10">
          
          <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block mb-4 border-b border-white/5 pb-4">Export Settings</span>

          <div className="flex items-center justify-between gap-4 w-full">
            {/* Input Format */}
            <div className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-sm font-bold font-mono text-gray-300">MP4</span>
            </div>
            
            {/* Arrow indicating conversion */}
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>

            {/* Output Format (Snaps to selected on hover) */}
            <div className="flex-1 h-12 rounded-xl bg-[#00f0b5]/10 border border-[#00f0b5]/40 flex items-center justify-center overflow-hidden relative shadow-[0_0_20px_rgba(0,240,181,0.1)]">
               <div className="absolute flex flex-col items-center top-0 left-0 right-0 transform translate-y-3 group-hover:-translate-y-[45px] transition-transform duration-300 ease-out">
                 <span className="h-12 flex items-center justify-center text-sm font-bold font-mono text-[#00f0b5]">WAV</span>
                 <span className="h-12 flex items-center justify-center text-sm font-bold font-mono text-[#00f0b5]">MP3</span>
                 <span className="h-12 flex items-center justify-center text-sm font-bold font-mono text-[#00f0b5]">AAC</span>
               </div>
            </div>
          </div>

          <div className="w-full mt-6 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase">
             <span>Quality Slider</span>
             <span className="text-[#00f0b5] font-bold">LOSSLESS</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full mt-2 relative">
             <div className="absolute left-0 top-0 bottom-0 bg-[#00f0b5] w-[40%] group-hover:w-full transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(0,240,181,0.5)]"></div>
          </div>
        </div>
      </div>
    )
  }
];

export const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="how-it-works" className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 lg:px-20 relative z-10 bg-transparent">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/20 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00f0b5] animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.15em] text-[#00f0b5] uppercase font-bold">Interactive Engine</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4 leading-tight">
            See how the <span className="text-gradient-cyan">engine works.</span>
          </h3>
        </div>

        {/* Interactive Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Menu */}
          <div className="w-full lg:w-5/12 flex flex-col gap-3">
            {featuresWorkflow.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  activeIndex === index 
                    ? "bg-[#020a0d]/90 border-[#00f0b5]/40 shadow-[0_10px_30px_rgba(0,240,181,0.1)] backdrop-blur-md scale-[1.02]" 
                    : "bg-transparent border-transparent hover:bg-white/[0.03]"
                }`}
              >
                {/* Active state cyan left-border accent */}
                {activeIndex === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00f0b5] to-[#0088cc] shadow-[0_0_20px_rgba(0,240,181,0.5)]"></div>
                )}
                
                <span className={`text-[10px] font-mono uppercase tracking-widest mb-1.5 block transition-colors ${activeIndex === index ? "text-[#00f0b5] font-bold" : "text-gray-600"}`}>
                  {feature.subtitle}
                </span>
                
                <h4 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  activeIndex === index ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                }`}>
                  {feature.title}
                </h4>
                
                <div className={`grid transition-all duration-300 ease-out ${
                  activeIndex === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Sleek HUD Visual Stage */}
          <div className="w-full lg:w-7/12 sticky top-32">
            
            {/* Edge-to-edge Glassmorphic Canvas (Removed Mac Header) */}
            <div className="w-full aspect-square md:aspect-[4/3] rounded-[2rem] border border-white/10 bg-[#010507] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative transition-all duration-500 group ring-1 ring-white/5">
              
              {/* Dynamic 3D Stage Area */}
              <div key={featuresWorkflow[activeIndex].id} className="flex-1 relative z-10 animate-fade-in-up">
                 {featuresWorkflow[activeIndex].visual}
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
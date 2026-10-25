"use client";

import React, { useState } from 'react';

const featuresWorkflow = [
  {
    id: "noise-wash",
    title: "AI Noise Wash",
    subtitle: "Feature 01",
    description: "The Native Engine analyzes frequencies in real-time, isolating vocals and stripping away wind, hums, and static instantly.",
    visual: (
      <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/15 to-transparent"></div>
        
        {/* Advanced Processing Ring */}
        <div className="w-40 h-40 rounded-full border-2 border-white/5 relative flex items-center justify-center mb-8 animate-fade-in-up">
          {/* Inner glowing spin */}
          <div className="absolute inset-2 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin z-10"></div>
          {/* Outer dotted spin */}
          <div className="absolute -inset-4 rounded-full border border-dashed border-white/20 animate-[spin_10s_linear_infinite] opacity-50"></div>
          
          <div className="flex flex-col items-center z-20">
            <svg className="w-8 h-8 text-white mb-1 shadow-lg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <span className="text-white text-2xl font-black tracking-tighter">74%</span>
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex flex-col items-center justify-center animate-fade-in-up delay-100 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20">
          <span className="text-white text-sm font-medium tracking-wide">Isolating vocal frequencies...</span>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            <span className="text-green-400 text-[10px] font-mono uppercase tracking-wider">Native Engine Active</span>
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
      <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex flex-col items-center justify-center relative overflow-hidden p-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent"></div>
        
        {/* Real-time transcription UI mockup */}
        <div className="w-full max-w-sm bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col gap-4 shadow-2xl animate-fade-in-up">
          {/* Sweeping scanline */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent to-white/5 -translate-x-full animate-[scan_2s_ease-in-out_infinite] z-0"></div>
          
          <div className="flex items-center justify-between z-10 border-b border-white/10 pb-3">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
               <span className="text-[10px] font-mono text-gray-300">Extracting speech...</span>
             </div>
             <span className="text-[10px] font-mono text-gray-500">00:33</span>
          </div>

          <div className="flex flex-col gap-3 z-10">
            <div className="w-full h-3 bg-white/10 rounded overflow-hidden relative"><div className="absolute inset-0 bg-white/20 w-3/4 animate-pulse-slow"></div></div>
            <div className="w-4/5 h-3 bg-white/10 rounded overflow-hidden relative"><div className="absolute inset-0 bg-white/20 w-1/2 animate-pulse-slow delay-100"></div></div>
            <div className="w-2/3 h-3 bg-white/10 rounded"></div>
          </div>

          {/* Export Tags */}
          <div className="flex gap-3 mt-4 z-20">
            <span className="bg-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono text-white border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">Export TXT</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono text-white border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">Export SRT</span>
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
      <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex flex-col items-center justify-end pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 to-transparent"></div>
        
        {/* Cinematic Video Player Skeleton */}
        <div className="w-4/5 aspect-video border border-white/10 rounded-2xl bg-black relative flex items-end justify-center pb-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in-up">
          {/* Subtle video background texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          
          {/* Animated Caption */}
          <div className="px-6 py-2.5 bg-white text-black text-sm md:text-base font-black rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] tracking-wide border-2 border-black animate-fade-in-up delay-300 z-10 transform -rotate-1">
            CINEMATIC AI CAPTIONS.
          </div>
        </div>
        
        {/* Transcription Controls */}
        <div className="w-4/5 mt-6 flex justify-between items-center animate-fade-in-up delay-100">
           <div className="flex gap-2">
             <div className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-md text-[10px] font-mono text-white">English (Auto)</div>
             <div className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-md text-[10px] font-mono text-white">Creator Style</div>
           </div>
           <div className="flex gap-2">
             <span className="text-[9px] font-bold text-gray-500 bg-[#111] px-2 py-1 rounded border border-white/5">CC ENABLED</span>
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
      <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex flex-col items-center justify-center gap-8 px-12 relative overflow-hidden">
        
        {/* Waveform Preview with scanning line */}
        <div className="w-full bg-[#111] border border-white/10 p-5 rounded-2xl flex flex-col gap-2 shadow-2xl animate-fade-in-up relative overflow-hidden">
           <div className="text-[9px] font-mono text-gray-500 mb-1">ANALYZING WAVEFORM</div>
           <div className="flex items-center gap-[3px] w-full h-12 relative z-10">
             {[...Array(12)].map((_,i) => <div key={`w1-${i}`} className="flex-1 bg-white/80 rounded-full" style={{height: `${Math.max(20, Math.random()*100)}%`}}></div>)}
             {/* Highlighted Silence */}
             {[...Array(8)].map((_,i) => <div key={`w2-${i}`} className="flex-1 bg-red-500/60 rounded-full border border-red-500/80" style={{height: '15%'}}></div>)}
             {[...Array(15)].map((_,i) => <div key={`w3-${i}`} className="flex-1 bg-white/80 rounded-full" style={{height: `${Math.max(20, Math.random()*100)}%`}}></div>)}
           </div>
           {/* Scanning effect */}
           <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-scan z-0"></div>
        </div>

        {/* Premium Sliders */}
        <div className="w-full flex flex-col gap-6 animate-fade-in-up delay-100">
           <div className="flex flex-col gap-2">
             <div className="flex justify-between items-center w-full">
               <span className="text-xs text-gray-400 font-medium">Silence Threshold</span>
               <span className="text-xs text-white font-mono bg-white/10 px-2 py-0.5 rounded">-40 dB</span>
             </div>
             <div className="w-full h-2 bg-[#111] border border-white/5 rounded-full relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-gray-600 to-white rounded-full"></div>
             </div>
           </div>
           
           <button className="w-full py-3.5 bg-white text-black text-sm font-bold rounded-xl mt-2 hover:bg-gray-200 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
             Trim Detected Silence
           </button>
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
      <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex flex-col items-center justify-center relative overflow-hidden p-6 gap-2">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent"></div>
        
        <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 shadow-2xl animate-fade-in-up flex flex-col gap-4">
          
          {/* Track 1: Video */}
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">Video Track</span>
            <div className="w-full h-10 bg-white/5 rounded border border-white/10 relative flex items-center">
              <div className="absolute left-0 right-[40%] h-full bg-blue-500/20 border-r border-blue-500/50 flex items-center px-2">
                 <span className="text-[10px] text-blue-300 font-mono truncate">main_cam.mp4</span>
              </div>
              <div className="absolute left-[60%] right-0 h-full bg-blue-500/20 flex items-center px-2">
                 <span className="text-[10px] text-blue-300 font-mono truncate">b_roll.mp4</span>
              </div>
              {/* Split tool indicator */}
              <div className="absolute left-[60%] -translate-x-1/2 w-4 h-4 bg-red-500 rounded flex items-center justify-center shadow-[0_0_10px_#ef4444] z-10">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
              </div>
            </div>
          </div>

          {/* Track 2: Audio */}
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">Audio Track</span>
            <div className="w-full h-8 bg-white/5 rounded border border-white/10 relative flex items-center px-2">
              <div className="w-full h-full bg-purple-500/20 rounded flex items-center px-2">
                 <span className="text-[10px] text-purple-300 font-mono">cleaned_voiceover.wav</span>
              </div>
            </div>
          </div>

          {/* Animated Playhead */}
          <div className="absolute top-2 bottom-2 w-[2px] bg-white shadow-[0_0_15px_#ffffff] animate-scan z-20">
            <div className="w-3 h-3 bg-white rounded-sm absolute -top-1 -left-[5px]"></div>
          </div>
        </div>
        
        {/* Editor Controls */}
        <div className="flex gap-4 mt-4 animate-fade-in-up delay-100 z-10">
          <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold text-white flex gap-2 items-center hover:bg-white/20 cursor-pointer transition-colors border border-white/10"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879" /></svg> Split</div>
          <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold text-white flex gap-2 items-center hover:bg-white/20 cursor-pointer transition-colors border border-white/10"><span className="text-green-400">1.0x</span> Speed</div>
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
      <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex flex-col items-center justify-center relative overflow-hidden p-8">
        
        {/* Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-64 h-64 rounded-full border border-white/20"></div>
          <div className="absolute w-48 h-48 rounded-full border border-white/30"></div>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-6 relative z-10 animate-fade-in-up">
           
           {/* Format Selector */}
           <div className="w-full bg-[#111] border border-white/10 rounded-xl p-4 flex flex-col gap-3">
             <span className="text-[10px] font-mono text-gray-500">OUTPUT FORMAT</span>
             <div className="grid grid-cols-4 gap-2">
                {['MP4', 'MP3', 'WAV', 'AAC'].map((ext, i) => (
                  <div key={ext} className={`py-2 flex items-center justify-center rounded-lg text-xs font-bold font-mono transition-colors ${i === 0 ? 'bg-white text-black' : 'bg-white/5 text-gray-400 border border-white/10'}`}>
                    {ext}
                  </div>
                ))}
             </div>
           </div>

           {/* Export Modal Replica */}
           <div className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
             <div className="w-10 h-10 border-4 border-white/10 border-t-green-400 rounded-full animate-spin mb-4"></div>
             <span className="text-white text-base font-bold tracking-tight">Checking Encoders...</span>
             <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 bg-green-400 w-1/3 rounded-full animate-[scan_2s_ease-in-out_infinite]"></div>
             </div>
           </div>

        </div>
      </div>
    )
  }
];

export const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="how-it-works" className="py-32 px-6 relative z-10 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow"></span>
            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Interactive Visualizer</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See how the engine works.
          </h3>
        </div>

        {/* Interactive Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Menu */}
          <div className="w-full lg:w-5/12 flex flex-col gap-3">
            {featuresWorkflow.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  activeIndex === index 
                    ? "bg-white/[0.04] border-white/20 shadow-lg" 
                    : "bg-transparent border-transparent hover:bg-white/[0.02]"
                }`}
              >
                {/* Active state subtle background glow */}
                {activeIndex === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-gray-500 shadow-[0_0_15px_#ffffff]"></div>
                )}
                
                <span className={`text-[10px] font-mono uppercase tracking-widest mb-1 block transition-colors ${activeIndex === index ? "text-gray-400" : "text-gray-600"}`}>
                  {feature.subtitle}
                </span>
                
                <h4 className={`text-xl font-bold transition-colors duration-300 ${
                  activeIndex === index ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                }`}>
                  {feature.title}
                </h4>
                
                <div className={`grid transition-all duration-500 ease-in-out ${
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

          {/* Right Column: Animated Visual Stage */}
          <div className="w-full lg:w-7/12 sticky top-32">
            {/* The "Mac Window" wrapper */}
            <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative transition-all duration-500 hover:border-white/20 group">
              
              {/* Subtle hover glow on the entire window */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none"></div>

              {/* Window Header */}
              <div className="w-full h-12 border-b border-white/10 bg-[#080808] flex items-center px-5 gap-2 backdrop-blur-xl z-20">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-red-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-yellow-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-green-500 transition-colors cursor-pointer" />
                <div className="ml-4 text-xs text-gray-500 font-mono flex items-center gap-2">
                  CrackScribe Studio <span className="text-gray-700">|</span> <span className="text-gray-400">{featuresWorkflow[activeIndex].title}</span>
                </div>
              </div>

              {/* Dynamic Stage Area */}
              <div key={featuresWorkflow[activeIndex].id} className="flex-1 relative z-10">
                 {featuresWorkflow[activeIndex].visual}
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
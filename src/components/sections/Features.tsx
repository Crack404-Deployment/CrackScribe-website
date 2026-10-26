"use client";

import React, { useEffect, useRef, useState } from 'react';

export const Features = () => {
  // Simple intersection observer to trigger animations on scroll
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set());
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const featureIndex = Number(entry.target.getAttribute('data-index'));
          setVisibleFeatures(prev => new Set(prev).add(featureIndex));
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.feature-block');
    elements.forEach(el => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 md:py-32 px-4 md:px-12 lg:px-20 relative z-10 overflow-hidden bg-transparent">
      
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_left,_rgba(0,240,181,0.05),transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_right,_rgba(0,136,204,0.05),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- MAIN AI FEATURES (Alternating Blocks) --- */}
        <div className="flex flex-col gap-32 md:gap-48 mb-40">
          
          {/* 01: AI Noise Wash */}
          <div data-index={1} className={`feature-block flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-1000 ${visibleFeatures.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0b5] animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#00f0b5] uppercase font-bold">01 · AI AUDIO</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">AI Noise Wash</h3>
              <h4 className="text-xl md:text-2xl font-medium text-gradient-cyan mb-6">Less Noise. More Clarity.</h4>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8 text-balance">
                Remove distracting background sounds and bring the important parts of your recording into focus. CrackScribe's AI Noise Wash helps reduce background hums, wind, and crowd noise, with adjustable noise-reduction levels.
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {['Light, Normal, and Strong modes', 'Import media or record new audio', 'Preview the processed result and save it to your device'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                    <svg className="w-5 h-5 text-[#00f0b5] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2 group">
                Clean Your Audio 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
            
            {/* Animated Visual */}
            <div className="flex-1 w-full relative aspect-square max-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0b5]/10 to-transparent rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col items-center justify-center group">
                {/* Scanning Laser */}
                <div className="absolute w-full h-[2px] bg-[#00f0b5] shadow-[0_0_30px_#00f0b5] animate-scan z-20"></div>
                {/* Waveform before & after simulation */}
                <div className="flex items-center gap-1.5 md:gap-2 h-32 px-12 z-10 w-full justify-center">
                  {[...Array(40)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 md:w-2 bg-[#00f0b5] rounded-full transition-all duration-700 ease-in-out group-hover:h-2"
                      style={{ height: `${Math.random() * 80 + 20}%`, opacity: Math.random() * 0.5 + 0.5 }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-10 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-[#00f0b5]/30 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00f0b5] animate-pulse"></div>
                  <span className="text-[10px] font-mono text-[#00f0b5] uppercase tracking-widest font-bold">Isolating Frequencies</span>
                </div>
              </div>
            </div>
          </div>

          {/* 02: AI Transcription (Reversed Layout) */}
          <div data-index={2} className={`feature-block flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-1000 ${visibleFeatures.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            {/* Animated Visual */}
            <div className="flex-1 w-full relative aspect-square max-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#00c6dd]/10 to-transparent rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 group">
                <div className="w-full max-w-sm bg-[#020a0d]/90 backdrop-blur-xl border border-[#00c6dd]/30 rounded-2xl p-6 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <div className="w-8 h-8 rounded-full bg-[#00c6dd]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#00c6dd]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    </div>
                    <span className="text-xs font-mono text-[#00c6dd] uppercase tracking-widest">Live Transcript</span>
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-3 bg-white/5 rounded overflow-hidden"><div className="w-[85%] h-full bg-[#00c6dd] animate-pulse"></div></div>
                    <div className="w-[90%] h-3 bg-white/5 rounded overflow-hidden"><div className="w-[60%] h-full bg-[#00c6dd] animate-pulse delay-100"></div></div>
                    <div className="w-[75%] h-3 bg-white/5 rounded overflow-hidden"><div className="w-[40%] h-full bg-[#00c6dd] animate-pulse delay-200"></div></div>
                  </div>
                  <div className="mt-8 flex gap-2">
                    <span className="text-[10px] font-mono font-bold text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">.TXT</span>
                    <span className="text-[10px] font-mono font-bold text-[#00c6dd] bg-[#00c6dd]/10 px-3 py-1.5 rounded-lg border border-[#00c6dd]/30">.SRT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00c6dd]/10 border border-[#00c6dd]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c6dd] animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#00c6dd] uppercase font-bold">02 · SPEECH AI</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">AI Transcription</h3>
              <h4 className="text-xl md:text-2xl font-medium text-gradient-cyan mb-6">Turn Conversations Into Text.</h4>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8 text-balance">
                Convert spoken words into written text with CrackScribe's speech-to-text tools. Choose a supported speech language and an available AI model to fit your needs.
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {['Speech-to-text conversion', 'Language selection', 'Downloadable offline models for supported transcription workflows', 'An optional High Accuracy mode for challenging audio'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                    <svg className="w-5 h-5 text-[#00c6dd] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2 group">
                Transcribe Your Audio 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>

          {/* 03: AI Captions for Video */}
          <div data-index={3} className={`feature-block flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-1000 ${visibleFeatures.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00aaff]/10 border border-[#00aaff]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#00aaff] uppercase font-bold">03 · AI VIDEO</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">AI Captions for Video</h3>
              <h4 className="text-xl md:text-2xl font-medium text-gradient-cyan mb-6">Your Words, On Screen.</h4>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8 text-balance">
                Make spoken content easier to follow with AI-powered video captioning. Turn speech into captions and prepare videos for viewers who prefer reading along or watching without sound.
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {['AI-assisted caption creation', 'A dedicated Add Captions to Video workflow', 'A more accessible viewing experience', 'Ideal for short-form videos and social content'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                    <svg className="w-5 h-5 text-[#00aaff] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2 group">
                Create Video Captions
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
            
            {/* Animated Visual */}
            <div className="flex-1 w-full relative aspect-square max-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00aaff]/10 to-transparent rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col items-center justify-end p-8 group">
                {/* Video Frame Mockup */}
                <div className="w-[85%] aspect-[9/16] max-h-full bg-black border border-white/10 rounded-2xl relative overflow-hidden shadow-2xl flex flex-col items-center justify-end pb-12 group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,170,255,0.2),transparent)]"></div>
                  
                  {/* Dynamic Caption Element */}
                  <div className="relative z-10 px-5 py-2.5 bg-white text-black text-sm md:text-base font-black rounded-lg tracking-widest shadow-[0_0_30px_rgba(0,170,255,0.5)] rotate-[-2deg] animate-pulse-slow">
                    YOUR WORDS, ON SCREEN.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 04: Smart Automation / Trim Silence (Reversed Layout) */}
          <div data-index={4} className={`feature-block flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-1000 ${visibleFeatures.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            {/* Animated Visual */}
            <div className="flex-1 w-full relative aspect-square max-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#20d8ba]/10 to-transparent rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 group">
                <div className="w-full bg-[#020a0d]/90 backdrop-blur-xl border border-[#20d8ba]/30 rounded-2xl p-6 shadow-2xl">
                   <div className="flex justify-between items-center mb-6">
                     <span className="text-xs font-mono text-[#20d8ba] uppercase tracking-widest">Audio Timeline</span>
                     <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">Threshold: -40dB</span>
                   </div>
                   
                   {/* Timeline Mockup */}
                   <div className="relative h-12 w-full bg-black/50 rounded-lg border border-white/5 flex items-center p-1 overflow-hidden">
                     {/* Clip 1 */}
                     <div className="absolute inset-y-1 left-1 right-[55%] bg-[#20d8ba]/30 rounded border border-[#20d8ba]/50"></div>
                     {/* Red Trim Indicator (Simulates removing silence) */}
                     <div className="absolute inset-y-1 left-[46%] right-[40%] bg-red-500/20 border border-red-500/50 rounded flex items-center justify-center group-hover:w-0 group-hover:opacity-0 transition-all duration-1000">
                        <span className="text-[8px] font-bold text-red-500 font-mono">CUT</span>
                     </div>
                     {/* Clip 2 (Slides over on hover to fill gap) */}
                     <div className="absolute inset-y-1 left-[62%] right-1 bg-[#20d8ba]/30 rounded border border-[#20d8ba]/50 group-hover:left-[47%] transition-all duration-1000 ease-in-out"></div>
                   </div>
                   
                   <div className="mt-6 flex justify-center">
                     <div className="w-12 h-12 rounded-full border-2 border-[#20d8ba]/30 border-t-[#20d8ba] animate-spin"></div>
                   </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#20d8ba]/10 border border-[#20d8ba]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20d8ba] animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#20d8ba] uppercase font-bold">04 · SMART AUTOMATION</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">Automatic Silence Trimming</h3>
              <h4 className="text-xl md:text-2xl font-medium text-gradient-cyan mb-6">Keep the Content. Cut the Dead Air.</h4>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8 text-balance">
                Unnecessary pauses can make recordings feel longer than they need to be. CrackScribe's Trim Silence tool helps remove silent sections and create a tighter, more focused result.
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {['Reduce unwanted pauses', 'Streamline recordings', 'Prepare content for editing or sharing', 'Spend less time manually searching through clips'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                    <svg className="w-5 h-5 text-[#20d8ba] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2 group">
                Trim the Silence
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>

        </div>


        {/* --- SUPPORTING CREATIVE TOOLS (Secondary Grid) --- */}
        <div className="pt-20 border-t border-white/10 relative">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
              Supporting creative tools
            </h3>
            <p className="text-gray-500 text-sm md:text-base font-light max-w-xl">
              Essential post-production utilities to finalize your media, neatly integrated alongside your AI tools.
            </p>
          </div>

          {/* 3-Column Grid Layout (Using 2 columns, leaving space to match request layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Supporting Tool 1: Video Editor */}
            <div className="group relative rounded-2xl border border-white/10 bg-[#050505]/60 backdrop-blur-md p-6 lg:p-8 flex flex-col hover:border-white/30 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-fade-in-up lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Video Editor</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Refine your videos after processing. Arrange clips on a timeline, crop footage, add text and logos, apply filters, include voiceovers or music, and export your finished edit.
              </p>
            </div>

            {/* Supporting Tool 2: Format Converter */}
            <div className="group relative rounded-2xl border border-white/10 bg-[#050505]/60 backdrop-blur-md p-6 lg:p-8 flex flex-col hover:border-white/30 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-fade-in-up delay-100 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Format Converter</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Convert supported media files into compatible formats for your next step. Keep everyday media preparation alongside your AI-powered tools.
              </p>
            </div>

            {/* Blank 3rd column placeholder to respect the 3-column desktop grid request, 
                you can add a future feature here or let it naturally fill the space. */}
             <div className="hidden lg:flex items-center justify-center rounded-2xl border border-dashed border-white/10 bg-transparent p-6 animate-fade-in-up delay-200 lg:col-span-1 opacity-50">
               <span className="text-xs font-mono text-gray-600 uppercase tracking-widest text-center">More Tools <br/>Coming Soon</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
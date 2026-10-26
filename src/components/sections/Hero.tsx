"use client";

import React, { useState, useEffect } from 'react';

const aiFeatures = [
  { 
    id: 'noise', 
    title: 'Noise Wash', 
    desc: 'Isolate vocals and remove background hums instantly.', 
    color: 'from-[#00f0b5] to-[#0088cc]', 
    glow: 'bg-[#00f0b5]',
    thumbnail: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=800&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  { 
    id: 'transcribe', 
    title: 'Transcribe', 
    desc: 'Convert speech to text with high accuracy in seconds.', 
    color: 'from-[#00c6dd] to-[#0077aa]', 
    glow: 'bg-[#00c6dd]',
    thumbnail: 'https://images.unsplash.com/photo-1516280440502-a27dd2e1e075?q=80&w=800&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  { 
    id: 'captions', 
    title: 'AI Captions', 
    desc: 'Burn dynamic, creator-style subtitles into your videos.', 
    color: 'from-[#00aaff] to-[#0055ff]', 
    glow: 'bg-[#00aaff]',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  { 
    id: 'trim', 
    title: 'Trim Silence', 
    desc: 'Automatically ripple-delete dead air and awkward pauses.', 
    color: 'from-[#20d8ba] to-[#159a85]', 
    glow: 'bg-[#20d8ba]',
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c746a51d02?q=80&w=800&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
] as const;

type FeatureId = typeof aiFeatures[number]['id'];

export const Hero = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureId>('noise');
  const [isHovering, setIsHovering] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<FeatureId | null>(null);

  // Auto-cycle features for the 3D smartphone showcase
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveFeature(prev => {
        const currentIndex = aiFeatures.findIndex(f => f.id === prev);
        return aiFeatures[(currentIndex + 1) % aiFeatures.length].id;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovering]);

  const activeColor = aiFeatures.find(f => f.id === activeFeature)?.glow || 'bg-[#00f0b5]';

  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-20 min-h-screen overflow-hidden bg-transparent">
      
      {/* Background Grid & Base Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] -z-10 pointer-events-none"></div>

      {/* TOP SPLIT HERO AREA */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        
        {/* Left Column: Text & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          
          <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black tracking-tighter leading-[1.05] mb-6 text-white animate-fade-in-up">
            Let AI Handle <br className="hidden lg:block" /> the Busywork. <br className="hidden lg:block" />
            <span className="text-gradient-cyan">You Create.</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed font-light animate-fade-in-up delay-100">
            Clean noisy audio, turn speech into text, generate cinematic captions, and trim silence natively on your phone. Professional-grade video editing, zero desktop required.
          </p>

          {/* Mini Stats Row */}
          <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-12 mb-10 animate-fade-in-up delay-200 w-full">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00f0b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                4+
              </span>
              <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">AI Engines</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00c6dd]" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
                100%
              </span>
              <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">Offline Ready</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00aaff]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                4K
              </span>
              <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">Export Qual</span>
            </div>
          </div>

          {/* Authentic Google Play Store Button */}
          <div className="animate-fade-in-up delay-300 relative">
            <div className="absolute inset-0 bg-[#00f0b5] blur-[30px] opacity-20 rounded-full"></div>
            
            <a href="#" className="relative flex items-center justify-center gap-3 bg-black hover:bg-[#0a0a0a] border border-gray-700 hover:border-gray-500 px-6 py-2.5 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group overflow-hidden w-fit">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <svg className="w-8 h-8 relative z-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6 23.5C24.5 25.7 23.3 29.5 23.3 34.6V477.4C23.3 482.5 24.5 486.3 26.6 488.5L27.6 489.4L259.9 257.1V254.8L27.6 22.5L26.6 23.5Z" fill="#3D82F8"/>
                <path d="M337.3 334.6L259.9 257.2V254.9L337.3 177.5L338.5 178.2L426.6 228.3C451.7 242.6 451.7 266 426.6 280.3L338.5 333.9L337.3 334.6Z" fill="#F8B101"/>
                <path d="M338.5 333.9L259.9 255.3L26.6 488.6C33.8 495.8 45.4 496.7 58.7 489.2L338.5 333.9Z" fill="#DF2F37"/>
                <path d="M338.5 178.2L58.7 22.9C45.4 15.4 33.8 16.3 26.6 23.5L259.9 256.8L338.5 178.2Z" fill="#4BBA61"/>
              </svg>

              <div className="flex flex-col items-start justify-center relative z-10 pt-0.5">
                <span className="text-[10px] uppercase font-bold text-gray-300 tracking-wide leading-none mb-0.5">GET IT ON</span>
                <span className="text-[20px] font-sans font-medium text-white tracking-tight leading-none">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[500px] animate-fade-in-up delay-300">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40 pointer-events-none -z-10">
            <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] transition-colors duration-1000 ${activeColor}`}></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-600 blur-[100px]"></div>
          </div>

          {/* Interactive Smartphone */}
          <div 
            className="relative w-[260px] md:w-[300px] aspect-[9/19.5] bg-black rounded-[3rem] border-[8px] border-[#0c181d] shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-1000 ease-out transform lg:rotate-y-[-10deg] hover:rotate-y-0 hover:scale-105"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0c181d] rounded-b-2xl z-50 flex items-center justify-center gap-2 shadow-inner">
              <div className="w-10 h-3 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>

            <div className="absolute inset-0 bg-[#050505] flex flex-col">
              <div className="h-16 w-full flex items-end justify-center pb-3 border-b border-white/5 bg-gradient-to-b from-black to-transparent">
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">CrackScribe</span>
              </div>

              <div className="relative flex-1 w-full bg-[#020202] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                <div className={`absolute inset-0 transition-colors duration-1000 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-transparent ${activeColor}/20`}></div>

                <div className="w-full h-full flex flex-col items-center justify-center relative">
                  
                  {activeFeature === 'noise' && (
                    <div className="flex flex-col items-center gap-4 animate-fade-in-up">
                      <div className="flex items-end gap-1.5 h-12">
                        {[...Array(15)].map((_, i) => (
                          <div key={i} className="w-1.5 bg-[#00f0b5] rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 100}ms` }} />
                        ))}
                      </div>
                      <span className="text-[#00f0b5] text-[10px] font-mono font-bold uppercase tracking-widest">Noise Wash Active</span>
                    </div>
                  )}

                  {activeFeature === 'transcribe' && (
                    <div className="w-4/5 bg-black/80 border border-[#00c6dd]/40 rounded-xl p-4 animate-fade-in-up">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#00c6dd] animate-pulse"></div>
                        <span className="text-[9px] font-mono text-[#00c6dd] uppercase tracking-widest">Transcribing</span>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-1.5 bg-white/20 rounded"><div className="w-3/4 h-full bg-[#00c6dd]"></div></div>
                        <div className="w-5/6 h-1.5 bg-white/20 rounded"><div className="w-1/2 h-full bg-[#00c6dd]"></div></div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 'captions' && (
                    <div className="px-4 py-2 bg-white text-black text-xs font-black rounded shadow-[0_0_30px_rgba(255,255,255,0.4)] rotate-[-2deg] animate-fade-in-up">
                      CINEMATIC CAPTIONS
                    </div>
                  )}

                  {activeFeature === 'trim' && (
                    <div className="flex flex-col items-center gap-3 animate-fade-in-up">
                      <div className="w-16 h-16 rounded-full border-2 border-[#20d8ba]/20 border-t-[#20d8ba] animate-spin shadow-[0_0_20px_rgba(32,216,186,0.3)]"></div>
                      <span className="text-[#20d8ba] text-[9px] font-mono font-bold uppercase tracking-widest">Trimming</span>
                    </div>
                  )}

                </div>
              </div>

              <div className="h-32 bg-[#03090c] border-t border-white/5 flex flex-col relative px-3 py-2">
                 <div className="h-4 w-full flex justify-between text-[7px] text-gray-500 font-mono items-center border-b border-white/5 mb-1">
                   <span>00:00</span><span>00:15</span><span>00:30</span>
                 </div>
                 <div className="absolute top-0 bottom-2 w-[1px] bg-white z-30 left-[50%] shadow-[0_0_10px_#ffffff]"></div>
                 <div className="flex-1 flex flex-col gap-1.5 relative overflow-hidden mt-1">
                   <div className="h-6 w-full bg-white/[0.02] rounded border border-white/5 relative flex items-center p-0.5">
                     <div className="absolute inset-y-0.5 left-0 right-[52%] bg-blue-500/20 border border-blue-500/30 rounded-sm"></div>
                     <div className={`absolute inset-y-0.5 left-[54%] right-0 bg-blue-500/20 border border-blue-500/30 rounded-sm transition-all duration-500 ${activeFeature === 'trim' ? 'opacity-40 translate-x-2' : 'opacity-100'}`}></div>
                   </div>
                   <div className={`h-6 w-full rounded border relative flex items-center px-1 overflow-hidden transition-colors duration-700 ${activeFeature === 'noise' ? 'bg-[#00f0b5]/10 border-[#00f0b5]/30' : 'bg-white/[0.02] border-white/5'}`}></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS GRID (Reels / Vertical Video Previews) */}
      <div className="max-w-7xl mx-auto mt-32 relative z-10 border-t border-white/10 pt-20">
        
        <div className="flex flex-col items-center lg:items-start mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2 text-center lg:text-left">
            Powerful features designed <br className="hidden md:block" />
            for <span className="text-[#00f0b5]">creators and videographers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              className={`group relative rounded-2xl border bg-[#050505] p-5 cursor-pointer transition-all duration-500 overflow-hidden animate-fade-in-up ${activeFeature === feature.id ? 'border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)]' : 'border-white/10 hover:border-white/20 hover:bg-[#0a0a0a]'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Media Container: Vertical 9:16 Aspect Ratio for Reels Content */}
              <div className="w-full aspect-[9/16] rounded-xl mb-5 relative overflow-hidden bg-black border border-white/5 shadow-inner">
                {playingVideoId === feature.id ? (
                  // Active Playing Video
                  <video
                    src={feature.video}
                    autoPlay
                    controls
                    className="w-full h-full object-cover animate-fade-in-up"
                    style={{ animationDuration: '0.3s' }}
                  />
                ) : (
                  // Thumbnail Image State
                  <>
                    <img 
                      src={feature.thumbnail} 
                      alt={feature.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                    {/* Play Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVideoId(feature.id);
                        setActiveFeature(feature.id); // Sync the top hero model
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-[#00f0b5]/90 group-hover:border-transparent transition-all duration-300 shadow-xl"
                    >
                      <svg className="w-6 h-6 text-white ml-1 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    
                    {/* Thumbnail Watermark Category */}
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold text-white uppercase tracking-wider">
                      {feature.title}
                    </div>
                  </>
                )}
              </div>

              <div className="relative z-10 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-600 font-mono">
                  <svg className="w-3 h-3 text-[#00f0b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  Used by 45K+ Creators
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
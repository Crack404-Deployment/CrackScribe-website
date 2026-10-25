"use client";

import React, { useState } from 'react';

// Advanced Data Model supporting YouTube, local files, and aspect ratios
type VideoRatio = '16:9' | '9:16';
type VideoSourceType = 'local' | 'youtube';

interface TutorialVideo {
  id: number;
  title: string;
  duration: string;
  category: string;
  type: VideoSourceType;
  url: string;
  aspectRatio: VideoRatio;
}

// Simulated Backend Data
const tutorialVideos: TutorialVideo[] = [
  { 
    id: 1, 
    title: "Auto-Trim Silence in 1 Click", 
    duration: "2:45", 
    category: "Editing",
    type: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Example YouTube URL
    aspectRatio: "16:9"
  },
  { 
    id: 2, 
    title: "Exporting for TikTok & Reels", 
    duration: "0:59", 
    category: "Social",
    type: "local",
    url: "https://www.w3schools.com/html/mov_bbb.mp4", // Example Local Video
    aspectRatio: "9:16" // Vertical Video
  },
  { 
    id: 3, 
    title: "Using Noise Wash for Voiceovers", 
    duration: "3:30", 
    category: "Audio",
    type: "local",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    aspectRatio: "16:9"
  },
  { 
    id: 4, 
    title: "Generating AI Captions (Shorts)", 
    duration: "1:15", 
    category: "AI Tools",
    type: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    aspectRatio: "9:16"
  },
];

export const MediaShowcase = () => {
  const [isMainPlaying, setIsMainPlaying] = useState(false);
  const [activeModalVideo, setActiveModalVideo] = useState<TutorialVideo | null>(null);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="media" className="py-32 px-6 relative z-10 bg-[#020202]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></span>
            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Live Demos</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Master your workflow.
          </h3>
          <p className="text-gray-400 max-w-2xl font-light">
            Watch how creators are transforming their audio and video in minutes using CrackScribe's AI tools.
          </p>
        </div>

        {/* Featured Promo Video Player (Always 16:9) */}
        <div className="mb-24 group relative rounded-3xl border border-white/10 bg-[#050505] p-2 backdrop-blur-md overflow-hidden animate-fade-in-up delay-100 shadow-2xl mx-auto max-w-5xl">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-sm pointer-events-none"></div>
          
          <div className="relative aspect-[16/9] w-full rounded-2xl bg-[#0a0a0a] overflow-hidden flex items-center justify-center border border-white/5">
            {!isMainPlaying ? (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group/play"
                onClick={() => setIsMainPlaying(true)}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.08] to-black opacity-90 transition-opacity duration-500 group-hover/play:opacity-100"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-6 transition-transform duration-500 group-hover/play:scale-110">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] relative overflow-hidden">
                    <div className="absolute inset-0 rounded-full border border-white/30 animate-pulse-slow"></div>
                    <div className="absolute inset-0 bg-white/5 group-hover/play:bg-white/20 transition-colors duration-300"></div>
                    <svg className="w-10 h-10 text-white ml-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-mono text-sm tracking-widest font-bold bg-black/50 px-4 py-2 rounded-full border border-white/10">WATCH CRACKSCRIBE PROMO</span>
                </div>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                className="w-full h-full border-0 rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Dynamic Tutorial Library Grid */}
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4 animate-fade-in-up delay-200">
          <h4 className="text-2xl font-bold text-white tracking-tight">Tutorial Library</h4>
          <span className="text-sm text-gray-500 font-mono">{tutorialVideos.length} Videos Available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorialVideos.map((video, index) => (
            <div 
              key={video.id} 
              onClick={() => setActiveModalVideo(video)}
              className="group relative rounded-2xl border border-white/10 bg-[#050505]/50 overflow-hidden cursor-pointer hover:border-white/30 hover:bg-[#0a0a0a] transition-all duration-500 animate-fade-in-up shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col"
              style={{ animationDelay: `${(index % 4 + 2) * 100}ms` }}
            >
              {/* Thumbnail Area - Force uniform display container for all ratios */}
              <div className="aspect-video w-full bg-[#0a0a0a] relative overflow-hidden border-b border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-white/[0.08] group-hover:scale-110 transition-transform duration-700 ease-out"></div>
                
                {/* Visual Indicator for Vertical Videos */}
                {video.aspectRatio === '9:16' && (
                   <div className="absolute inset-y-2 w-16 bg-white/5 border border-white/10 rounded-lg shadow-inner z-0"></div>
                )}

                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all duration-300 z-10">
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-white border border-white/10 uppercase tracking-wider z-10">
                  {video.category}
                </div>
                
                {/* Source Icon Indicator (YouTube vs Local) */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-white/80 border border-white/10 z-10 flex items-center gap-1">
                  {video.type === 'youtube' ? (
                    <span className="text-red-500 font-bold">YT</span>
                  ) : (
                    <span className="text-blue-400 font-bold">MP4</span>
                  )}
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Video Meta Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h4 className="text-white font-medium text-sm leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dynamic Cinematic Video Lightbox Modal */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity cursor-pointer"
            onClick={() => setActiveModalVideo(null)}
          ></div>
          
          {/* Modal Content - Dynamically resizes max-width based on Aspect Ratio */}
          <div className={`relative w-full ${activeModalVideo.aspectRatio === '9:16' ? 'max-w-sm' : 'max-w-5xl'} bg-[#050505] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-fade-in-up`} style={{ animationDelay: '0ms' }}>
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <h3 className="text-white font-medium text-sm md:text-base tracking-tight truncate pr-4">{activeModalVideo.title}</h3>
              <button 
                onClick={() => setActiveModalVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex flex-shrink-0 items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Player Container - Dynamically applies the correct Tailwind aspect ratio class */}
            <div className={`w-full bg-black relative ${activeModalVideo.aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'}`}>
              {activeModalVideo.type === 'youtube' ? (
                <iframe 
                  src={activeModalVideo.url} 
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              ) : (
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                  src={activeModalVideo.url} 
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

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
  thumbnail: string;
}

// Simulated Backend Data (Expandable)
const tutorialVideos: TutorialVideo[] = [
  { 
    id: 1, 
    title: "Auto-Trim Silence in 1 Click", 
    duration: "2:45", 
    category: "Editing",
    type: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 2, 
    title: "Exporting for TikTok & Reels", 
    duration: "0:59", 
    category: "Social",
    type: "local",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    aspectRatio: "9:16",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 3, 
    title: "Using Noise Wash for Voiceovers", 
    duration: "3:30", 
    category: "Audio",
    type: "local",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 4, 
    title: "Generating AI Captions", 
    duration: "1:15", 
    category: "AI Tools",
    type: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    aspectRatio: "9:16",
    thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 5, 
    title: "Advanced Timeline Slicing", 
    duration: "4:12", 
    category: "Editing",
    type: "local",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 6, 
    title: "Batch Format Conversion", 
    duration: "2:10", 
    category: "Export",
    type: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1516280440502-a27dd2e1e075?q=80&w=800&auto=format&fit=crop"
  },
];

export const MediaShowcase = () => {
  const [isMainPlaying, setIsMainPlaying] = useState(false);
  const [activeModalVideo, setActiveModalVideo] = useState<TutorialVideo | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll ONLY when modal is open
  useEffect(() => {
    if (activeModalVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalVideo]);

  return (
    <section id="media" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-transparent overflow-hidden">
      
      {/* 
        Automatically hides the Navbar globally ONLY when the pop-up modal is active 
      */}
      {activeModalVideo && (
        <style dangerouslySetInnerHTML={{ __html: `header { display: none !important; }` }} />
      )}

      {/* Cinematic Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[180px] bg-[#00f0b5]/5 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/20 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00f0b5] animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.15em] text-[#00f0b5] uppercase font-bold">Live Demos</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
            Master your <span className="text-gradient-cyan">workflow.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl font-light text-lg md:text-xl text-balance">
            Watch how creators are transforming their audio and video in minutes using CrackScribe's AI tools.
          </p>
        </div>

        {/* Featured Promo Video Player */}
        <div className="mb-28 group relative rounded-[2.5rem] bg-[#03090c] p-2 md:p-3 overflow-hidden animate-fade-in-up delay-100 shadow-[0_30px_100px_rgba(0,0,0,0.8)] mx-auto max-w-5xl border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00f0b5]/10 to-[#0088cc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none -z-10"></div>
          
          <div className="relative aspect-[16/9] w-full rounded-[2rem] bg-black overflow-hidden flex items-center justify-center border border-white/10 ring-1 ring-white/5 z-20">
            {!isMainPlaying ? (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group/play overflow-hidden"
                onClick={() => setIsMainPlaying(true)}
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover/play:scale-105 transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[#00f0b5]/10 mix-blend-overlay"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-6 transition-transform duration-500 group-hover/play:scale-110">
                  <div className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(0,240,181,0.2)] relative overflow-hidden group-hover/play:border-[#00f0b5]/50 group-hover/play:shadow-[0_0_60px_rgba(0,240,181,0.4)] transition-all duration-300">
                    <div className="absolute inset-0 bg-white/5 group-hover/play:bg-[#00f0b5]/20 transition-colors duration-300"></div>
                    <svg className="w-10 h-10 text-white ml-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-mono text-sm tracking-widest font-bold bg-[#010608]/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-lg">
                    WATCH CRACKSCRIBE PROMO
                  </span>
                </div>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => setIsMainPlaying(false)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#00f0b5]/20 hover:text-[#00f0b5] hover:border-[#00f0b5]/50 transition-colors shadow-xl"
                  aria-label="Close video"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  className="w-full h-full border-0 rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </>
            )}
          </div>
        </div>

        {/* Dynamic Tutorial Library - Swiper Carousel */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 border-b border-white/10 pb-4 animate-fade-in-up delay-200">
          <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Tutorial Library</h4>
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="bg-[#00f0b5]/10 border border-[#00f0b5]/20 px-3 py-1 rounded-full">
              <span className="text-xs text-[#00f0b5] font-mono font-bold">{tutorialVideos.length} Videos</span>
            </div>
            <div
              aria-label="Swipe or drag to explore the tutorials"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
            >
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-white/65">
                Swipe to explore
              </span>
              <span aria-hidden="true" className="flex items-center gap-1">
                <span className="h-px w-3 rounded-full bg-white/20" />
                <span className="h-px w-2 rounded-full bg-[#00f0b5]/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f0b5] shadow-[0_0_10px_rgba(0,240,181,0.8)] animate-pulse" />
              </span>
            </div>
          </div>
        </div>

        {isMounted && (
          <div className="w-full relative animate-fade-in-up delay-300">
            <Swiper
              modules={[FreeMode]}
              spaceBetween={24}
              slidesPerView={1.2}
              freeMode={true}
              grabCursor={true}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
                1280: { slidesPerView: 4 },
              }}
              className="!pb-12 !px-2"
            >
              {tutorialVideos.map((video) => (
                <SwiperSlide key={video.id} className="h-auto">
                  <div 
                    onClick={() => setActiveModalVideo(video)}
                    className="group h-full relative rounded-2xl border border-white/10 bg-[#03090c] overflow-hidden cursor-pointer hover:border-[#00f0b5]/50 transition-all duration-500 shadow-lg hover:shadow-[0_15px_40px_rgba(0,240,181,0.15)] hover:-translate-y-2 flex flex-col"
                  >
                    {/* Thumbnail Area */}
                    <div className="aspect-video w-full bg-black relative overflow-hidden border-b border-white/5 flex items-center justify-center">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      
                      {/* Visual Indicator for Vertical Videos */}
                      {video.aspectRatio === '9:16' && (
                        <div className="absolute inset-y-2 w-16 bg-white/10 border border-white/20 rounded-lg shadow-inner z-0 backdrop-blur-sm"></div>
                      )}

                      {/* Grid Play Button */}
                      <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#00f0b5] text-white group-hover:text-[#010608] group-hover:border-transparent transition-all duration-300 z-10 shadow-xl">
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>

                      <div className="absolute top-3 left-3 bg-[#010608]/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono text-[#00f0b5] font-bold border border-[#00f0b5]/30 uppercase tracking-widest z-10">
                        {video.category}
                      </div>
                      
                      {/* Source Icon Indicator */}
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-white/90 border border-white/20 z-10 flex items-center gap-1.5 shadow-lg">
                        {video.type === 'youtube' ? (
                          <span className="text-red-500 flex items-center gap-1 font-bold">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.5,15.5v-7l6.5,3.5L9.5,15.5z"/></svg>
                          </span>
                        ) : (
                          <span className="text-[#00c6dd] font-bold">MP4</span>
                        )}
                        <span>{video.duration}</span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-white font-bold text-base leading-snug group-hover:text-[#00f0b5] transition-colors duration-300">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      {/* Dynamic Cinematic Video Lightbox Modal */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-[#010608]/95 backdrop-blur-3xl transition-opacity cursor-pointer"
            onClick={() => setActiveModalVideo(null)}
          ></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[50vh] bg-[#00f0b5]/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

          <div className="relative w-full flex justify-center items-center z-10 h-full max-h-[90vh]">
            
            {/* Unified Cinematic Box for both 16:9 and 9:16 */}
            <div className={`relative w-full ${activeModalVideo.aspectRatio === '9:16' ? 'max-w-sm' : 'max-w-5xl'} bg-[#020a0d] rounded-2xl border border-[#00f0b5]/20 shadow-[0_20px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col animate-fade-in-up ring-1 ring-white/5`}>
              
              {/* Header Box integrating the Close Button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#030d12]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-2 h-2 rounded-full bg-[#00f0b5] animate-pulse flex-shrink-0"></div>
                  <h3 className="text-white font-bold text-sm md:text-base tracking-tight truncate pr-4">{activeModalVideo.title}</h3>
                </div>
                
                {/* Close Button Inside the Header */}
                <button 
                  onClick={() => setActiveModalVideo(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#00f0b5]/20 border border-transparent hover:border-[#00f0b5]/30 flex flex-shrink-0 items-center justify-center text-gray-400 hover:text-[#00f0b5] transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Player */}
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
                  />
                )}
              </div>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};
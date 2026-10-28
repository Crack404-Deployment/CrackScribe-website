"use client";

import React, { useState, useEffect } from 'react';

// Premium dataset
const allReviews = [
  { id: 1, name: "Alex Rivera", role: "Content Creator", initials: "AR", text: "The AI Noise Wash is actual magic. I recorded a vlog near a busy highway, and CrackScribe removed every single car sound without making my voice sound robotic." },
  { id: 2, name: "Sarah Jenkins", role: "Podcast Host", initials: "SJ", text: "Trimming dead air used to take hours. The engine detects and cuts awkward pauses in seconds. My production time is literally cut in half." },
  { id: 3, name: "David Chen", role: "Video Editor", initials: "DC", text: "I was skeptical about the auto-captions, but the accuracy is insane. Exporting directly to SRT with Creator fonts makes this the ultimate tool." },
  { id: 4, name: "Emily Thorne", role: "Digital Marketer", initials: "ET", text: "The UI is incredibly intuitive. I don't need heavy desktop software for quick social media edits anymore. CrackScribe handles it all natively." },
  { id: 5, name: "Marcus Cole", role: "Audio Engineer", initials: "MC", text: "I love the granular control. Having actual dB threshold sliders for the silence trimmer shows this was built for professionals, not just casuals." },
  { id: 6, name: "Priya Patel", role: "Educator", initials: "PP", text: "The built-in format converter is lightning fast, and the file size compression doesn't destroy the audio quality. Highly recommended for workflow speed." },
  { id: 7, name: "James Wilson", role: "YouTuber", initials: "JW", text: "Honestly the best purchase I've made for my channel this year. The AI transcription is flawless even with my heavy accent. Amazing tech." },
  { id: 8, name: "Maria Garcia", role: "Social Media Manager", initials: "MG", text: "The dynamic captions keep audience retention so high. Being able to just click 'Creator Style' and have perfect TikTok captions instantly is a massive save." },
];

const row1 = allReviews.slice(0, 4);
const row2 = allReviews.slice(4, 8);

const FiveStars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-[#00DDB5] drop-shadow-[0_0_8px_rgba(0,221,181,0.6)]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: typeof allReviews[0] }) => (
  <div className="w-[320px] md:w-[400px] flex-shrink-0 rounded-[2rem] border border-white/5 bg-[#03090c]/80 backdrop-blur-md p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:bg-[#071012] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,221,181,0.05)] transition-all duration-500 relative group overflow-hidden cursor-pointer ring-1 ring-transparent hover:ring-[#00DDB5]/20">
    
    {/* Subtle Quote Watermark */}
    <div className="absolute -top-4 right-4 text-[100px] text-white/[0.02] font-serif font-black pointer-events-none group-hover:text-[#00DDB5]/[0.05] transition-colors duration-500 leading-none">"</div>
    
    {/* Author Header */}
    <div className="flex items-center gap-4 relative z-10 mb-6 border-b border-white/5 pb-6">
      <div className="w-12 h-12 rounded-full bg-[#071012] border border-[#00DDB5]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,221,181,0.1)] group-hover:border-[#00DDB5] transition-colors duration-500">
        <span className="text-[#00DDB5] text-sm font-bold font-mono tracking-widest">{review.initials}</span>
      </div>
      <div>
        <h4 className="text-[#F5F7F7] text-base font-bold tracking-tight">{review.name}</h4>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[#98A6A9] text-[10px] uppercase font-mono tracking-widest">{review.role}</span>
          <div className="w-3 h-3 rounded-full bg-[#00DDB5]/10 flex items-center justify-center border border-[#00DDB5]/30">
             <svg className="w-2 h-2 text-[#00DDB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
        </div>
      </div>
    </div>

    {/* Review Body */}
    <div className="relative z-10">
      <FiveStars />
      <p className="text-[#98A6A9] text-sm leading-relaxed font-light line-clamp-4 group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: '"Inter", sans-serif' }}>
        "{review.text}"
      </p>
    </div>
  </div>
);

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="reviews" className="py-24 md:py-32 relative z-10 bg-[#010507] overflow-hidden">
      
      {/* Dynamic Keyframes for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50% - 12px)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: scroll-right 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[#00DDB5]/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-in-up">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102522] border border-[#00DDB5]/20 mb-6 backdrop-blur-md shadow-lg ring-1 ring-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DDB5] animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.15em] text-[#00DDB5] uppercase font-bold">
                Creator Stories
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F7F7] tracking-tighter leading-tight" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Trusted by the world's <br className="hidden md:block"/>
              <span className="text-gradient-cyan">most demanding creators.</span>
            </h3>
          </div>

          {/* Premium CTA Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-8 py-4 bg-[#03090c] border border-white/10 rounded-full overflow-hidden transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(0,221,181,0.15)] hover:border-[#00DDB5]/40 w-full md:w-auto flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00DDB5]/0 via-[#00DDB5]/10 to-[#00DDB5]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            <span className="text-[#F5F7F7] text-sm font-bold tracking-wide relative z-10">Share Your Story</span>
            <svg className="w-4 h-4 text-[#00DDB5] relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Infinite Marquee Engine */}
      <div className="relative w-full flex flex-col gap-6 pt-4 pb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1: Scrolling Left */}
        <div className="flex w-max gap-6 animate-marquee-left pause-on-hover px-3">
          {[...row1, ...row1].map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max gap-6 animate-marquee-right pause-on-hover px-3">
          {[...row2, ...row2].map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </div>

      </div>

      {/* Premium Submission Modal (Scroll Locked) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          
          {/* Dark Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-[#010608]/95 backdrop-blur-3xl transition-opacity cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[50vh] bg-[#00DDB5]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
          
          {/* Modal Window */}
          <div className="relative w-full max-w-lg bg-[#020a0d] rounded-3xl border border-[#00DDB5]/20 shadow-[0_20px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10 ring-1 ring-white/5">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#030d12]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00DDB5]/10 flex items-center justify-center border border-[#00DDB5]/30">
                   <svg className="w-5 h-5 text-[#00DDB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </div>
                <div>
                  <h3 className="text-[#F5F7F7] font-bold text-lg tracking-tight leading-none mb-1">Review CrackScribe</h3>
                  <span className="text-[10px] font-mono text-[#98A6A9] uppercase tracking-widest">Share your experience</span>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00DDB5]/20 border border-transparent hover:border-[#00DDB5]/30 flex items-center justify-center text-gray-400 hover:text-[#00DDB5] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Form */}
            <form className="p-8 flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Review submitted successfully!"); }}>
              
              {/* Star Rating Interaction */}
              <div className="flex flex-col items-center gap-4 pb-6 border-b border-white/5">
                <span className="text-[10px] font-mono text-[#98A6A9] uppercase tracking-widest">Rate the Engine</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      onClick={() => setRating(star)}
                      className={`w-10 h-10 cursor-pointer transition-all duration-300 hover:scale-110 ${rating >= star ? 'text-[#00DDB5] drop-shadow-[0_0_15px_rgba(0,221,181,0.5)]' : 'text-white/5 hover:text-white/20'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-[#98A6A9] uppercase tracking-widest ml-1">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-[#F5F7F7] text-sm focus:outline-none focus:ring-1 focus:ring-[#00DDB5]/50 focus:border-[#00DDB5]/50 transition-all placeholder:text-[#253235]" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-[#98A6A9] uppercase tracking-widest ml-1">Role / Profession</label>
                  <input required type="text" placeholder="Video Editor" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-[#F5F7F7] text-sm focus:outline-none focus:ring-1 focus:ring-[#00DDB5]/50 focus:border-[#00DDB5]/50 transition-all placeholder:text-[#253235]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono text-[#98A6A9] uppercase tracking-widest ml-1">Your Experience</label>
                <textarea required placeholder="How did CrackScribe improve your workflow?" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-[#F5F7F7] text-sm focus:outline-none focus:ring-1 focus:ring-[#00DDB5]/50 focus:border-[#00DDB5]/50 transition-all resize-none placeholder:text-[#253235]"></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full mt-4 py-4 rounded-xl bg-[#00DDB5] text-[#01090c] text-sm font-bold tracking-wide hover:scale-[1.02] hover:bg-[#00f0b5] transition-all shadow-[0_0_20px_rgba(0,221,181,0.2)] hover:shadow-[0_0_30px_rgba(0,221,181,0.4)] focus:outline-none uppercase">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
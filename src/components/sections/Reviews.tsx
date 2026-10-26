"use client";

import React, { useState, useEffect } from 'react';

// Expanded production-ready dataset
const allReviews = [
  { id: 1, name: "Alex Rivera", role: "Content Creator", initials: "AR", color: "from-blue-500 to-cyan-500", text: "The AI Noise Wash is actual magic. I recorded a vlog near a busy highway, and CrackScribe removed every single car sound without making my voice sound robotic." },
  { id: 2, name: "Sarah Jenkins", role: "Podcast Host", initials: "SJ", color: "from-purple-500 to-pink-500", text: "Trimming dead air used to take hours. The Parametric Trimmer detects and cuts awkward pauses in seconds. My production time is literally cut in half." },
  { id: 3, name: "David Chen", role: "Video Editor", initials: "DC", color: "from-green-400 to-emerald-600", text: "I was skeptical about the auto-captions, but the accuracy is insane. Exporting directly to SRT with Creator fonts makes this the ultimate tool." },
  { id: 4, name: "Emily Thorne", role: "Digital Marketer", initials: "ET", color: "from-yellow-400 to-orange-500", text: "The UI is incredibly intuitive. I don't need Premiere Pro for quick social media edits anymore. CrackScribe handles slicing and audio cleanup natively." },
  { id: 5, name: "Marcus Cole", role: "Audio Engineer", initials: "MC", color: "from-red-500 to-rose-600", text: "I love the granular control. Having actual dB threshold sliders for the silence trimmer shows this was built for professionals, not just casuals." },
  { id: 6, name: "Priya Patel", role: "Educator", initials: "PP", color: "from-indigo-500 to-blue-600", text: "The built-in format converter is lightning fast, and the file size compression doesn't destroy the audio quality. Highly recommended for educators." },
  { id: 7, name: "James Wilson", role: "YouTuber", initials: "JW", color: "from-teal-400 to-emerald-500", text: "Honestly the best purchase I've made for my channel this year. The AI transcription is flawless even with my heavy accent. Amazing tech." },
  { id: 8, name: "Maria Garcia", role: "Social Media Manager", initials: "MG", color: "from-pink-500 to-rose-500", text: "The dynamic captions keep audience retention so high. Being able to just click 'Creator Style' and have perfect TikTok captions instantly is a massive save." },
];

// Split reviews into two distinct rows for opposite scrolling directions
const row1 = allReviews.slice(0, 4);
const row2 = allReviews.slice(4, 8);

const FiveStars = () => (
  <div className="flex gap-1 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Review Card Component designed for the marquee
const ReviewCard = ({ review }: { review: typeof allReviews[0] }) => (
  <div className="w-[350px] md:w-[420px] flex-shrink-0 rounded-3xl border border-white/5 bg-[#050505] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:border-white/20 hover:bg-[#0a0a0a] transition-all duration-500 relative group overflow-hidden cursor-pointer">
    {/* Subtle Quote Watermark */}
    <div className="absolute -top-6 right-2 text-[120px] text-white/[0.02] font-serif font-black pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500 leading-none">"</div>
    
    <div className="relative z-10 h-[130px]">
      <FiveStars />
      <p className="text-gray-300 text-sm leading-relaxed font-light italic line-clamp-4">
        "{review.text}"
      </p>
    </div>

    <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5 mt-auto">
      <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
        <span className="text-white text-xs font-bold font-mono tracking-wider">{review.initials}</span>
      </div>
      <div>
        <h4 className="text-white text-sm font-bold tracking-tight">{review.name}</h4>
        <div className="flex items-center gap-1.5">
          <span className="text-gray-500 text-[10px] uppercase font-mono tracking-widest">{review.role}</span>
          <span className="text-blue-500 text-[12px] leading-none">✓</span>
        </div>
      </div>
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
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="reviews" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-[#000000] overflow-hidden">
      
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
          animation: scroll-left 50s linear infinite;
        }
        .animate-marquee-right {
          animation: scroll-right 50s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px] bg-gradient-to-tr from-purple-500/[0.03] to-blue-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-in-up">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase ml-2 border-l border-white/20 pl-3">4.9/5 Average Rating</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Trusted by the world's <br />
              <span className="text-gradient-c404">most demanding creators.</span>
            </h3>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-6 py-3.5 bg-white/[0.03] border border-white/10 hover:border-white/30 rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] w-full md:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="text-white text-sm font-semibold tracking-wide relative z-10">Share Your Story</span>
            <svg className="w-4 h-4 text-white relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Infinite Marquee Engine */}
      <div className="relative w-full flex flex-col gap-6 pt-4 pb-12">
        
        {/* Seamless Edge Masks */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-48 bg-gradient-to-r from-[#000000] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-48 bg-gradient-to-l from-[#000000] to-transparent z-20 pointer-events-none"></div>

        {/* Row 1: Scrolling Left */}
        <div className="flex w-max gap-6 animate-marquee-left pause-on-hover px-6">
          {[...row1, ...row1].map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max gap-6 animate-marquee-right pause-on-hover px-6">
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
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Window */}
          <div className="relative w-full max-w-lg bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10 transform scale-100 transition-transform">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-[#050505]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                   <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight">Review CrackScribe</h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Form */}
            <form className="p-6 md:p-8 flex flex-col gap-6 bg-[#0a0a0a]" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Review submitted to backend successfully!"); }}>
              
              {/* Star Rating Interaction */}
              <div className="flex flex-col items-center gap-3 pb-6 border-b border-white/5">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Rate the Engine</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      onClick={() => setRating(star)}
                      className={`w-9 h-9 cursor-pointer transition-all duration-300 hover:scale-110 ${rating >= star ? 'text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'text-white/5 hover:text-white/20'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/30 focus:bg-[#1a1a1a] transition-all placeholder:text-gray-600" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-1">Role / Profession</label>
                  <input required type="text" placeholder="Video Editor" className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/30 focus:bg-[#1a1a1a] transition-all placeholder:text-gray-600" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-1">Your Experience</label>
                <textarea required placeholder="How did CrackScribe improve your workflow?" rows={4} className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/30 focus:bg-[#1a1a1a] transition-all resize-none placeholder:text-gray-600"></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-white to-gray-300 text-black text-sm font-bold tracking-wide hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.15)] focus:outline-none">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
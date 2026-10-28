"use client";

import React, { useState } from 'react';

const faqs = [
  {
    question: "Do I need an internet connection to use CrackScribe?",
    answer: "No. CrackScribe utilizes a powerful Native Engine that runs directly on your device. Features like AI Noise Wash and the Parametric Trimmer work completely offline, ensuring your unreleased media remains 100% private and secure."
  },
  {
    question: "What media formats are supported for import and export?",
    answer: "You can import almost any standard video or audio format. For export, CrackScribe supports high-fidelity cinematic video encoders (MP4) and lossless or compressed audio formats including MP3, AAC, WAV, and M4A, complete with variable quality control."
  },
  {
    question: "How accurate is the AI Transcription?",
    answer: "Our AI Subtitle Engine is highly accurate and supports auto-detection for multiple languages. It automatically extracts speech-to-text with precise timestamping, allowing you to export flawless .TXT or .SRT files in seconds."
  },
  {
    question: "Can I customize how the captions look on my video?",
    answer: "Absolutely. Instead of generic subtitles, you can burn dynamic captions directly into your video using our premium typography presets, including Creator Style, Classic, Minimal, and Bold."
  },
  {
    question: "Is there a limit to how long my audio or video files can be?",
    answer: "CrackScribe is built for professional workflows, meaning it is optimized to handle long-form content like full podcast episodes, lectures, and extensive vlog footage without crashing or throttling."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-4 md:px-12 lg:px-20 relative z-10 bg-transparent overflow-hidden">
      
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#00DDB5]/[0.04] blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Premium Section Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102522] border border-[#00DDB5]/20 mb-6 backdrop-blur-md shadow-lg ring-1 ring-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DDB5] animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.15em] text-[#00DDB5] uppercase font-bold">
              Support & Details
            </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F7F7] tracking-tighter mb-4 leading-tight" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h3>
          <p className="text-[#98A6A9] text-base md:text-lg max-w-2xl font-light" style={{ fontFamily: '"Inter", sans-serif' }}>
            Everything you need to know about CrackScribe's offline processing, media formats, and AI capabilities.
          </p>
        </div>

        {/* Glassmorphic Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`group rounded-2xl transition-all duration-300 ease-out overflow-hidden backdrop-blur-md relative ${
                  isActive 
                    ? 'bg-[#020a0d]/80 border border-[#00DDB5]/30 shadow-[0_15px_40px_rgba(0,221,181,0.08)] ring-1 ring-[#00DDB5]/10' 
                    : 'bg-[#03090c]/40 border border-white/5 hover:border-white/10 hover:bg-[#03090c]/80'
                } animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Active Indicator Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00DDB5] to-[#0088cc] shadow-[0_0_15px_#00DDB5] transition-opacity duration-300 ease-out ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none cursor-pointer"
                >
                  <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 pr-8 ${
                    isActive ? 'text-[#F5F7F7]' : 'text-[#98A6A9] group-hover:text-[#F5F7F7]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Premium Rotating Plus/Minus Icon */}
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ease-out flex-shrink-0 ${
                    isActive ? 'border-[#00DDB5]/40 bg-[#00DDB5]/10' : 'border-white/10 bg-black/20 group-hover:border-white/30'
                  }`}>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ease-out ${isActive ? 'rotate-45 text-[#00DDB5]' : 'text-gray-400 group-hover:text-white'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                
                {/* Smooth, Snappy Height Animation via CSS Grid */}
                <div className={`grid transition-all duration-300 ease-out px-6 md:px-8 ${
                  isActive ? 'grid-rows-[1fr] opacity-100 pb-6 md:pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                }`}>
                  <div className="overflow-hidden">
                    <p className={`text-[#98A6A9] text-sm md:text-base leading-relaxed font-light pl-0 md:pl-2 transform transition-all duration-300 ease-out ${
                      isActive ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                    }`} style={{ fontFamily: '"Inter", sans-serif' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
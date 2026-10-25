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
    <section id="faq" className="py-32 px-6 relative z-10 bg-[#000000]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow"></span>
            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Support & Details</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h3>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`group rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isActive 
                    ? 'bg-white/[0.03] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                    : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                } animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 flex-shrink-0 ml-4 ${
                    isActive ? 'border-white/30 bg-white/10 rotate-180' : 'border-white/10 bg-transparent group-hover:border-white/30'
                  }`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {/* CSS Grid trick for smooth height animation */}
                <div className={`grid transition-all duration-500 ease-in-out px-6 ${
                  isActive ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                }`}>
                  <div className="overflow-hidden">
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
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
"use client";

import React from 'react';

const audiences = [
  {
    id: "creators",
    title: "Content Creators",
    description: "Clean audio, add captions, and remove unnecessary pauses before publishing videos.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", // Creator/Studio setup
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    delay: "delay-100",
  },
  {
    id: "students",
    title: "Students & Learners",
    description: "Turn supported speech recordings into text for study, revision, and quick reference.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", // Studying/Focus
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    delay: "delay-200",
  },
  {
    id: "professionals",
    title: "Professionals",
    description: "Prepare clearer recordings and turn spoken information into searchable written content.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop", // Podcast/Office
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    delay: "delay-300",
  },
  {
    id: "editors",
    title: "Video Editors",
    description: "Streamline speech-related tasks and finish videos with built-in conversion tools.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop", // Video editing timeline
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    delay: "delay-400",
  }
];

export const TargetAudience = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-[#010507] overflow-hidden border-t border-white/5">
      
      {/* Cinematic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(0,240,181,0.05),transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md shadow-lg ring-1 ring-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0b5] animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-gray-400 uppercase font-bold">
              Built For You
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
            Who is <span className="text-gradient-cyan">CrackScribe</span> for?
          </h2>
        </div>

        {/* 4-Column Cinematic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {audiences.map((audience) => (
            <div 
              key={audience.id}
              className={`group relative h-[380px] rounded-[2rem] bg-[#03090c] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,240,181,0.15)] hover:border-[#00f0b5]/40 animate-fade-in-up ${audience.delay} ring-1 ring-transparent hover:ring-[#00f0b5]/20`}
            >
              
              {/* Background Image with Hover Scale */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={audience.image} 
                  alt={audience.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                {/* Heavy gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020608] via-[#020608]/80 to-transparent"></div>
              </div>

              {/* Floating Icon Badge */}
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center z-20 group-hover:bg-[#00f0b5] group-hover:border-transparent transition-colors duration-500 shadow-lg">
                <div className="text-gray-300 group-hover:text-[#01090c] transition-colors duration-500">
                  {audience.icon}
                </div>
              </div>

              {/* Text Content Area */}
              <div className="relative z-10 flex-1 flex flex-col justify-end p-6 pb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00f0b5] transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                  {audience.description}
                </p>

                {/* Subtle Learn More indicator */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 overflow-hidden">
                   <span className="text-[10px] font-mono text-[#00f0b5] uppercase tracking-widest font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                     Perfect Match
                   </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
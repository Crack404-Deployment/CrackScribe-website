import React from 'react';

export const Introduction = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 z-10 overflow-hidden bg-transparent">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-[#00f0b5]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Anchor & Headline (Sticky on Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/20 mb-6 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f0b5] animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#00f0b5] uppercase font-bold">
                The CrackScribe Vision
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-white">
              Your Content Workflow, <br className="hidden md:block" />
              <span className="text-gradient-cyan mt-2 block">Powered by AI.</span>
            </h2>
          </div>

          {/* Right Column: Narrative Flow */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10 lg:pt-16">
            
            <div className="animate-fade-in-up delay-100">
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Creating content often means cleaning recordings, transcribing speech, adding captions, and cutting unnecessary pauses before your work is ready to share.
              </p>
            </div>

            {/* Highlighted Core Statement */}
            <div className="relative pl-6 md:pl-8 py-2 animate-fade-in-up delay-200">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f0b5] to-[#0088cc] rounded-full shadow-[0_0_15px_rgba(0,240,181,0.5)]"></div>
              <p className="text-white text-2xl md:text-3xl font-medium tracking-tight leading-snug">
                CrackScribe brings these essential tasks together in one place.
              </p>
            </div>

            <div className="animate-fade-in-up delay-300">
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                From clearer audio to text-ready recordings and captioned videos, CrackScribe helps simplify the work behind your content. And when you need more control, built-in video editing and format conversion tools are there to support your workflow.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Tagline Banner - Spanning Full Width of Container */}
        <div className="mt-24 md:mt-32 w-full animate-fade-in-up delay-400 relative group">
          {/* Ambient Glow behind banner */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f0b5] to-[#00aaff] blur-[50px] opacity-10 rounded-[2.5rem] -z-10 transition-opacity duration-700 group-hover:opacity-20"></div>
          
          <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#020709] border border-white/5 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden shadow-2xl">
            {/* Texture and internal lighting */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00f0b5]/10 blur-[60px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>
            
            <h3 className="text-2xl md:text-4xl lg:text-[2.5rem] font-black text-white tracking-tighter leading-tight md:max-w-2xl relative z-10 text-center md:text-left">
              One app. Smarter media processing. <br className="hidden md:block"/>
              <span className="text-[#00f0b5]">More time to create.</span>
            </h3>

            {/* Decorative Element */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#00f0b5]/30 bg-[#00f0b5]/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,240,181,0.15)] group-hover:bg-[#00f0b5]/10 group-hover:border-[#00f0b5]/50 transition-all duration-500">
                <svg className="w-8 h-8 text-[#00f0b5] transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
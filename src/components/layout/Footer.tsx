import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="relative bg-[#010507] pt-24 pb-12 px-4 md:px-12 lg:px-20 border-t border-white/5 overflow-hidden">
      
      {/* Premium Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[#00DDB5]/[0.03] blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00c6dd]/[0.02] blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Compact & Premium CTA Panel */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-8 md:px-10 md:py-10 lg:px-16 lg:py-10 rounded-[2rem] bg-[#020a0d]/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] mb-20 relative overflow-hidden group ring-1 ring-white/5">
          
          {/* Animated Background Aura inside CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00DDB5]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 ease-out group-hover:scale-125"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0088cc]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 transition-transform duration-1000 ease-out group-hover:scale-125"></div>
          
          <div className="mb-8 lg:mb-0 text-center lg:text-left relative z-10 max-w-xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F5F7F7] tracking-tighter mb-2 leading-tight" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Ready to upgrade <br className="hidden md:block"/> your <span className="text-gradient-cyan">workflow?</span>
            </h3>
            <p className="text-[#98A6A9] text-sm md:text-base font-light leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              Download CrackScribe on your mobile device and edit like a professional today. No cloud uploads, zero latency.
            </p>
          </div>
          
          <div className="flex flex-col w-full sm:w-auto relative z-10">
            {/* Authentic, High-End Google Play Button */}
            <a href="#" className="relative flex items-center justify-center gap-4 bg-black hover:bg-[#050505] border border-white/20 hover:border-[#00DDB5]/50 px-8 py-3.5 rounded-2xl transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group/btn overflow-hidden w-full sm:w-auto transform hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,221,181,0.2)]">
              
              {/* Button Hover Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              
              <svg className="w-9 h-9 relative z-10 drop-shadow-md" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6 23.5C24.5 25.7 23.3 29.5 23.3 34.6V477.4C23.3 482.5 24.5 486.3 26.6 488.5L27.6 489.4L259.9 257.1V254.8L27.6 22.5L26.6 23.5Z" fill="#3D82F8"/>
                <path d="M337.3 334.6L259.9 257.2V254.9L337.3 177.5L338.5 178.2L426.6 228.3C451.7 242.6 451.7 266 426.6 280.3L338.5 333.9L337.3 334.6Z" fill="#F8B101"/>
                <path d="M338.5 333.9L259.9 255.3L26.6 488.6C33.8 495.8 45.4 496.7 58.7 489.2L338.5 333.9Z" fill="#DF2F37"/>
                <path d="M338.5 178.2L58.7 22.9C45.4 15.4 33.8 16.3 26.6 23.5L259.9 256.8L338.5 178.2Z" fill="#4BBA61"/>
              </svg>

              <div className="flex flex-col items-start justify-center relative z-10 pt-0.5">
                <span className="text-[9px] uppercase font-bold text-[#98A6A9] tracking-widest leading-none mb-1">GET IT ON</span>
                <span className="text-xl font-sans font-medium text-[#F5F7F7] tracking-tight leading-none">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-[#00DDB5]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image 
                  src="/logo.png" 
                  alt="CrackScribe Logo" 
                  fill
                  className="object-contain relative z-10"
                />
              </div>
              <span className="text-[#F5F7F7] font-bold text-2xl tracking-tight transition-opacity group-hover:opacity-90">
                Crack<span className="text-gradient-cyan">Scribe</span>
              </span>
            </Link>
            <p className="text-[#98A6A9] text-sm font-light leading-relaxed max-w-sm" style={{ fontFamily: '"Inter", sans-serif' }}>
              The ultimate offline AI studio. Wash noise, auto-trim silence, and generate cinematic captions natively on your phone.
            </p>
          </div>
          
          {/* Nav Columns */}
          <div>
            <h4 className="text-[#F5F7F7] font-bold text-xs mb-5 tracking-widest uppercase font-mono">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#98A6A9] font-light" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li><Link href="#features" className="hover:text-[#00DDB5] transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-[#00DDB5] transition-colors">How it Works</Link></li>
              <li><Link href="#media" className="hover:text-[#00DDB5] transition-colors">Live Demos</Link></li>
              <li><Link href="#" className="hover:text-[#00DDB5] transition-colors">Download App</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#F5F7F7] font-bold text-xs mb-5 tracking-widest uppercase font-mono">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#98A6A9] font-light" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li><Link href="/docs" className="hover:text-[#00DDB5] transition-colors">Documentation</Link></li>
              <li><Link href="#faq" className="hover:text-[#00DDB5] transition-colors">Help Center & FAQ</Link></li>
              <li><Link href="#" className="hover:text-[#00DDB5] transition-colors">Video Tutorials</Link></li>
              <li><Link href="https://discord.gg/pACZhTUAY" target="_blank" rel="noopener noreferrer" className="hover:text-[#00DDB5] transition-colors">Community Forum</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F7F7] font-bold text-xs mb-5 tracking-widest uppercase font-mono">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#98A6A9] font-light" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li><Link href="https://www.crack404.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00DDB5] transition-colors">About CRACK404</Link></li>
              <li><Link href="/privacy" className="hover:text-[#00DDB5] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#00DDB5] transition-colors">Terms of Service</Link></li>
              <li><Link href="mailto:contact.support@crack404.com" className="hover:text-[#00DDB5] transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Social Media bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <p className="text-[#98A6A9] text-xs font-mono tracking-widest">
            &copy; {new Date().getFullYear()} Crack404. All rights reserved.
          </p>
          
          {/* Refined Social Icons */}
          <div className="flex items-center gap-3">
            <Link href="https://x.com/CrackScribe" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#98A6A9] hover:bg-[#00DDB5]/10 hover:border-[#00DDB5]/30 hover:text-[#00DDB5] transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            
            <Link href="https://www.instagram.com/crackscribe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#98A6A9] hover:bg-[#00DDB5]/10 hover:border-[#00DDB5]/30 hover:text-[#00DDB5] transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </Link>
            
            <Link href="https://www.tiktok.com/@crackscribe?_r=1&_t=ZS-9AqtR0VdKS4" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#98A6A9] hover:bg-[#00DDB5]/10 hover:border-[#00DDB5]/30 hover:text-[#00DDB5] transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.56 3.23-1.58 4.45-1.07 1.28-2.67 2.05-4.32 2.21-1.65.15-3.32-.23-4.71-1.09-1.39-.86-2.42-2.19-2.9-3.77-.48-1.58-.39-3.29.25-4.81.65-1.51 1.83-2.73 3.28-3.37 1.45-.63 3.09-.69 4.58-.17v4.11c-.56-.25-1.19-.31-1.78-.17-.6.13-1.14.47-1.54.95-.4.48-.62 1.1-.6 1.73.01.63.26 1.23.68 1.68.42.45 1.01.74 1.63.8.63.07 1.27-.08 1.79-.42.53-.34.92-.84 1.11-1.44.2-.6.22-1.25.05-1.85V.02h3.68z"/></svg>
            </Link>
            
            <Link href="https://www.facebook.com/share/19ssRS1SL4/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#98A6A9] hover:bg-[#00DDB5]/10 hover:border-[#00DDB5]/30 hover:text-[#00DDB5] transition-all duration-300">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            
            <Link href="https://discord.gg/pACZhTUAY" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#98A6A9] hover:bg-[#00DDB5]/10 hover:border-[#00DDB5]/30 hover:text-[#00DDB5] transition-all duration-300">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
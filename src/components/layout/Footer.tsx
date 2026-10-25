import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative bg-[#000000] pt-24 pb-12 px-6 border-t border-white/10 overflow-hidden">
      {/* Premium Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-t from-purple-900/[0.05] to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Premium Mobile-Only CTA Panel */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#130927] to-[#050505] shadow-[0_20px_60px_rgba(168,85,247,0.15)] mb-24 relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 transition-transform duration-1000 group-hover:scale-110"></div>
          
          <div className="mb-8 lg:mb-0 text-center lg:text-left relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Ready to upgrade your workflow?</h3>
            <p className="text-gray-400 text-sm md:text-base font-light">Download CrackScribe on your mobile device and edit like a professional today.</p>
          </div>
          
          <div className="flex flex-col w-full sm:w-auto relative z-10">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:scale-[1.02] shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-4 relative overflow-hidden group/btn border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              
              <svg className="w-8 h-8 relative z-10 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.161-.097-.271-.24-.316-.407a1.53 1.53 0 01-.044-.36V2.581c0-.138.016-.271.045-.396a1.05 1.05 0 01.314-.37zm11.168 11.17l3.666-3.667-4.652-2.673-3.667 3.666 4.653 2.674zm.987 1.054l3.774 2.169c1.032.593 1.03 1.554-.002 2.148l-1.854 1.066-5.584-5.583 3.666-3.666zm-5.75-5.75l-4.73-2.718L9.932 4.19l4.73 2.718-4.65 4.649z"/>
              </svg>
              
              <div className="flex flex-col items-start leading-none relative z-10">
                <span className="text-[10px] uppercase font-bold text-white/80 tracking-wider mb-1">Get it on</span>
                <span className="text-lg font-black tracking-tight drop-shadow-md">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="CrackScribe Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              <span className="text-white font-bold text-2xl tracking-tight">CrackScribe</span>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm">
              The ultimate offline AI studio. Wash noise, auto-trim silence, and generate smart cinematic captions natively on your phone.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide uppercase">Product</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 font-light">
              <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Download App</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide uppercase">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Video Tutorials</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">Help Center & FAQ</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Community Forum</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide uppercase">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">About CRACK404</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link></li>
              {/* Linked the Terms page right here */}
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Social Media */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-xs font-mono tracking-wider">
            &copy; {new Date().getFullYear()} Crack404. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="/" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </Link>
            <Link href="/" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.56 3.23-1.58 4.45-1.07 1.28-2.67 2.05-4.32 2.21-1.65.15-3.32-.23-4.71-1.09-1.39-.86-2.42-2.19-2.9-3.77-.48-1.58-.39-3.29.25-4.81.65-1.51 1.83-2.73 3.28-3.37 1.45-.63 3.09-.69 4.58-.17v4.11c-.56-.25-1.19-.31-1.78-.17-.6.13-1.14.47-1.54.95-.4.48-.62 1.1-.6 1.73.01.63.26 1.23.68 1.68.42.45 1.01.74 1.63.8.63.07 1.27-.08 1.79-.42.53-.34.92-.84 1.11-1.44.2-.6.22-1.25.05-1.85V.02h3.68z"/></svg>
            </Link>
            <Link href="/" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            <Link href="/" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
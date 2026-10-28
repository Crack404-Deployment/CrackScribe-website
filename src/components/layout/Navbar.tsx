"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to trigger the floating pill animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Tutorials", href: "#media" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center transition-all duration-300 ease-out ${
          isScrolled ? 'py-4 md:py-5 px-4' : 'py-6 md:py-8'
        }`}
      >
        <nav 
          className={`transition-all duration-300 ease-out flex items-center justify-between ${
            isScrolled 
              ? 'w-full max-w-4xl bg-[#020a0d]/85 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/5' 
              : 'w-full max-w-7xl bg-transparent border-transparent px-6 md:px-12 lg:px-20 py-2'
          }`}
        >
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative w-7 h-7 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 bg-[#00f0b5]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image 
                src="/logo.png" 
                alt="CrackScribe Logo" 
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-white transition-opacity group-hover:opacity-90">
              Crack<span className="text-gradient-cyan">Scribe</span>
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative group px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="relative z-10 tracking-wide">{link.name}</span>
                {/* Premium Hover Pill Background */}
                <div className="absolute inset-0 bg-white/[0.05] rounded-full opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 ease-out border border-white/5"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3 relative z-10">
            
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button className="flex items-center justify-center px-5 py-2 text-xs font-bold tracking-wider text-[#01090c] bg-[#00f0b5] rounded-full hover:scale-105 shadow-[0_0_15px_rgba(0,240,181,0.2)] hover:shadow-[0_0_25px_rgba(0,240,181,0.4)] transition-all duration-300 relative overflow-hidden group border border-[#00f0b5]/50">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 uppercase">Get CrackScribe</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button 
              className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white focus:outline-none hover:bg-[#00f0b5]/20 hover:text-[#00f0b5] hover:border-[#00f0b5]/30 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu (Full Screen Overlay) */}
      <div 
        className={`fixed inset-0 z-50 bg-[#010608]/95 backdrop-blur-2xl md:hidden transition-all duration-300 ease-out flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Decorative Background Aura for Mobile Menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00f0b5]/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Dedicated Close Button */}
        <button 
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-gray-400 hover:text-[#00f0b5] transition-colors relative z-10 w-full text-center py-2"
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(15px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transitionProperty: 'all',
                transitionDuration: '300ms'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <div 
            className="relative z-10 w-full flex justify-center mt-4"
            style={{ 
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 40}ms` : '0ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(15px)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transitionProperty: 'all',
              transitionDuration: '300ms'
            }}
          >
            <button className="px-10 py-4 w-full max-w-[250px] text-sm font-bold tracking-wider text-[#01090c] bg-[#00f0b5] rounded-full shadow-[0_0_30px_rgba(0,240,181,0.3)] uppercase hover:scale-105 transition-transform">
              Download App
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
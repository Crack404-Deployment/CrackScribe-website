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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Tutorials", href: "#media" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-in-out ${
        isScrolled ? 'py-4 md:py-6 px-4' : 'py-6 md:py-8'
      }`}
    >
      <nav 
        className={`transition-all duration-700 ease-in-out flex items-center justify-between ${
          isScrolled 
            ? 'w-full max-w-5xl bg-[#020a0d]/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
            : 'w-full max-w-7xl bg-transparent border-transparent px-6 md:px-12 lg:px-20 py-2'
        }`}
      >
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-10">
          <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
            {/* Subtle glow behind logo on hover */}
            <div className="absolute inset-0 bg-[#00f0b5]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image 
              src="/logo.png" 
              alt="CrackScribe Logo" 
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white transition-opacity group-hover:opacity-90">
            Crack<span className="text-gradient-cyan">Scribe</span>
          </span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 relative z-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative group px-4 lg:px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10 tracking-wide">{link.name}</span>
              {/* Premium Hover Pill Background */}
              <div className="absolute inset-0 bg-white/[0.06] rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ease-out border border-white/5"></div>
            </Link>
          ))}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-10">
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="flex items-center justify-center px-6 py-2.5 text-xs font-bold tracking-wider text-[#01090c] bg-[#00f0b5] rounded-full hover:scale-105 shadow-[0_0_20px_rgba(0,240,181,0.2)] hover:shadow-[0_0_30px_rgba(0,240,181,0.4)] transition-all duration-300 relative overflow-hidden group border border-[#00f0b5]/50">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 uppercase">Get CrackScribe</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white focus:outline-none hover:bg-[#00f0b5]/20 hover:text-[#00f0b5] hover:border-[#00f0b5]/30 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (Glassmorphic) */}
      <div 
        className={`fixed inset-0 z-40 bg-[#020a0d]/98 backdrop-blur-2xl md:hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Decorative Background Aura for Mobile Menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00f0b5]/10 blur-[100px] rounded-full pointer-events-none"></div>

        {navLinks.map((link, index) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-gray-400 hover:text-[#00f0b5] transition-colors relative z-10"
            style={{ 
              transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            {link.name}
          </Link>
        ))}
        
        <div 
          className="relative z-10"
          style={{ 
            transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: isMobileMenuOpen ? 1 : 0
          }}
        >
          <button className="px-10 py-4 mt-4 text-sm font-bold tracking-wider text-[#01090c] bg-[#00f0b5] rounded-full shadow-[0_0_30px_rgba(0,240,181,0.3)] uppercase">
            Download App
          </button>
        </div>
      </div>
    </header>
  );
};
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {/* Logo Image */}
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="CrackScribe Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Logo Text */}
            <span className="text-xl font-bold tracking-tight text-white">
              Crack<span className="text-gradient-c404">Scribe</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
          <Link href="#media" className="hover:text-white transition-colors">Tutorials</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button variant="primary" className="!py-2 !px-4 !text-xs">
            Get CrackScribe
          </Button>
        </div>

      </div>
    </nav>
  );
};
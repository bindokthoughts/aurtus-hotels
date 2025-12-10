'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set([overlayRef.current, titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 1,
      });
      return;
    }

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate overlay fade
    timeline.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate title with scale
    timeline.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2 },
      '-=1'
    );

    // Animate subtitle
    timeline.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.6'
    );

    // Animate CTA buttons
    timeline.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div
          className="h-[120vh] w-full bg-cover bg-center bg-no-repeat transition-transform duration-100"
          style={{ backgroundImage: 'url(/hero.jpg)' }}
        />
      </div>

      {/* Gradient Overlays for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-amber-900/20 to-transparent" />

      {/* Content */}
      <div
        ref={overlayRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
      >
        {/* Decorative line */}
        <div className="mb-6 h-px w-16 bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]" />
        
        <h1
          ref={titleRef}
          className="font-serif text-7xl font-light tracking-[0.2em] md:text-8xl lg:text-9xl mb-2"
        >
          AURTUS
        </h1>
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] text-amber-200/90 mb-8">
          HOTELS
        </p>
        
        <p
          ref={subtitleRef}
          className="mt-4 font-sans text-lg tracking-[0.3em] text-gray-200 md:text-xl lg:text-2xl uppercase max-w-2xl"
        >
          Where Luxury Meets Elegance
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-amber-600 text-white font-medium tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-amber-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/50"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-linear-to-r from-amber-700 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a
            href="#facilities"
            className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
          >
            Explore More
          </a>
        </div>

        {/* Scroll Indicator with pulse */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-pulse">
          <span className="text-xs tracking-wider text-white/60 uppercase">Scroll</span>
          <svg
            className="h-6 w-6 text-white/70 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-amber-500/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-amber-500/30" />
    </section>
  );
}

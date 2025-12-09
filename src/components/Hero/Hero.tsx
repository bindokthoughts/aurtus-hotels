'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      gsap.set([overlayRef.current, titleRef.current, subtitleRef.current], {
        opacity: 1,
      });
      return;
    }

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate overlay fade
    timeline.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );

    // Split title text into characters for stagger animation
    if (titleRef.current) {
      const titleText = titleRef.current.textContent || '';
      titleRef.current.innerHTML = titleText
        .split('')
        .map((char) => {
          if (char === ' ') return '<span class="inline-block">&nbsp;</span>';
          return `<span class="inline-block opacity-0">${char}</span>`;
        })
        .join('');

      timeline.to(
        titleRef.current.querySelectorAll('span'),
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.03,
        },
        '-=0.6'
      );
    }

    // Animate subtitle
    timeline.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.4'
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero.jpg)' }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div
        ref={overlayRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
      >
        <h1
          ref={titleRef}
          className="font-serif text-6xl font-light tracking-wider md:text-8xl lg:text-9xl"
        >
          Aurtus Hotels
        </h1>
        <p
          ref={subtitleRef}
          className="mt-6 font-sans text-xl tracking-widest text-gray-200 md:text-2xl lg:text-3xl"
        >
          Unveiling Soon
        </p>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 animate-bounce">
          <svg
            className="h-6 w-6 text-white/70"
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
    </section>
  );
}

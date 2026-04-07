'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    // Ultra-smooth float-up animation
    tl.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power3.out" }
    );
    tl.fromTo(
      ".hero-image",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" },
      "-=1"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-background flex flex-col justify-end overflow-hidden pt-24 pb-12 px-6 md:px-12 lg:px-24">
      {/* Absolute Image placed as a structural block rather than a full background */}
      <div className="hero-image absolute top-0 right-0 w-[80%] md:w-[60%] lg:w-[45%] h-[60vh] md:h-[80vh] bg-cover bg-center rounded-bl-[100px] overflow-hidden z-0 shadow-sm"
        style={{ backgroundImage: 'url(/assets/images/MainHall.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full flex flex-col gap-6 md:gap-10">
        <p className="hero-text text-sm md:text-base tracking-widest uppercase text-accent-dark font-medium">
          The Next Chapter
        </p>

        <div className="hero-text pb-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <img src="/assets/images/brandlogo/Aurtus_Logo_Horizontal.svg" alt="Aurtus Hotels Logo" className="w-full h-auto drop-shadow-sm" />
        </div>

        <div className="hero-text flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
          <a
            href="#contact"
            className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-foreground text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            {/* Minimalist Arrow */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-45">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="max-w-[200px] text-sm text-foreground/70 leading-relaxed font-sans">
            Unveiling a radically new vision of refined living.
          </p>
        </div>
      </div>
    </section>
  );
}

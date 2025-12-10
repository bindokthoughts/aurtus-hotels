'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 150, suffix: '+', label: 'Luxury Suites', icon: '🏛️' },
  { value: 5, suffix: '★', label: 'Star Rating', icon: '⭐' },
  { value: 24, suffix: '/7', label: 'Concierge Service', icon: '🛎️' },
  { value: 98, suffix: '%', label: 'Guest Satisfaction', icon: '😊' },
];

function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = gsap.to(
      { value: 0 },
      {
        value: end,
        duration,
        ease: 'power2.out',
        onUpdate: function () {
          setCount(Math.floor(this.targets()[0].value));
        },
        scrollTrigger: {
          trigger: node,
          start: 'top 80%',
          once: true,
        },
      }
    );

    return () => {
      controls.kill();
    };
  }, [end, duration]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(cardsRef.current, { opacity: 1, scale: 1 });
      return;
    }

    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, { scope: containerRef, dependencies: [] });

  return (
    <section
      ref={containerRef}
      className="relative bg-gray-900 py-20 px-4 md:py-24 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            Excellence in Numbers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our commitment to luxury and service excellence speaks through our achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:bg-gray-800/70"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300 font-medium tracking-wider uppercase text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

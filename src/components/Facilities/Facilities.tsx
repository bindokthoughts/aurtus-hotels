'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Facility {
  title: string;
  description: string;
  icon: string;
}

const facilities: Facility[] = [
  {
    title: 'Accommodation',
    description: 'Exquisitely appointed suites and rooms designed for ultimate comfort and refined living.',
    icon: '🏨',
  },
  {
    title: 'Dining',
    description: 'Culinary excellence featuring world-class cuisine crafted by renowned chefs.',
    icon: '🍽️',
  },
  {
    title: 'Events & Celebrations',
    description: 'Elegant venues for unforgettable moments, from intimate gatherings to grand celebrations.',
    icon: '🎉',
  },
  {
    title: 'Meetings & Business',
    description: 'State-of-the-art facilities equipped for productive conferences and corporate events.',
    icon: '💼',
  },
  {
    title: 'Wellness',
    description: 'Rejuvenating spa experiences and fitness amenities for holistic well-being.',
    icon: '🧘',
  },
];

export default function Facilities() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(cardsRef.current, { opacity: 1, y: 0 });
      return;
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
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
      className="bg-gray-50 py-20 px-4 md:py-32"
      id="facilities"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Experience Excellence
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-6">{facility.icon}</div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                {facility.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

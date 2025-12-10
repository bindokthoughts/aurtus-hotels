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
  color: string;
}

const facilities: Facility[] = [
  {
    title: 'Luxury Accommodation',
    description: 'Exquisitely appointed suites and rooms designed for ultimate comfort and refined living with panoramic views.',
    icon: '🏨',
    color: 'from-amber-500/10 to-orange-500/10',
  },
  {
    title: 'Fine Dining',
    description: 'Culinary excellence featuring world-class cuisine crafted by Michelin-starred chefs in elegant settings.',
    icon: '🍽️',
    color: 'from-rose-500/10 to-pink-500/10',
  },
  {
    title: 'Events & Celebrations',
    description: 'Elegant venues for unforgettable moments, from intimate gatherings to grand celebrations with bespoke planning.',
    icon: '🎉',
    color: 'from-purple-500/10 to-violet-500/10',
  },
  {
    title: 'Business Excellence',
    description: 'State-of-the-art facilities equipped for productive conferences and corporate events with cutting-edge technology.',
    icon: '💼',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    title: 'Wellness & Spa',
    description: 'Rejuvenating spa experiences and premium fitness amenities for holistic well-being and total relaxation.',
    icon: '🧘',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: 'Concierge Services',
    description: '24/7 personalized concierge services ensuring every aspect of your stay exceeds expectations.',
    icon: '🛎️',
    color: 'from-amber-500/10 to-yellow-500/10',
  },
];

export default function Facilities() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set([headerRef.current, ...cardsRef.current], { opacity: 1, y: 0 });
      return;
    }

    // Animate header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate cards with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.2)',
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
      className="relative bg-linear-to-b from-white via-gray-50 to-white py-24 px-4 md:py-32 overflow-hidden"
      id="facilities"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium tracking-wider uppercase rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            Experience Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in unparalleled luxury with our comprehensive range of world-class amenities and services
          </p>
          <div className="mt-6 w-24 h-1 bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-linear-to-br ${facility.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative z-10">
                {/* Icon with animated background */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-amber-100 rounded-2xl blur-xl group-hover:scale-150 group-hover:bg-amber-200 transition-all duration-500" />
                  <div className="relative text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {facility.icon}
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4 group-hover:text-amber-900 transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {facility.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

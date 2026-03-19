'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Facility {
  title: string;
  description: string;
}

const facilities: Facility[] = [
  {
    title: 'Luxury Accommodation',
    description: 'Exquisitely appointed suites designed for ultimate comfort and refined living.',
  },
  {
    title: 'Fine Dining',
    description: 'Culinary excellence crafted by Michelin-starred chefs in elegant settings.',
  },
  {
    title: 'Events & Celebrations',
    description: 'Elegant venues for unforgettable moments, from intimate to grand.',
  },
  {
    title: 'Wellness & Spa',
    description: 'Rejuvenating spa experiences and premium fitness amenities.',
  },
  {
    title: 'Concierge Services',
    description: '24/7 personalized concierge ensuring every aspect exceeds expectations.',
  },
];

export default function Facilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.facility-item') as HTMLElement[];

    items.forEach((item) => {
      gsap.fromTo(item,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background" id="facilities">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-16 md:gap-24">

        {/* Sticky Header Side */}
        <div className="md:w-1/3 flex flex-col justify-start">
          <div className="sticky top-32">
            <p className="text-sm tracking-widest uppercase text-accent-dark font-medium mb-6">
              Our Offering
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6 leading-none">
              Experience <br className="hidden md:block" /> Form & Function.
            </h2>
            <p className="text-base text-foreground/70 leading-relaxed font-sans max-w-sm">
              Immerse yourself in unparalleled luxury, where minimal design meets maximum comfort.
            </p>
          </div>
        </div>

        {/* Editorial List Side */}
        <div className="md:w-2/3 flex flex-col">
          <div className="border-t border-accent min-w-full" />
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="facility-item group py-8 border-b border-accent flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between items-start sm:items-center cursor-pointer hover:border-foreground transition-colors duration-500"
            >
              <div className="flex items-baseline gap-6 w-full sm:w-1/2">
                <span className="text-sm text-accent-dark font-mono">0{index + 1}</span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-light group-hover:pl-4 transition-all duration-500">
                  {facility.title}
                </h3>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed font-sans w-full sm:w-1/2 group-hover:text-foreground transition-colors duration-500">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

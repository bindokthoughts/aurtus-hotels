import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface UseGsapTextOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  splitBy?: 'chars' | 'words';
}

export function useGsapText(
  textRef: React.RefObject<HTMLElement | null>,
  options: UseGsapTextOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.03,
    ease = 'power3.out',
    splitBy = 'chars',
  } = options;

  useGSAP(
    () => {
      if (!textRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        gsap.set(textRef.current, { opacity: 1 });
        return;
      }

      const text = textRef.current.textContent || '';
      
      if (splitBy === 'chars') {
        // Split by characters
        textRef.current.innerHTML = text
          .split('')
          .map((char) => {
            if (char === ' ') return '<span class="inline-block">&nbsp;</span>';
            return `<span class="inline-block opacity-0" style="transform: translateY(20px);">${char}</span>`;
          })
          .join('');
      } else {
        // Split by words
        textRef.current.innerHTML = text
          .split(' ')
          .map((word) => {
            return `<span class="inline-block opacity-0 mr-[0.25em]" style="transform: translateY(20px);">${word}</span>`;
          })
          .join('');
      }

      const spans = textRef.current.querySelectorAll('span');
      
      gsap.to(spans, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease,
        delay,
      });
    },
    { scope: textRef }
  );
}

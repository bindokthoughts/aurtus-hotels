'use client';

import { useRef } from 'react';
import { useGsapText } from './useGsapText';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  delay?: number;
  duration?: number;
  stagger?: number;
  splitBy?: 'chars' | 'words';
}

export default function AnimatedText({
  text,
  className = '',
  as: Component = 'p',
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
  splitBy = 'chars',
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useGsapText(textRef, { delay, duration, stagger, splitBy });

  return (
    <Component ref={textRef as any} className={className}>
      {text}
    </Component>
  );
}

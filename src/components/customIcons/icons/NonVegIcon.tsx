import React from 'react';
import Image from 'next/image';
import nonVegSvg from './non-veg.svg';

interface IconProps {
  size?: number;
  className?: string;
  title?: string;
}

export default function NonVegIcon({ size = 20, className = '', title = 'Non-Vegetarian' }: IconProps) {
  return (
    <span title={title} className="inline-flex items-center cursor-help">
      <Image
        src={nonVegSvg}
        alt={title}
        width={size}
        height={size}
        className={`inline-block align-middle ${className}`}
      />
    </span>
  );
}

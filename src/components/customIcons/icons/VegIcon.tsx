import React from 'react';
import Image from 'next/image';
import vegSvg from './veg.svg';

interface IconProps {
  size?: number;
  className?: string;
  title?: string;
}

export default function VegIcon({ size = 20, className = '', title = 'Vegetarian' }: IconProps) {
  return (
    <span title={title} className="inline-flex items-center cursor-help">
      <Image
        src={vegSvg}
        alt={title}
        width={size}
        height={size}
        className={`inline-block align-middle ${className}`}
      />
    </span>
  );
}

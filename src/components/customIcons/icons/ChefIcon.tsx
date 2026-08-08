import React from 'react';
import Image from 'next/image';
import chefSvg from './chef.svg';

interface IconProps {
  size?: number;
  className?: string;
  title?: string;
}

export default function ChefIcon({ size = 20, className = '', title = "Chef's Signature Dish" }: IconProps) {
  return (
    <span title={title} className="inline-flex items-center cursor-help">
      <Image
        src={chefSvg}
        alt={title}
        width={size}
        height={size}
        className={`inline-block align-middle ${className}`}
      />
    </span>
  );
}

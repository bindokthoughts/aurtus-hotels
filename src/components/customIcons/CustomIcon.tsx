import React from 'react';
import { ChefIcon, VegIcon, NonVegIcon } from './icons';

export type IconType = 'chef' | 'veg' | 'non-veg' | 'nonveg';

interface CustomIconProps {
  icon: IconType | string;
  className?: string;
  size?: number;
  title?: string;
}

export default function CustomIcon({ icon, className = '', size = 20, title }: CustomIconProps) {
  const normalizedIcon = (icon || '').toLowerCase().trim();

  if (normalizedIcon === 'chef') {
    return <ChefIcon size={size} className={className} title={title || "Chef's Signature Dish"} />;
  }

  if (normalizedIcon === 'veg') {
    return <VegIcon size={size} className={className} title={title || 'Vegetarian'} />;
  }

  if (normalizedIcon === 'non-veg' || normalizedIcon === 'nonveg') {
    return <NonVegIcon size={size} className={className} title={title || 'Non-Vegetarian'} />;
  }

  return null;
}

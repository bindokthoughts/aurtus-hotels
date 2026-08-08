'use client';

import React, { useRef } from 'react';
import { MenuCategory } from '@/types/dining';
import gsap from 'gsap';

interface CategoryFilterProps {
  categories: MenuCategory[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  if (!categories || categories.length === 0) return null;

  const handleCategoryClick = (categoryName: string, target: HTMLElement) => {
    onSelectCategory(categoryName);
    // Subtle scale feedback animation on pill click
    gsap.fromTo(target, { scale: 0.95 }, { scale: 1, duration: 0.25, ease: 'back.out(2)' });
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
    >
      <button
        onClick={(e) => handleCategoryClick('ALL', e.currentTarget)}
        className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap border ${
          selectedCategory === 'ALL'
            ? 'bg-foreground/10 text-foreground border-foreground/30 font-medium shadow-sm scale-100'
            : 'bg-white/60 text-foreground/60 border-accent hover:border-accent-dark hover:text-foreground'
        }`}
      >
        All Categories
      </button>
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.category_name;
        return (
          <button
            key={cat.category_name}
            onClick={(e) => handleCategoryClick(cat.category_name, e.currentTarget)}
            className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap border ${
              isSelected
                ? 'bg-foreground/10 text-foreground border-foreground/30 font-medium shadow-sm'
                : 'bg-white/60 text-foreground/60 border-accent hover:border-accent-dark hover:text-foreground'
            }`}
          >
            {cat.category_name}
          </button>
        );
      })}
    </div>
  );
}

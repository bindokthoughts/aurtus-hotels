import React from 'react';
import { MenuItem } from '@/types/dining';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="menu-item-card p-6 bg-white border border-accent hover:border-accent-dark transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md">
      <div>
        <div className="flex justify-between items-start gap-4 mb-2">
          <h4 className="font-sans font-medium text-foreground text-base group-hover:text-black transition-colors">
            {item.name}
          </h4>
          <span className="font-mono text-sm font-semibold text-foreground bg-accent/40 px-2.5 py-1 rounded-sm whitespace-nowrap">
            {item.price}
          </span>
        </div>
        {item.description && (
          <p className="text-foreground/65 text-xs font-sans leading-relaxed mt-2">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

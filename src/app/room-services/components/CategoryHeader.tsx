import React from 'react';
import { MenuCategory } from '@/types/dining';
import { CustomIcon } from '@/components/customIcons';

interface CategoryHeaderProps {
  category: MenuCategory;
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  const categoryType = (category.category_type || 'Veg').trim();
  const isBoth = categoryType.toLowerCase() === 'both';

  return (
    <div className="flex items-center justify-between border-b border-accent pb-3 mb-6 gap-4">
      <div className="flex items-center gap-3 flex-wrap">
        <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-medium">
          {category.category_name}
        </h3>
        {categoryType && (
          <div className="inline-flex items-center gap-1.5 bg-accent/30 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-foreground/75">
            {isBoth ? (
              <>
                <CustomIcon icon="veg" size={24} title="Vegetarian Dishes" />
                <CustomIcon icon="non-veg" size={24} title="Non-Vegetarian Dishes" />
              </>
            ) : (
              <CustomIcon
                icon={categoryType}
                size={24}
                title={categoryType.toLowerCase().includes('non') ? 'Non-Vegetarian Category' : 'Vegetarian Category'}
              />
            )}
          </div>
        )}
      </div>
      <span className="text-xs font-mono text-foreground/40 whitespace-nowrap">
        {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
      </span>
    </div>
  );
}

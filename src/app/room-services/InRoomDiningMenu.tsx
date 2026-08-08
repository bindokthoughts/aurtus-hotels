'use client';

import React, { useState, useMemo, useRef } from 'react';
import { InRoomDiningData } from '@/types/dining';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  ServiceTabs,
  SearchBar,
  CategoryFilter,
  ServiceRibbon,
  MenuItemCard,
  MenuDisclaimers,
} from './components';

interface InRoomDiningMenuProps {
  data: InRoomDiningData;
}

export default function InRoomDiningMenu({ data }: InRoomDiningMenuProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const menuContainerRef = useRef<HTMLDivElement>(null);

  const currentService = data.service_menus[activeServiceIndex] || data.service_menus[0];

  // Reset category filter when changing service tabs
  const handleServiceChange = (index: number) => {
    setActiveServiceIndex(index);
    setSelectedCategory('ALL');
  };

  // Filtered categories and items based on search and selected category
  const filteredCategories = useMemo(() => {
    if (!currentService) return [];

    const query = searchQuery.trim().toLowerCase();

    return currentService.categories
      .filter((cat) => {
        if (selectedCategory !== 'ALL' && cat.category_name !== selectedCategory) {
          return false;
        }
        return true;
      })
      .map((cat) => {
        if (!query) return cat;

        const matchingItems = cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            (item.description && item.description.toLowerCase().includes(query))
        );

        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [currentService, selectedCategory, searchQuery]);

  // GSAP animation when category, service, or search changes
  useGSAP(
    () => {
      if (!menuContainerRef.current) return;

      const sections = menuContainerRef.current.querySelectorAll('.menu-category-section');
      const cards = menuContainerRef.current.querySelectorAll('.menu-item-card');

      if (sections.length > 0) {
        gsap.fromTo(
          sections,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.06 }
        );
      }

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.02, delay: 0.05 }
        );
      }
    },
    { dependencies: [selectedCategory, activeServiceIndex, searchQuery], scope: menuContainerRef }
  );

  return (
    <div className="w-full">
      {/* Service Tabs & Search Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-accent pb-6 mb-8 gap-4">
        <ServiceTabs
          services={data.service_menus}
          activeServiceIndex={activeServiceIndex}
          onSelectService={handleServiceChange}
        />
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </div>

      {/* Category Filter Pills */}
      <CategoryFilter
        categories={currentService?.categories || []}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Active Service Banner */}
      {currentService && (
        <ServiceRibbon
          serviceName={currentService.service_name}
          servedHours={currentService.served_hours}
        />
      )}

      {/* Animated Menu Container */}
      <div ref={menuContainerRef}>
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 border border-accent bg-white">
            <p className="text-foreground/60 font-sans mb-2">No menu items found.</p>
            {searchQuery && (
              <p className="text-xs font-mono text-foreground/40">
                Try searching for another dish or clear filters.
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <section key={category.category_name} className="menu-category-section scroll-mt-36">
                <div className="flex items-baseline justify-between border-b border-accent pb-3 mb-6">
                  <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-medium">
                    {category.category_name}
                  </h3>
                  <span className="text-xs font-mono text-foreground/40">
                    {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, idx) => (
                    <MenuItemCard key={`${item.name}-${idx}`} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      {/* Policy & Disclaimers */}
      <MenuDisclaimers disclaimers={data.disclaimers} />
    </div>
  );
}

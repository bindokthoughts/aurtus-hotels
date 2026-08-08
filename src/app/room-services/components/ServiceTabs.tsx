import React from 'react';
import { ServiceMenu } from '@/types/dining';

interface ServiceTabsProps {
  services: ServiceMenu[];
  activeServiceIndex: number;
  onSelectService: (index: number) => void;
}

export default function ServiceTabs({
  services,
  activeServiceIndex,
  onSelectService,
}: ServiceTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {services.map((service, idx) => {
        const isActive = idx === activeServiceIndex;
        return (
          <button
            key={service.service_name}
            onClick={() => onSelectService(idx)}
            className={`px-6 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-200 border ${
              isActive
                ? 'bg-foreground text-background border-foreground shadow-sm'
                : 'bg-white text-foreground/70 border-accent hover:border-foreground/50 hover:text-foreground'
            }`}
          >
            <span>{service.service_name}</span>
            <span className="ml-2 text-[10px] opacity-75 font-sans lowercase">
              ({service.served_hours})
            </span>
          </button>
        );
      })}
    </div>
  );
}

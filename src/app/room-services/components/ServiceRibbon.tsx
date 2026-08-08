import React from 'react';

interface ServiceRibbonProps {
  serviceName: string;
  servedHours: string;
}

export default function ServiceRibbon({ serviceName, servedHours }: ServiceRibbonProps) {
  return (
    <div className="bg-foreground/3 border border-accent/80 px-6 py-4 mb-12 flex items-center justify-between">
      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
          Current Selection
        </span>
        <h2 className="font-display text-xl font-light text-foreground mt-0.5">
          {serviceName}
        </h2>
      </div>
      <div className="text-right">
        <span className="font-mono text-xs text-foreground/60 uppercase block">Served Hours</span>
        <span className="font-mono text-sm text-foreground font-medium">
          {servedHours}
        </span>
      </div>
    </div>
  );
}

import React from 'react';

interface MenuDisclaimersProps {
  disclaimers: string[];
}

export default function MenuDisclaimers({ disclaimers }: MenuDisclaimersProps) {
  if (!disclaimers || disclaimers.length === 0) return null;

  return (
    <div className="mt-20 p-8 border border-accent bg-white shadow-sm">
      <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/70 mb-4 font-semibold">
        Important Information & Policy
      </h4>
      <ul className="space-y-2 text-xs font-sans text-foreground/60 leading-relaxed list-disc list-inside">
        {disclaimers.map((disclaimer, idx) => (
          <li key={idx}>{disclaimer}</li>
        ))}
      </ul>
    </div>
  );
}

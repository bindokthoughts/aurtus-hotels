import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative w-full md:w-72">
      <input
        type="text"
        placeholder="Search menu..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-white border border-accent px-4 py-2.5 text-sm font-sans placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
      />
      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-foreground/50 hover:text-foreground"
        >
          CLEAR
        </button>
      )}
    </div>
  );
}

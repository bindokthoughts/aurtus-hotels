import React from 'react';
import rawMenuData from '@/data/InRoomDinIn.json';
import { processDiningData } from '@/lib/diningUtils';
import InRoomDiningMenu from './InRoomDiningMenu';
import { RoomServiceContact } from './components';

export const metadata = {
  title: 'In-Room Dining | Aurtus Hotels',
  description: 'Explore the in-room dining menu and services offered at Aurtus Hotels.',
};

export default function RoomServicesPage() {
  const menuData = processDiningData(rawMenuData);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3 block">
            {menuData.restaurant} &bull; {menuData.menu_title}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6">
            In-Room Dining <br className="hidden md:inline" />& Services
          </h1>
          <p className="text-foreground/70 text-lg font-sans max-w-2xl">
            Discover a world of culinary delights and premium services, delivered straight to your door.
          </p>
        </div>

        {/* Dynamic Interactive Menu */}
        <InRoomDiningMenu data={menuData} />

        {/* Ordering Footer & CTAs */}
        <RoomServiceContact phoneNumber="+918956554600" />
      </div>
    </div>
  );
}

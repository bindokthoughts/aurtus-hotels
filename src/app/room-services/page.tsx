import React from 'react';
import Link from 'next/link';

export default function RoomServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-light mb-8">In-Room Dining <br />& Services</h1>
        <p className="text-foreground/70 text-lg mb-16 font-sans">
          Discover a world of culinary delights and premium services, delivered straight to your door.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Breakfast Menu */}
          <div className="border border-accent p-8 bg-white shadow-sm">
            <h3 className="font-mono text-sm uppercase tracking-widest text-accent-dark mb-6 border-b border-accent pb-4">Breakfast (6:00 AM - 11:00 AM)</h3>
            <ul className="space-y-6 font-sans text-sm">
              <li className="flex justify-between items-start">
                <div>
                  <h4 className="text-foreground font-medium mb-1">Aurtus Signature Continental</h4>
                  <p className="text-foreground/60 text-xs">Freshly baked pastries, seasonal fruit, artisan cheese, coffee or tea.</p>
                </div>
                <span className="text-foreground/80 font-mono">₹1,250</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  <h4 className="text-foreground font-medium mb-1">Eggs Benedict</h4>
                  <p className="text-foreground/60 text-xs">Poached eggs, Canadian bacon, English muffin, hollandaise sauce.</p>
                </div>
                <span className="text-foreground/80 font-mono">₹850</span>
              </li>
            </ul>
          </div>

          {/* All Day Dining */}
          <div className="border border-accent p-8 bg-white shadow-sm">
            <h3 className="font-mono text-sm uppercase tracking-widest text-accent-dark mb-6 border-b border-accent pb-4">All Day (11:00 AM - 11:00 PM)</h3>
            <ul className="space-y-6 font-sans text-sm">
              <li className="flex justify-between items-start">
                <div>
                  <h4 className="text-foreground font-medium mb-1">Wagyu Beef Burger</h4>
                  <p className="text-foreground/60 text-xs">Truffle aioli, vintage cheddar, brioche bun, hand-cut fries.</p>
                </div>
                <span className="text-foreground/80 font-mono">₹1,450</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  <h4 className="text-foreground font-medium mb-1">Caesar Salad</h4>
                  <p className="text-foreground/60 text-xs">Baby gem lettuce, parmesan crisp, anchovies, soft boiled egg.</p>
                </div>
                <span className="text-foreground/80 font-mono">₹750</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-accent pt-12">
          <p className="text-sm text-foreground/60 font-sans mb-6">
            To place an order or request special services, please call the front desk or use the direct line.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+918956554600" className="inline-block bg-foreground text-background px-8 py-4 text-xs font-mono uppercase tracking-widest hover:opacity-90 transition-opacity">
              Call Room Service
            </a>
            <Link href="/" className="inline-block border border-foreground text-foreground px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

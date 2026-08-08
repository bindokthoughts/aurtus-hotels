import React from 'react';
import Link from 'next/link';

interface RoomServiceContactProps {
  phoneNumber?: string;
}

export default function RoomServiceContact({ phoneNumber = '+918956554600' }: RoomServiceContactProps) {
  return (
    <div className="mt-20 text-center border-t border-accent pt-12">
      <p className="text-sm text-foreground/60 font-sans mb-6">
        To place an order or request special services, please call the front desk or use your direct room line.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href={`tel:${phoneNumber}`}
          className="inline-block bg-foreground text-background px-8 py-4 text-xs font-mono uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Call Room Service
        </a>
        <Link
          href="/"
          className="inline-block border border-foreground text-foreground px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

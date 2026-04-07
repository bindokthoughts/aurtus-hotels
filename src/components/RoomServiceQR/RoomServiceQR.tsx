import React from 'react';
import QRCode from 'react-qr-code';

export default function RoomServiceQR() {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-background border border-accent max-w-sm mx-auto shadow-sm">
      {/* Brand & Heading */}
      <div className="text-center mb-8">
        <h4 className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2">Guest Directory</h4>
        <h3 className="font-display text-2xl font-light text-foreground">Room Services</h3>
        <p className="text-sm text-foreground/60 mt-3 font-sans">
          Scan the QR code to explore in-room dining, spa reservations, and exclusive hotel amenities.
        </p>
      </div>

      {/* QR Code Container */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 p-4 border border-accent bg-white flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center p-2">
          <QRCode 
            value="https://aurtushotels.com/room-services" 
            size={256} 
            style={{ height: "auto", maxWidth: "100%", width: "100%" }} 
            viewBox={`0 0 256 256`}
            fgColor="#0A0A0A" 
            bgColor="#FFFFFF"
          />
        </div>
        
        {/* Decorative corner markers for a premium look */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-foreground"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-foreground"></div>
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-center">
        <p className="text-xs font-mono text-foreground/50 uppercase tracking-widest">
          aurtushotels.com/room-services
        </p>
      </div>
    </div>
  );
}

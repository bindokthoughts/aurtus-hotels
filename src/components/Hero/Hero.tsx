'use client';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/assets/images/MainHall.jpg)' }}
      />

      {/* Solid Overlay */}
      <div className="absolute inset-0 bg-gray-900/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-4">
          AURTUS HOTELS
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
          Unveiling Soon
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-amber-600 text-white font-medium uppercase transition-colors hover:bg-amber-700"
          >
            Get in Touch
          </a>
          <a
            href="#facilities"
            className="px-8 py-3 border-2 border-white text-white font-medium uppercase transition-colors hover:bg-white hover:text-gray-900"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}

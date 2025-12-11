'use client';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  title: string;
}

const stats: Stat[] = [
  { 
    title: 'ACCOMMODATION',
    value: 71, 
    suffix: '', 
    label: 'Thoughtfully Designed Rooms',
    description: 'Offering refined comfort and contemporary elegance'
  },
  { 
    title: 'GRAND BANQUET',
    value: 8000, 
    suffix: ' sq.ft', 
    label: 'Grand Banquet Hall',
    description: 'With a soaring 26 ft ceiling — perfect for majestic events'
  },
  { 
    title: 'PARTY HALL',
    value: 2500, 
    suffix: ' sq.ft', 
    label: 'Party Hall',
    description: 'For intimate celebrations and special gatherings'
  },
  { 
    title: 'EXHIBITION',
    value: 4000, 
    suffix: ' sq.ft', 
    label: 'Exhibition Hall',
    description: 'For showcases, expos, and premium displays'
  },
  { 
    title: 'BOARDROOMS',
    value: 2, 
    suffix: '', 
    label: 'Executive Boardrooms',
    description: 'Well-appointed spaces for productive discussions and corporate finesse'
  },
];

export default function Stats() {
  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Our Facilities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exceptional spaces designed to elevate every experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-800 p-8 border-2 border-gray-700 hover:border-amber-600 transition-colors"
            >
              <div className="text-amber-600 text-xs font-bold tracking-widest mb-4 uppercase">
                {stat.title}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-3">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white text-xl font-semibold mb-3">
                {stat.label}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-foreground py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center md:text-left mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-background/20 pb-8">
          <div>
            <p className="text-sm tracking-widest uppercase text-accent font-medium mb-4">
              Scale & Vision
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-background">
              The Blueprint
            </h2>
          </div>
          <p className="text-background/70 text-base max-w-sm md:text-right font-sans">
            Architectural spaces designed with purpose, prioritizing both monumental scale and intimate detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-6 opacity-60">
                <span className="text-xs font-mono text-background/80">0{index + 1}</span>
                <div className="h-px bg-background/30 flex-1 group-hover:bg-background transition-colors duration-500"></div>
                <div className="text-xs tracking-widest uppercase text-background/80">
                  {stat.title}
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl md:text-6xl font-display font-light text-background tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-lg text-background/60 font-sans">
                  {stat.suffix}
                </span>
              </div>

              <div className="text-background text-lg font-medium mb-2 font-display">
                {stat.label}
              </div>
              <p className="text-background/60 text-sm leading-relaxed font-sans">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

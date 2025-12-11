'use client';

interface Facility {
  title: string;
  description: string;
  icon: string;
}

const facilities: Facility[] = [
  {
    title: 'Luxury Accommodation',
    description: 'Exquisitely appointed suites and rooms designed for ultimate comfort and refined living with panoramic views.',
    icon: '🏨',
  },
  {
    title: 'Fine Dining',
    description: 'Culinary excellence featuring world-class cuisine crafted by Michelin-starred chefs in elegant settings.',
    icon: '🍽️',
  },
  {
    title: 'Events & Celebrations',
    description: 'Elegant venues for unforgettable moments, from intimate gatherings to grand celebrations with bespoke planning.',
    icon: '🎉',
  },
  {
    title: 'Business Excellence',
    description: 'State-of-the-art facilities equipped for productive conferences and corporate events with cutting-edge technology.',
    icon: '💼',
  },
  {
    title: 'Wellness & Spa',
    description: 'Rejuvenating spa experiences and premium fitness amenities for holistic well-being and total relaxation.',
    icon: '🧘',
  },
  {
    title: 'Concierge Services',
    description: '24/7 personalized concierge services ensuring every aspect of your stay exceeds expectations.',
    icon: '🛎️',
  },
];

export default function Facilities() {
  return (
    <section className="py-20 px-4 bg-white" id="facilities">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            Experience Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in unparalleled luxury with our comprehensive range of world-class amenities and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="bg-gray-50 p-8 border-2 border-gray-200 hover:border-amber-600 transition-colors"
            >
              <div className="text-5xl mb-4">
                {facility.icon}
              </div>

              <h3 className="font-serif text-2xl text-gray-900 mb-3">
                {facility.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

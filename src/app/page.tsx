import Hero from '@/components/Hero/Hero';
import Facilities from '@/components/Facilities/Facilities';
import Stats from '@/components/Stats/Stats';
import RoomServiceQR from '@/components/RoomServiceQR/RoomServiceQR';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Facilities />
      <Stats />
      
      <section className="py-16 md:py-24 bg-background border-t border-accent">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-left">
              <h2 className="font-display text-4xl mb-6 font-light">Digital Concierge</h2>
              <p className="text-foreground/70 font-sans leading-relaxed max-w-md">
                Experience seamless hospitality from the palm of your hand. Access our digital room service menu, order amenities, or securely reach the front desk instantly through our custom mobile portal.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <RoomServiceQR />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}

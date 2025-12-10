import Hero from '@/components/Hero/Hero';
import Facilities from '@/components/Facilities/Facilities';
import Stats from '@/components/Stats/Stats';
import ContactForm from '@/components/ContactForm/ContactForm';
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Facilities />
      <Stats />
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
}

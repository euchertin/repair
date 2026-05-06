import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Steps from '@/components/Steps';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Header />
      <Hero />
      <Services />
      <Steps />
      <Footer />
    </main>
  );
}

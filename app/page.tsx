import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

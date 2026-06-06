'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

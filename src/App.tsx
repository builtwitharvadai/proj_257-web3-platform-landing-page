import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Stats from './components/sections/Stats';
import LogoCloud from './components/sections/LogoCloud';
import Testimonials from './components/sections/Testimonials';
import ConnectCTA from './components/sections/ConnectCTA';

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <LogoCloud />
        <Testimonials />
        <ConnectCTA />
      </main>
      <Footer />
    </div>
  );
}

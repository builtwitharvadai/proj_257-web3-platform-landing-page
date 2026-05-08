import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

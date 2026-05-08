import React from 'react';
import Header from './components/layout/Header';

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-16 md:pt-20">
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-gradient animate-gradient-shift text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Web3 Platform
          </h1>
          <p className="mt-6 text-lg text-zinc-400 sm:text-xl">Coming Soon</p>
        </div>
      </main>
    </div>
  );
}

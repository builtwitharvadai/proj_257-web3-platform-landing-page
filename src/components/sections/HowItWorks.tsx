import React from 'react';
import { ArrowRightLeft, TrendingUp, Wallet } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: Wallet,
    title: 'Connect Your Wallet',
    description: 'Link your MetaMask, WalletConnect, or Coinbase Wallet in seconds.',
  },
  {
    number: '02',
    icon: ArrowRightLeft,
    title: 'Explore & Transact',
    description: 'Browse DeFi protocols, swap tokens, and manage your portfolio.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Grow Your Assets',
    description: 'Earn yields, stake tokens, and watch your portfolio grow.',
  },
] as const;

export default function HowItWorks(): React.ReactElement {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-y border-transparent [border-image:linear-gradient(to_right,transparent,rgba(168,85,247,0.2),transparent)_1]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            How It Works
          </h2>
          <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">
            Get started in three simple steps and unlock the full power of Web3.
          </p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 mt-16 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <React.Fragment key={step.number}>
                <ScrollReveal delay={index * 0.2}>
                  <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="text-6xl font-bold text-purple-500/20">{step.number}</div>
                    <div className="rounded-2xl bg-purple-500/10 p-4 w-16 h-16 flex items-center justify-center mt-4">
                      <Icon className="text-purple-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mt-4">{step.title}</h3>
                    <p className="text-zinc-400 text-sm mt-2">{step.description}</p>
                  </div>
                </ScrollReveal>
                {!isLast && (
                  <>
                    <div
                      aria-hidden="true"
                      className="hidden md:block h-[2px] w-16 bg-gradient-to-r from-purple-500/50 to-blue-500/50 self-center mt-12"
                    />
                    <div
                      aria-hidden="true"
                      className="md:hidden h-8 w-[2px] bg-gradient-to-b from-purple-500/30 to-transparent"
                    />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

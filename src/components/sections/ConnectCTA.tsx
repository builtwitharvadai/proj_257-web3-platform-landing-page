import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { Wallet, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

function truncateAddress(address: string): string {
  if (address.length <= 10) {
    return address;
  }
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function ConnectCTA(): React.ReactElement {
  const { address, isConnected, chain } = useAccount();

  return (
    <section id="connect" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-purple-600/30 blur-3xl"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl">
              <div className="bg-[#0f0f0f] rounded-3xl p-8 md:p-12 text-center">
                {isConnected && address ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle
                      className="h-14 w-14 text-green-400"
                      aria-hidden="true"
                    />
                    <h2 className="mt-6 text-2xl font-bold text-white">
                      Wallet Connected
                    </h2>
                    <p className="mt-4 text-purple-400 font-mono text-lg">
                      {truncateAddress(address)}
                    </p>
                    {chain?.name ? (
                      <p className="mt-2 text-zinc-400">{chain.name}</p>
                    ) : null}
                    <div className="mt-8 flex justify-center">
                      <ConnectButton />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Wallet
                      className="h-14 w-14 text-purple-400"
                      aria-hidden="true"
                    />
                    <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
                      Ready to Enter the Future of DeFi?
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl">
                      Connect your wallet to start exploring decentralized
                      finance with institutional-grade security and zero
                      compromises on user experience.
                    </p>
                    <div className="mt-8 flex justify-center">
                      <ConnectButton />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

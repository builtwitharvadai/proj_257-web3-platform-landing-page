import React from 'react';
import { motion } from 'framer-motion';
import { WordReveal } from '@/components/ui/WordReveal';
import { MorphingButton } from '@/components/ui/MorphingButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const HEADLINE_TEXT = 'Build the Future of Decentralized Finance';
const HIGHLIGHT_WORDS = ['Decentralized', 'Finance'];

const scrollToId = (id: string): void => {
  if (typeof document === 'undefined') {
    return;
  }
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Hero(): React.ReactElement {
  const prefersReducedMotion = useReducedMotion();

  const handlePrimaryClick = async (): Promise<void> => {
    scrollToId('connect');
  };

  const handleSecondaryClick = (): void => {
    scrollToId('features');
  };

  const orbAnimation = prefersReducedMotion
    ? undefined
    : {
        scale: [1, 1.15, 1],
        opacity: [0.8, 1, 0.8],
      };

  const subheadlineInitial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 12 };
  const ctaInitial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 12 };
  const badgeInitial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: -8 };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 h-[36rem] w-[36rem] rounded-full bg-purple-600/20 blur-[120px]"
          animate={orbAnimation}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-[32rem] w-[32rem] rounded-full bg-blue-600/15 blur-[120px]"
          animate={orbAnimation}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 translate-x-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-600/10 blur-[120px]"
          animate={orbAnimation}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.span
          initial={badgeInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400"
        >
          Powered by Blockchain
        </motion.span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <WordReveal text={HEADLINE_TEXT} highlightWords={HIGHLIGHT_WORDS} />
        </h1>

        <motion.p
          initial={subheadlineInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 1.5 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mt-6"
        >
          Secure, transparent, and community-driven. Connect your wallet and
          join the next generation of DeFi.
        </motion.p>

        <motion.div
          initial={ctaInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <MorphingButton
            variant="primary"
            onClick={handlePrimaryClick}
            ariaLabel="Get Started — connect your wallet"
          >
            Get Started
          </MorphingButton>
          <button
            type="button"
            onClick={handleSecondaryClick}
            className="inline-flex items-center justify-center min-h-[44px] min-w-[120px] rounded-lg border border-zinc-700 bg-transparent px-6 py-2.5 text-sm font-semibold text-zinc-200 transition-colors duration-200 hover:bg-zinc-800/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

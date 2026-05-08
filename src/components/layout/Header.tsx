import React, { useState, useEffect, useCallback } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
] as const;

export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    const original = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? 'hidden' : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback((): void => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback((): void => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const scrollToSection = useCallback(
    (href: string) =>
      (event: React.MouseEvent<HTMLAnchorElement>): void => {
        if (!href.startsWith('#')) {
          return;
        }
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        closeMenu();
      },
    [closeMenu],
  );

  const scrollToTop = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>): void => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMenu();
    },
    [closeMenu],
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          onClick={scrollToTop}
          className="flex items-center gap-1 font-bold text-xl tracking-tight"
          aria-label="Web3 Platform — back to top"
        >
          <span className="text-accent">Web3</span>
          <span className="text-white">Platform</span>
        </a>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={scrollToSection(item.href)}
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <ConnectButton
            showBalance={{ smallScreen: false, largeScreen: true }}
            chainStatus={{ smallScreen: 'icon', largeScreen: 'full' }}
            accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
          />
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-drawer"
          className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-zinc-300 hover:text-white transition-colors rounded-md"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation-drawer"
            key="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="md:hidden fixed left-0 right-0 top-16 bottom-0 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center gap-6 pt-8 px-6 overflow-y-auto"
            onClick={closeMenu}
          >
            <nav
              className="flex flex-col items-center gap-6 w-full"
              aria-label="Mobile primary"
              onClick={(event) => event.stopPropagation()}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={scrollToSection(item.href)}
                  className="text-lg text-zinc-300 hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div
              className="mt-auto mb-10 pt-8 w-full flex justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <ConnectButton
                showBalance={false}
                chainStatus="icon"
                accountStatus="full"
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

import React from 'react';
import { Twitter, MessageCircle, Send, Github } from 'lucide-react';

type FooterLink = {
  label: string;
  href: string;
};

type LinkColumn = {
  title: string;
  links: readonly FooterLink[];
};

type SocialLink = {
  label: string;
  href: string;
  Icon: typeof Twitter;
};

const productLinks: readonly FooterLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Security', href: '#' },
  { label: 'Roadmap', href: '#' },
];

const resourceLinks: readonly FooterLink[] = [
  { label: 'Documentation', href: '#' },
  { label: 'API Reference', href: '#' },
  { label: 'Whitepaper', href: '#' },
  { label: 'Blog', href: '#' },
];

const communityLinks: readonly FooterLink[] = [
  { label: 'Discord', href: '#' },
  { label: 'Twitter/X', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'Forum', href: '#' },
];

const legalLinks: readonly FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

const LINK_COLUMNS: readonly LinkColumn[] = [
  { title: 'Product', links: productLinks },
  { title: 'Resources', links: resourceLinks },
  { title: 'Community', links: communityLinks },
  { title: 'Legal', links: legalLinks },
];

const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'Twitter/X', href: '#', Icon: Twitter },
  { label: 'Discord', href: '#', Icon: MessageCircle },
  { label: 'Telegram', href: '#', Icon: Send },
  { label: 'GitHub', href: '#', Icon: Github },
];

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-12 pt-8 border-t border-zinc-800/50 justify-center">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 inline-flex items-center justify-center"
            >
              <Icon
                className="h-5 w-5 text-zinc-400 hover:text-white transition-colors"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-zinc-800/50 gap-4">
          <p className="text-sm text-zinc-500">
            © {currentYear} Web3 Platform. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600 max-w-md text-center md:text-right">
            Cryptocurrency investments carry risk. This platform does not provide financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';
import { LazyImage } from '../ui/LazyImage';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: readonly Testimonial[] = [
  {
    quote:
      'This platform revolutionized how I interact with DeFi. The security and transparency are unmatched.',
    author: 'Sarah Chen',
    role: 'DeFi Researcher',
    company: 'Blockchain Labs',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'Finally, a Web3 platform that makes decentralized finance accessible to everyone. Incredible UX.',
    author: 'Marcus Rivera',
    role: 'Crypto Analyst',
    company: 'Digital Assets Co',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'The smart contract integration is seamless. I trust this platform with my portfolio management.',
    author: 'Emily Zhang',
    role: 'Portfolio Manager',
    company: 'Web3 Ventures',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            What Our Community Says
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.author} delay={index * 0.15}>
              <GlowCard>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-zinc-300 mt-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-6">
                  <LazyImage
                    src={t.avatar}
                    alt={t.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{t.author}</div>
                    <div className="text-sm text-zinc-500">
                      {t.role} at {t.company}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Eye, Globe, Shield, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';

const features = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description:
      'Multi-layer security protocols protect your assets with audited smart contracts and hardware-grade encryption.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description:
      'Every transaction verified on-chain with public, immutable records you can audit at any time.',
  },
  {
    icon: Globe,
    title: 'Truly Decentralized',
    description:
      'No single point of failure. A globally distributed network keeps the platform online and censorship-resistant.',
  },
  {
    icon: Zap,
    title: 'Smart Contracts',
    description:
      'Automated, trustless execution removes intermediaries and settles agreements in seconds.',
  },
] as const;

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Why Choose Us
          </h2>
          <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">
            Built on the principles that make Web3 powerful: secure, transparent, decentralized,
            and automated by design.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={index * 0.15}>
                <GlowCard>
                  <Icon className="h-10 w-10 text-purple-400 mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm mt-2">{feature.description}</p>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

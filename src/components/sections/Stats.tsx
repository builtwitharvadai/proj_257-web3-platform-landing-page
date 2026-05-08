import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: readonly Stat[] = [
  { value: 50, suffix: 'K+', label: 'Active Users' },
  { value: 1, suffix: 'M+', label: 'Transactions' },
  { prefix: '$', value: 500, suffix: 'M+', label: 'Total Value Locked' },
  { value: 99.9, suffix: '%', label: 'Uptime', decimals: 1 },
];

export default function Stats() {
  return (
    <section className="py-24 md:py-32 border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix ?? ''}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  className="text-4xl md:text-5xl font-bold text-white"
                />
                <p className="text-zinc-400 mt-2 text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface Partner {
  name: string;
}

const partners: readonly Partner[] = [
  { name: 'Ethereum' },
  { name: 'Polygon' },
  { name: 'Chainlink' },
  { name: 'Uniswap' },
  { name: 'Aave' },
  { name: 'OpenSea' },
];

export default function LogoCloud() {
  return (
    <section className="py-16 border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-zinc-500 uppercase tracking-wider">
            Trusted by leading protocols
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 mt-8">
            {partners.map((partner) => (
              <div key={partner.name}>
                <span className="text-xl font-bold text-zinc-600 hover:text-zinc-300 transition-colors duration-300 grayscale hover:grayscale-0">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

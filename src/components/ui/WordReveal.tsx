import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface WordRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

const HIGHLIGHT_CLASS =
  'bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4 },
  },
};

const stripPunctuation = (word: string): string =>
  word.replace(/[^\p{L}\p{N}]/gu, '');

export function WordReveal({
  text,
  className,
  highlightWords,
}: WordRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const highlightSet = new Set(
    (highlightWords ?? []).map((w) => w.toLowerCase()),
  );

  const isHighlighted = (word: string): boolean => {
    if (highlightSet.size === 0) {
      return false;
    }
    return highlightSet.has(stripPunctuation(word).toLowerCase());
  };

  if (prefersReducedMotion) {
    return (
      <span className={className}>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">
          {words.map((word, index) => {
            const highlighted = isHighlighted(word);
            const isLast = index === words.length - 1;
            return (
              <span
                key={`${word}-${index}`}
                className={highlighted ? HIGHLIGHT_CLASS : undefined}
              >
                {word}
                {isLast ? '' : ' '}
              </span>
            );
          })}
        </span>
      </span>
    );
  }

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block' }}
      >
        {words.map((word, index) => {
          const highlighted = isHighlighted(word);
          const isLast = index === words.length - 1;
          return (
            <motion.span
              key={`${word}-${index}`}
              variants={wordVariants}
              style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
              className={highlighted ? HIGHLIGHT_CLASS : undefined}
            >
              {word}
              {isLast ? '' : ' '}
            </motion.span>
          );
        })}
      </motion.span>
    </span>
  );
}

export type { WordRevealProps };

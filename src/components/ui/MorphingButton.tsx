import { useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Loader2, X } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type ButtonState = 'idle' | 'loading' | 'success' | 'error';
type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface MorphingButtonProps {
  children: ReactNode;
  onClick?: () => Promise<void>;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

const RESET_DELAY_MS = 2000;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-purple-600 to-blue-600 text-white border border-transparent',
  secondary: 'bg-zinc-800 text-white border border-zinc-700',
  outline: 'bg-transparent border-2 border-purple-500 text-purple-400',
};

const STATE_BACKGROUND: Partial<Record<ButtonState, string>> = {
  success: 'bg-emerald-600 text-white border-transparent',
  error: 'bg-red-600 text-white border-transparent',
};

const TRANSITION = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };

export function MorphingButton({
  children,
  onClick,
  variant = 'primary',
  className,
  disabled = false,
  type = 'button',
  ariaLabel,
}: MorphingButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const [buttonState, setButtonState] = useState<ButtonState>('idle');
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleReset = (): void => {
    if (resetTimerRef.current !== null) {
      clearTimeout(resetTimerRef.current);
    }
    resetTimerRef.current = setTimeout(() => {
      setButtonState('idle');
      resetTimerRef.current = null;
    }, RESET_DELAY_MS);
  };

  const handleClick = async (): Promise<void> => {
    if (buttonState !== 'idle' || disabled) {
      return;
    }
    if (!onClick) {
      return;
    }

    setButtonState('loading');
    try {
      await onClick();
      setButtonState('success');
      scheduleReset();
    } catch (error) {
      console.error('MorphingButton onClick handler failed:', error);
      setButtonState('error');
      scheduleReset();
    }
  };

  const isInteractionDisabled = disabled || buttonState === 'loading';
  const stateOverride = STATE_BACKGROUND[buttonState] ?? '';
  const variantClasses = stateOverride !== '' ? stateOverride : VARIANT_STYLES[variant];

  const hoverAnimation = prefersReducedMotion
    ? undefined
    : { scale: 1.02, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.25)' };
  const tapAnimation = prefersReducedMotion ? undefined : { scale: 0.98 };

  const renderStateContent = (): ReactNode => {
    switch (buttonState) {
      case 'loading':
        return (
          <motion.span
            key="loading"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={TRANSITION}
            className="flex items-center justify-center gap-2"
          >
            <Loader2
              className={prefersReducedMotion ? 'h-4 w-4' : 'h-4 w-4 animate-spin'}
              aria-hidden="true"
            />
            <span>Loading...</span>
          </motion.span>
        );
      case 'success':
        return (
          <motion.span
            key="success"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={TRANSITION}
            className="flex items-center justify-center gap-2"
          >
            <Check className="h-4 w-4" aria-hidden="true" />
            <span>Done!</span>
          </motion.span>
        );
      case 'error':
        return (
          <motion.span
            key="error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={TRANSITION}
            className="flex items-center justify-center gap-2"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            <span>Try again</span>
          </motion.span>
        );
      case 'idle':
      default:
        return (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={TRANSITION}
            className="flex items-center justify-center gap-2"
          >
            {children}
          </motion.span>
        );
    }
  };

  const baseClasses =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:cursor-not-allowed disabled:opacity-60';
  const sizingClasses = 'min-h-[44px] min-w-[120px]';
  const composed = [
    baseClasses,
    sizingClasses,
    variantClasses,
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const shakeAnimation =
    buttonState === 'error' && !prefersReducedMotion
      ? { x: [0, -6, 6, -4, 4, -2, 2, 0] }
      : undefined;

  return (
    <motion.button
      type={type}
      onClick={() => {
        void handleClick();
      }}
      disabled={isInteractionDisabled}
      aria-label={ariaLabel}
      aria-busy={buttonState === 'loading'}
      aria-disabled={isInteractionDisabled}
      whileHover={isInteractionDisabled ? undefined : hoverAnimation}
      whileTap={isInteractionDisabled ? undefined : tapAnimation}
      animate={shakeAnimation}
      transition={{ duration: 0.4 }}
      className={composed}
    >
      {variant === 'primary' && !prefersReducedMotion && buttonState === 'idle' ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      ) : null}
      <AnimatePresence mode="wait" initial={false}>
        {renderStateContent()}
      </AnimatePresence>
    </motion.button>
  );
}

export type { ButtonState, ButtonVariant, MorphingButtonProps };

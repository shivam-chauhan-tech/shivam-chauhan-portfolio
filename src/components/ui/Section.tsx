import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { ANIMATION_VARIANTS } from '@/config/constants';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
}

/**
 * Reusable Section component with consistent spacing and animations
 * Used as a wrapper for main page sections
 */
export function Section({ className, title, subtitle, children, ...props }: SectionProps) {
  return (
    <section className={cn('section-padding', className)} {...props}>
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={ANIMATION_VARIANTS.fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}


import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

/**
 * Reusable Card component
 * Used for project cards, skill cards, etc.
 */
export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-dark-card border border-dark-border rounded-xl p-6 transition-all duration-300',
        hover && 'hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}


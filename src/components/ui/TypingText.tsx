import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  highlightWord?: string;
  highlightClassName?: string;
}

/**
 * Typing animation component
 * Displays text with typewriter effect and optional word highlighting
 */
export function TypingText({
  text,
  speed = 50,
  delay = 0,
  className = '',
  highlightWord,
  highlightClassName = 'text-primary',
}: TypingTextProps) {
  const displayedText = useTypingEffect({ text, speed, delay });

  // If no highlight word, just show the text
  if (!highlightWord) {
    return (
      <span className={className}>
        {displayedText}
        {displayedText.length < text.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
          />
        )}
      </span>
    );
  }

  // Split text to highlight specific word
  const parts = displayedText.split(new RegExp(`(${highlightWord})`, 'gi'));

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const isHighlight = part.toLowerCase() === highlightWord.toLowerCase();
        return (
          <span key={index} className={isHighlight ? highlightClassName : ''}>
            {part}
          </span>
        );
      })}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
        />
      )}
    </span>
  );
}


import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
   text: string;
   speed?: number;
   delay?: number;
}

/**
 * Custom hook for typing animation effect
 * @param text - The text to animate
 * @param speed - Typing speed in milliseconds (default: 50)
 * @param delay - Initial delay before starting (default: 0)
 * @returns Current displayed text
 */
export function useTypingEffect({ text, speed = 50, delay = 0 }: UseTypingEffectOptions): string {
   const [displayedText, setDisplayedText] = useState('');
   const [currentIndex, setCurrentIndex] = useState(0);
   const [hasStarted, setHasStarted] = useState(false);

   useEffect(() => {
      // Initial delay before starting
      const delayTimeout = setTimeout(() => {
         setHasStarted(true);
      }, delay);

      return () => clearTimeout(delayTimeout);
   }, [delay]);

   useEffect(() => {
      if (!hasStarted) return;

      if (currentIndex < text.length) {
         const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
         }, speed);

         return () => clearTimeout(timeout);
      }
   }, [currentIndex, text, speed, hasStarted]);

   return displayedText;
}


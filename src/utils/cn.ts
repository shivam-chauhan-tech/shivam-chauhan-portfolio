/**
 * Utility function to merge class names conditionally
 * Similar to clsx/classnames but lightweight
 * @param classes - Array of class names or conditional objects
 * @returns Merged class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}


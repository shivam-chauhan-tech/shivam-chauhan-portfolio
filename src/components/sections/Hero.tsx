import { motion } from 'framer-motion';
import { TypingText } from '@/components/ui/TypingText';
import { ANIMATION_VARIANTS, SECTION_IDS } from '@/config/constants';
import profileData from '@/data/profile.json';
import statsData from '@/data/stats.json';
import type { Profile } from '@/types';

const profile = profileData as Profile;
const stats = statsData as { value: string; label: string }[];

/**
 * Hero section with typing animation and stats
 */
export default function Hero() {
  return (
    <section id={SECTION_IDS.HOME} className="mb-16 min-h-[450px] max-w-[700px] scroll-mt-[50px]">
      {/* Main Headline with Typing Animation */}
      <div className="mb-12">
        {/* Reserve space for headline to prevent layout shift */}
        <h1 
          className="text-[48px] md:text-[68px] font-[550] leading-[1.1em] mb-6 tracking-tight min-h-[110px] md:min-h-[150px]" 
          style={{ textShadow: '0.03em 0 0 currentColor' }}
        >
          <TypingText
            text="Engineering Your Ideas into Reality"
            speed={80}
            delay={300}
            highlightWord="Reality"
            highlightClassName="text-primary"
          />
        </h1>
        
        {/* Description illuminates after typing completes - Reserve space */}
        <div className="min-h-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ 
              duration: 1.2, 
              delay: 3.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="space-y-3"
          >
            <p className="text-lg text-dark-text leading-relaxed max-w-2xl">
              {profile.description1}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats - Inline layout matching shahrukh-anwar exactly - Reserve space */}
      <div className="flex flex-col md:flex-row gap-0 mt-5 min-h-[180px] md:min-h-[120px]">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 4.5 + index * 0.15,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="flex-1 text-left md:text-left text-center"
          >
            <p className="text-[50px] md:text-[70px] font-[550] text-dark-text leading-[1.2]">
              {stat.value}
            </p>
            <span className="text-[16px] text-dark-muted leading-[1.2] whitespace-pre-line block">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA Buttons - Below stats - Reserve space */}
      <div className="mt-5 min-h-[48px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 5.5 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-600 text-white py-2 px-[50px] rounded-lg font-medium text-[16px] transition-all duration-500"
          >
            Let's Talk
          </a>
          <a
            href="#projects"
            className="text-dark-text hover:text-primary text-[16px] font-normal transition-colors duration-300 flex items-center gap-2 group"
          >
            My Work
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-0.5 scale-x-[1.3]">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


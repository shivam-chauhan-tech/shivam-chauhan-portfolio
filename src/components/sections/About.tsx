import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, SECTION_IDS } from '@/config/constants';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful, intuitive user interfaces',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and efficiency',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in cross-functional teams',
  },
];

const coreExpertise = [
  'Financial Logic Engines',
  'Complex Distribution Models',
  'Full Stack Architecture',
  'Scalable API Design',
];

/**
 * About section matching shahrukh-anwar design
 */
export default function About() {
  return (
    <section id={SECTION_IDS.ABOUT} className="section-padding scroll-mt-[50px]">
      {/* Section Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={ANIMATION_VARIANTS.fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-title">About</h2>
      </motion.div>

      {/* Core Expertise */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={ANIMATION_VARIANTS.fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-lg font-semibold mb-4 text-dark-text">Core Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {coreExpertise.map((expertise, index) => (
            <motion.span
              key={expertise}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
            >
              {expertise}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.slideUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dark-text">{item.title}</h3>
                  <p className="text-base text-dark-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


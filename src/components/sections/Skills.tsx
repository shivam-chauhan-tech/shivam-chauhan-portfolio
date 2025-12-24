import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, SECTION_IDS } from '@/config/constants';
import skillsData from '@/data/skills.json';
import type { SkillsData } from '@/types';

const skills = skillsData as SkillsData;

/**
 * Skills section matching shahrukh-anwar design
 */
export default function Skills() {
  return (
    <section id={SECTION_IDS.SKILLS} className="section-padding scroll-mt-[50px]">
      {/* Section Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={ANIMATION_VARIANTS.fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-title">Skills & Tools</h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.slideUp}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <div className="card">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-dark-text font-medium text-base">{skill.name}</span>
                      <span className="text-dark-muted text-sm">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 bg-dark-bg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


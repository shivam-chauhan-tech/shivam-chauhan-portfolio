import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { ANIMATION_VARIANTS, SECTION_IDS } from '@/config/constants';
import { formatDate, calculateDuration } from '@/utils/formatDate';
import experienceData from '@/data/experience.json';
import type { Experience } from '@/types';

const experiences = experienceData as Experience[];

/**
 * Experience section component
 * Displays work history in timeline format
 */
export default function ExperienceSection() {
  return (
    <section id={SECTION_IDS.EXPERIENCE} className="section-padding scroll-mt-[50px]">
      {/* Section Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={ANIMATION_VARIANTS.fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-title">Experience</h2>
      </motion.div>

      {/* Experience Items */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.slideUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card hover:scale-[1.01] transition-transform duration-500">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1 text-dark-text">{exp.position}</h3>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Briefcase size={16} />
                  <span className="font-medium">{exp.company}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-dark-muted">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>
                      {formatDate(exp.startDate)} -{' '}
                      {exp.current ? 'Present' : formatDate(exp.endDate!)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>({calculateDuration(exp.startDate, exp.endDate)})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-dark-muted mb-4 text-base leading-relaxed">{exp.description}</p>

              {/* Achievements */}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="space-y-2 mb-4 text-sm text-dark-muted">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-sm bg-primary/10 text-primary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


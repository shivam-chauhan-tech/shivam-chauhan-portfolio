import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ANIMATION_VARIANTS, SECTION_IDS } from '@/config/constants';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';

const projects = projectsData as Project[];

/**
 * Projects section matching shahrukh-anwar design
 */
export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id={SECTION_IDS.PROJECTS} className="section-padding scroll-mt-[50px]">
      {/* Section Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={ANIMATION_VARIANTS.fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-title">Projects</h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.slideUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card h-full flex flex-col hover:scale-[1.02] transition-transform duration-500">
              {/* Project Image */}
              <div className="relative h-48 mb-4 bg-dark-bg rounded-xl overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-dark-muted">
                    <span className="text-5xl font-bold opacity-10">{project.title[0]}</span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-dark-text">{project.title}</h3>
                <p className="text-base text-dark-muted mb-3 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-sm bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-bg hover:bg-dark-border text-dark-text rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-bg hover:bg-dark-border text-dark-text rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {projects.length > displayedProjects.length && (
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeIn}
          className="text-center"
        >
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-500"
          >
            Show All Projects
          </button>
        </motion.div>
      )}
    </section>
  );
}


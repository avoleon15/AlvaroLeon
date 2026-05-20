import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import ProjectCarousel from './ProjectCarousel';
import './Projects.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Projects() {
  const { content: { projects, ui } } = useLang();

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <h2 className="section-heading">{ui.projects.heading}</h2>
          <p className="section-sub">{ui.projects.sub}</p>
        </div>
      </motion.div>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCarousel key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

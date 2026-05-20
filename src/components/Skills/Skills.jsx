import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaPython, FaDatabase, FaLanguage,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiSupabase } from 'react-icons/si';
import { useLang } from '../../context/LanguageContext';
import './Skills.css';

const iconMap = {
  React: <FaReact />,
  JavaScript: <SiJavascript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  'Tailwind CSS': <SiTailwindcss />,
  'Node.js': <FaNodeJs />,
  'Express.js': <SiExpress />,
  'Python Flask': <FaPython />,
  Supabase: <SiSupabase />,
  MongoDB: <SiMongodb />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
};

const categoryIcons = {
  Frontend: <FaReact />,
  Backend: <FaNodeJs />,
  Database: <FaDatabase />,
  'Base de datos': <FaDatabase />,
  Tools: <FaGitAlt />,
  Herramientas: <FaGitAlt />,
  Languages: <FaLanguage />,
  Idiomas: <FaLanguage />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Skills() {
  const { content: { skills, ui } } = useLang();

  return (
    <section id="skills" className="skills">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="skills-heading">{ui.skills.heading}</h2>
        <p className="skills-sub">{ui.skills.sub}</p>
      </motion.div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            className="skill-category"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="skill-category-label">
              <span className="skill-category-icon">{categoryIcons[category]}</span>
              {category}
            </div>
            <div className="skill-badges">
              {items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {iconMap[skill] && <span className="skill-icon">{iconMap[skill]}</span>}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

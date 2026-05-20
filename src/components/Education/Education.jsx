import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './Education.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Education() {
  const { content: { education, ui } } = useLang();

  return (
    <section id="education" className="education">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-heading-edu">{ui.education.heading}</h2>
        <p className="section-sub-edu">{ui.education.sub}</p>
      </motion.div>

      <div className="timeline">
        {education.map((entry, i) => (
          <motion.div
            key={entry.institution}
            className="timeline-entry"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="entry-logo">
              {entry.logo && <img src={entry.logo} alt={entry.institution} className={entry.logoContain ? 'logo-contain' : ''} />}
            </div>
            <div className="timeline-content">
              <h3 className="edu-institution">{entry.institution}</h3>
              <p className="edu-degree">{entry.degree}</p>
              <p className="edu-meta">{entry.status} · {entry.location} · {entry.years}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

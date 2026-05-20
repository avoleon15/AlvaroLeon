import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { useLang } from '../../context/LanguageContext';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Contact() {
  const { content: { contact, ui } } = useLang();

  return (
    <section id="contact" className="contact">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="contact-cta">{ui.contact.cta}</h2>

        <div className="contact-links">
          <a href={`mailto:${contact.email}`} className="contact-link">
            <MdEmail size={20} />
            {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            <FiGithub size={20} />
            github.com/avoleon15
          </a>
        </div>
      </motion.div>
    </section>
  );
}

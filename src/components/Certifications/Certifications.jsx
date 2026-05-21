import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { assetUrl } from '../../utils/assetUrl';
import './Certifications.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Certifications() {
  const { content: { certifications, ui } } = useLang();

  return (
    <section id="certifications" className="certifications">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-heading-cert">{ui.certifications.heading}</h2>
        <p className="section-sub-cert">{ui.certifications.sub}</p>
      </motion.div>

      <div className="cert-timeline">
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            className="cert-entry"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="entry-logo">
              {cert.logo && <img src={assetUrl(cert.logo)} alt={cert.issuer} />}
            </div>
            <div className="timeline-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="edu-meta">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

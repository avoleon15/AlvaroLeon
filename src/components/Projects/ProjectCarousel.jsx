import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLang } from '../../context/LanguageContext';
import { assetUrl } from '../../utils/assetUrl';
import './ProjectCarousel.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function ProjectCarousel({ project }) {
  const { content: { ui } } = useLang();
  const [index, setIndex] = useState(0);
  const images = project.images ?? [project.image];

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <motion.div
      className="pcar-wrapper"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* Image area */}
      <div className="pcar-image-area">
        <button
          className="pcar-arrow"
          onClick={prev}
          disabled={images.length <= 1}
          aria-label="Previous image"
        >
          <FiChevronLeft />
        </button>

        <div className="pcar-slide-clip">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="pcar-slide"
              style={
                images[index].startsWith('/')
                  ? { backgroundImage: `url(${assetUrl(images[index])})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                  : { background: images[index] }
              }
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            />
          </AnimatePresence>
        </div>

        <button
          className="pcar-arrow"
          onClick={next}
          disabled={images.length <= 1}
          aria-label="Next image"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="pcar-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`pcar-dot${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Description */}
      <div className="pcar-desc">
        <div className="pcar-desc-header">
          <h3 className="pcar-name">{project.name}</h3>
        </div>
        <p className="pcar-description">{project.description}</p>
        <div className="pcar-tags">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="pcar-btns">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="pcar-btn pcar-btn-outline">
              <FiGithub />
              {ui.project.github}
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="pcar-btn pcar-btn-solid">
              <FiExternalLink />
              {ui.project.live}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

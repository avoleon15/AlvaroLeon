import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
};

export default function Hero() {
  const { content: { hero, ui } } = useLang();

  const handleProjectsClick = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-photo-col"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <img src={hero.photo} alt="Alvaro Leon" className="hero-photo" />
      </motion.div>

      <div className="hero-text-col">
        <motion.h1
          className="hero-name"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {hero.name}
        </motion.h1>

        <motion.p
          className="hero-title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {hero.title}
        </motion.p>

        <motion.p
          className="hero-bio"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {hero.bio}
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a href="#projects" className="hero-btn-primary" onClick={handleProjectsClick}>
            {ui.hero.cta}
          </a>
          <a href="/alvaro-leon-cv.pdf" className="hero-btn-secondary" download>
            {ui.hero.download}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

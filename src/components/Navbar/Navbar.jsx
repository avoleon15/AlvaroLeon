import { useLang } from '../../context/LanguageContext';
import './Navbar.css';

const HREFS = ['#projects', '#skills', '#education', '#contact'];

export default function Navbar() {
  const { lang, setLang, content } = useLang();

  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <span className="navbar-logo">AL</span>
      <div className="navbar-links">
        {content.nav.map((label, i) => (
          <a key={HREFS[i]} href={HREFS[i]} onClick={(e) => handleScroll(e, HREFS[i])}>
            {label}
          </a>
        ))}
      </div>
      <button
        className="lang-toggle"
        onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
        aria-label="Toggle language"
      >
        {lang === 'en' ? 'ES' : 'EN'}
      </button>
    </nav>
  );
}

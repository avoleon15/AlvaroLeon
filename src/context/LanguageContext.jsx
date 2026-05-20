import { createContext, useContext, useState } from 'react';
import * as en from '../data/cv-content.en.js';
import * as es from '../data/cv-content.es.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const content = lang === 'en' ? en : es;
  return (
    <LanguageContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

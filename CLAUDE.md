# Alvaro Leon — CV Website

## Context
- I am making my CV, it has to look professional and creative.

## Stack
- React (Vite)
- framer-motion for animations
- react-icons for icons

## Fonts
- Headings: Manrope 700 — var(--font-heading)
- Body: Inter 400/500 — var(--font-body)

## Color Palette
- --color-main:      #355872
- --color-secondary: #7AAACE
- --color-third:     #9CD5FF
- --color-accent:    #F7F8F0
- --color-dark:      #1A2E3D
- --color-mid:       #2C4A5E
- --color-muted:     #6A8FA8

## Structure
- One folder per component inside src/components/
- Each component has its own .jsx and .css file
- Content lives in src/data/cv-content.en.js and cv-content.es.js
- Never modify the data files, only read from them

## Rules
- No sticky navbar
- No hardcoded colors — always use CSS variables
- Sections render in this order: Navbar, Hero, Projects, Skills, Education, Contact
- Make components responsive for mobile (430px), ipad (768px), computer (1024px) and desktop (1024px +)
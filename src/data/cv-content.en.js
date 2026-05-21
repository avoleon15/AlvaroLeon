export const nav = ['Projects', 'Skills', 'Education', 'Contact'];

export const ui = {
  hero: { cta: 'See my projects', download: 'Download CV' },
  projects: { heading: 'Projects', sub: "Things I've built" },
  skills: { heading: 'Skills', sub: 'Tools & technologies I work with' },
  education: { heading: 'Education', sub: 'My academic background' },
  certifications: { heading: 'Certifications', sub: 'Awards & recognitions' },
  contact: { cta: "Let's build something together." },
  project: { live: 'See live project', github: 'GitHub' },
};

export const hero = {
  name: 'Alvaro Leon',
  title: 'Junior Software Developer',
  bio: "Hi! I'm Alvaro, a Computer Science student and aspiring developer who loves building things for the web. From multiplayer games to real-world business tools, I enjoy turning ideas into products that are actually fun to use. Always learning, always building.",
  tags: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'CSS', 'Python', 'Figma'],
  photo: '/assets/CValvaro.jpg',
};

export const projects = [
  {
    name: 'Pixel Paint Battle',
    featured: true,
    image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)',
    images: [
      '/assets/Asdrubal-screen1.jpg',
      '/assets/Asdrubal-screen2.jpg',
      '/assets/Asdrubal-screen3.jpg',
      '/assets/Asdrubal-screen4.jpg',
      '/assets/Asdrubal-screen5.jpg',
    ],
    description: 'Multiplayer painting game where players compete by creating pixel art and voting on each other\'s work.',
    tech: ['React', 'CSS', 'Express.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/avoleon15/ILA',
    demo: 'https://asdrubal-dun.vercel.app/',
  },
  {
    name: 'Car Sales Platform',
    featured: true,
    image: 'linear-gradient(135deg, #355872 0%, #2C4A5E 50%, #1A2E3D 100%)',
    images: [
      '/assets/Luxe-screen1.jpg',
      '/assets/Luxe-screen2.jpg',
      '/assets/Luxe-screen3.jpg',
      '/assets/Luxe-screen4.jpg',
      '/assets/Luxe-screen5.jpg',
      '/assets/Luxe-screen6.jpg',
      '/assets/Luxe-screen7.jpg',
    ],
    description: 'Full-stack website for a car sales company with a public catalog and complete admin panel.',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/avoleon15/luxe-motors-gallery',
    demo: 'https://luxe-motors-gallery.lovable.app',
  },
  {
    name: 'Quetzalink — Economic Education App',
    featured: false,
    image: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
    images: [
      '/assets/Quetzalink-screen1.jpg',
      '/assets/Quetzalink-screen2.jpg',
      '/assets/Quetzalink-screen3.jpg',
      '/assets/Quetzalink-screen4.jpg',
      '/assets/Quetzalink-screen5.jpg',
      '/assets/Quetzalink-screen6.jpg',
      '/assets/Quetzalink-screen7.jpg',
      '/assets/Quetzalink-screen8.jpg',
    ],
    description: 'Gamified web app that teaches economic principles to school students in a fun, interactive way.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/avoleon15/Quetzalink',
    demo: 'https://quetza-link.lovable.app/',
  },
  {
    name: 'VYN Website',
    featured: false,
    image: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)',
    images: [
      '/assets/vyn-screen1.jpg',
      '/assets/vyn-screen2.jpg',
      '/assets/vyn-screen3.jpg',
      '/assets/vyn-screen4.jpg',
      '/assets/vyn-screen5.jpg',
      '/assets/vyn-screen6.jpg',
    ],
    description: 'Professional website built for VYN, a logistics company. The site gives clients immediate access to key service information, strengthening the company\'s image and establishing a trustworthy, reliable digital presence.',
    tech: ['React', 'CSS'],
    github: 'https://github.com/avoleon15/VyN-WebPage',
    demo: 'https://avoleon15.github.io/VyN-WebPage/',
  },
  {
    name: 'Clash Royale Stats Tracker',
    featured: false,
    image: 'linear-gradient(135deg, #4b0082 0%, #8b0000 50%, #ff4500 100%)',
    images: [
      '/assets/CR-screen1.jpg',
      '/assets/CR-screen2.jpg',
      '/assets/CR-screen3.jpg',
    ],
    description: 'Fetches live player stats from the Clash Royale API using a player ID.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python Flask'],
    github: 'https://github.com/avoleon15/ClashRoyale-API',
    demo: '',
  },
];

export const skills = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'Python Flask', 'Supabase'],
  Database: ['MongoDB', 'Supabase'],
  Tools: ['Git', 'GitHub'],
  Languages: ['Spanish', 'English'],
};

export const education = [
  {
    institution: 'Universidad Francisco Marroquin',
    degree: 'B.S. Computer Science',
    status: 'Currently in 2nd year',
    location: 'Guatemala',
    years: '2025 — Present',
    logo: '/assets/UFM-logo.png',
  },
  {
    institution: 'Udemy — Web Development Bootcamp',
    degree: 'Full-stack Web Development',
    status: 'Almost completed',
    location: 'Online',
    years: '2024 — Present',
    logo: '/assets/Udemy-logo.jpg',
    logoContain: true,
  },
];

export const certifications = [
  {
    title: 'Second Place — FEE Hackathon',
    issuer: 'Foundation for Economic Education',
    year: '2025',
    logo: '/assets/FEE-logo.png',
  },
  {
    title: 'Generation Next Certificate',
    issuer: 'Dale Carnegie',
    year: '2019',
    logo: '/assets/DaleCarnegie-logo.png',
  },
];

export const contact = {
  email: 'avoleon15@gmail.com',
  github: 'https://github.com/avoleon15',
  linkedin: '',
};

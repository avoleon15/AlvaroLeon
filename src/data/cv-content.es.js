export const nav = ['Proyectos', 'Habilidades', 'Educación', 'Contacto'];

export const ui = {
  hero: { cta: 'Ver mis proyectos', download: 'Descargar CV' },
  projects: { heading: 'Proyectos', sub: 'Cosas que he construido' },
  skills: { heading: 'Habilidades', sub: 'Herramientas y tecnologías con las que trabajo' },
  education: { heading: 'Educación', sub: 'Mi formación académica' },
  certifications: { heading: 'Certificaciones', sub: 'Premios y reconocimientos' },
  contact: { cta: 'Construyamos algo juntos.' },
  project: { live: 'Ver proyecto', github: 'GitHub' },
};

export const hero = {
  name: 'Alvaro Leon',
  title: 'Desarrollador de Software Junior — React & JavaScript',
  bio: '¡Hola! Soy Alvaro, estudiante de Ciencias de la Computación y desarrollador en formación que ama construir cosas para la web. Desde juegos multijugador hasta herramientas empresariales del mundo real, disfruto convirtiendo ideas en productos que sean divertidos de usar. Siempre aprendiendo, siempre construyendo.',
  tags: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'CSS', 'Python', 'Figma'],
  photo: '/src/assets/CValvaro.jpeg',
};

export const projects = [
  {
    name: 'Pixel Paint Battle',
    featured: true,
    image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)',
    images: [
      '/src/assets/Asdrubal-screen1.png',
      '/src/assets/Asdrubal-screen2.png',
      '/src/assets/Asdrubal-screen3.png',
      '/src/assets/Asdrubal-screen4.png',
      '/src/assets/Asdrubal-screen5.png',
    ],
    description: 'Juego de pintura multijugador donde los jugadores compiten creando pixel art y votando el trabajo de los demás.',
    tech: ['React', 'CSS', 'Express.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/avoleon15/ILA',
    demo: 'https://asdrubal-dun.vercel.app/',
  },
  {
    name: 'Plataforma de Venta de Autos',
    featured: true,
    image: 'linear-gradient(135deg, #355872 0%, #2C4A5E 50%, #1A2E3D 100%)',
    images: [
      '/src/assets/Luxe-screen1.png',
      '/src/assets/Luxe-screen2.png',
      '/src/assets/Luxe-screen3.png',
      '/src/assets/Luxe-screen4.png',
      '/src/assets/Luxe-screen5.png',
      '/src/assets/Luxe-screen6.png',
      '/src/assets/Luxe-screen7.png',
    ],
    description: 'Sitio web full-stack para una empresa de venta de autos con catálogo público y panel de administración completo.',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/avoleon15/luxe-motors-gallery',
    demo: 'https://luxe-motors-gallery.lovable.app',
  },
  {
    name: 'Quetzalink — App de Educación Económica',
    featured: false,
    image: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
    images: [
      '/src/assets/Quetzalink-screen1.png',
      '/src/assets/Quetzalink-screen2.png',
      '/src/assets/Quetzalink-screen3.png',
      '/src/assets/Quetzalink-screen4.png',
      '/src/assets/Quetzalink-screen5.png',
      '/src/assets/Quetzalink-screen6.png',
      '/src/assets/Quetzalink-screen7.png',
      '/src/assets/Quetzalink-screen8.png',
    ],
    description: 'Aplicación web gamificada que enseña principios económicos a estudiantes de manera divertida e interactiva.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/avoleon15/Quetzalink',
    demo: 'https://quetza-link.lovable.app/',
  },
  {
    name: 'VYN Website',
    featured: false,
    image: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)',
    images: [
      '/src/assets/vyn-screen1.png',
      '/src/assets/vyn-screen2.png',
      '/src/assets/vyn-screen3.png',
      '/src/assets/vyn-screen4.png',
      '/src/assets/vyn-screen5.png',
      '/src/assets/vyn-screen6.png',
    ],
    description: 'Sitio web profesional desarrollado para VYN, una empresa de logística. El sitio brinda a los clientes acceso inmediato a información clave sobre los servicios, fortaleciendo la imagen de la empresa y estableciendo una presencia digital confiable y sólida.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/avoleon15/VyN-WebPage',
    demo: 'https://avoleon15.github.io/VyN-WebPage/',
  },
  {
    name: 'Clash Royale Stats Tracker',
    featured: false,
    image: 'linear-gradient(135deg, #4b0082 0%, #8b0000 50%, #ff4500 100%)',
    images: [
      '/src/assets/CR-screen1.png',
      '/src/assets/CR-screen2.png',
      '/src/assets/CR-screen3.png',
    ],
    description: 'Obtiene estadísticas en vivo de jugadores de la API de Clash Royale usando un ID de jugador.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python Flask'],
    github: 'https://github.com/avoleon15/ClashRoyale-API',
    demo: '',
  },
];

export const skills = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'Python Flask', 'Supabase'],
  'Base de datos': ['MongoDB', 'Supabase'],
  Herramientas: ['Git', 'GitHub'],
  Idiomas: ['Español', 'Inglés'],
};

export const education = [
  {
    institution: 'Universidad Francisco Marroquín',
    degree: 'Licenciatura en Ciencias de la Computación',
    status: 'Actualmente en 2do año',
    location: 'Guatemala',
    years: '2025 — Presente',
    logo: '/src/assets/UFM-logo.png',
  },
  {
    institution: 'Udemy — Bootcamp de Desarrollo Web',
    degree: 'Desarrollo Web Full-stack',
    status: 'Casi completado',
    location: 'En línea',
    years: '2024 — Presente',
    logo: '/src/assets/Udemy-logo.jpg',
    logoContain: true,
  },
];

export const certifications = [
  {
    title: 'Segundo Lugar — Hackathon FEE',
    issuer: 'Foundation for Economic Education',
    year: '2025',
    logo: '/src/assets/FEE-logo.png',
  },
  {
    title: 'Certificado Generation Next',
    issuer: 'Dale Carnegie',
    year: '2019',
    logo: '/src/assets/DaleCarnegie-logo.png',
  },
];

export const contact = {
  email: 'avoleon15@gmail.com',
  github: 'https://github.com/avoleon15',
  linkedin: '',
};

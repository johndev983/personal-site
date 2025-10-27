export const seo = {
  metadataBase: new URL('https://www.john-gil.site'),
  title: "John Gil | Desarrollador Full Stack",
  creator: "John Gil",
  authors: [{
    name: "John Gil",
    url: "https://github.com/johndev983",
  }],
  publisher: "John Gil",
  description: "Desarrollador full stack con 3 años de experiencia en React, Next.js, Node.js y NestJS. Apasionado por crear soluciones innovadoras y mejorar la experiencia del usuario.",
  alternates: {
    canonical: 'https://www.john-gil.site',
  },
  openGraph: {
    title: 'John Gil | Desarrollador Full Stack',
    description: 'Explora mi experiencia en desarrollo web y móvil con proyectos reales.',
    url: 'https://www.john-gil.site',
    siteName: 'Portafolio',
    images: [
      {
        url: '../public/about.jpeg',
        width: 1200,
        height: 630,
        alt: 'John Gil | Desarrollador Full Stack',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Gil | Desarrollador Full Stack',
    description: 'Explora mi experiencia en desarrollo web y móvil con proyectos reales.',
    creator: '@Jhongil983',
    images: ['../public/about.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Desarrollador Full Stack', 
    'React', 
    'Next.js', 
    'Node.js', 
    'NestJS', 
    'TypeScript',
    'Web Developer', 
    'Ingeniería de Software',
    'Desarrollo Web', 
    'Portafolio',
    'Programador'
  ],
};
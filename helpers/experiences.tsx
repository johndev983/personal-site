import logoOgiImage from '../assets/logo-ogi.jpg'
import logoComuniquemonos from '../assets/logo-comuniquemonos.png'

import bashScriptIcon from '../assets/bash-script.png'
import bootstarpIcon from '../assets/bootstrap.png'
import dockerIcon from '../assets/docker.png'
import javascriptIcon from '../assets/javascript.png'
import linuxIcon from '../assets/linux.png'
import mongoDBIcon from '../assets/mongo-db.png'
import mysqlIcon from '../assets/mysql.png'
import nestjsIcon from '../assets/nestjs.png'
import nextjsIcon from '../assets/nextjs.png'
import phpIcon from '../assets/php.png'
import reactIcon from '../assets/react.png'
import typescriptIcon from '../assets/typescript.png'

export const experiences = [
  {
    company: 'Opening Gates International',
    date: 'Septiembre - Diciembre 2022',
    description: [
      'Participé en el desarrollo de un sistema web utilizando PHP como tecnología principal, complementado con funcionalidades del lado del cliente en JavaScript. Mis responsabilidades incluyeron la implementación de validaciones específicas para campos en formularios, la generación de reportes, el consumo de APIs y servicios con autenticación. Además, contribuí al desarrollo del backend, gestionando procedimientos y colaborando en el modelado de la base de datos con MySQL. Para el diseño y la interfaz de usuario, utilicé Bootstrap, AG Grid para el manejo de tablas y SweetAlert para la visualización de alertas.'
    ],
    location: 'Remoto',
    logo: logoOgiImage,
    technologies: [
      {
        icon: phpIcon,
        text: 'PHP',
      },
      {
        icon: javascriptIcon,
        text: 'Javascript',
      },
      {
        icon: bootstarpIcon,
        text: 'Bootstrap',
      },
      {
        icon: mysqlIcon,
        text: 'MySQL',
      },
      {
        icon: dockerIcon,
        text: 'Docker',
      }
    ]
  },
  {
    company: 'Comuniquemonos Corp SAS',
    date: 'Abril 2022 - 2024',
    description: [
      'Actualicé y optimicé la plataforma empresarial, implementando Bootstrap para lograr un diseño responsive. Me enfoqué en mejorar el rendimiento, corregir errores e integrar nuevas funcionalidades en diversos módulos utilizando JavaScript y PHP.',
      'Además de la optimización, proporcioné capacitación y soporte técnico a los usuarios, atendiendo y resolviendo solicitudes relacionadas con fallos, ajustes y mejoras en la plataforma.',
      'Uno de los principales retos fue la adopción de nuevas tecnologías como React, Next.js, NestJS, TypeScript, Linux, Bash Script y Docker, lo que impulsó un proceso continuo de aprendizaje. Este desafío me permitió fortalecer mis habilidades de análisis, resolución de problemas y adaptación a entornos dinámicos.'
    ],
    location: 'Presencial',
    logo: logoComuniquemonos,
    technologies: [
      {
        icon: phpIcon,
        text: 'PHP',
      },
      {
        icon: javascriptIcon,
        text: 'Javascript',
      },
      {
        icon: bootstarpIcon,
        text: 'Bootstrap',
      },
      {
        icon: reactIcon,
        text: 'React',
      },
      {
        icon: nextjsIcon,
        text: 'Next.js',
      },
      {
        icon: nestjsIcon,
        text: 'NestJS',
      },
      {
        icon: typescriptIcon,
        text: 'TypeScript',
      },
      {
        icon: mysqlIcon,
        text: 'MySQL',
      },
      {
        icon: linuxIcon,
        text: 'Linux',
      },
      {
        icon: bashScriptIcon,
        text: 'Bash Script',
      },
      {
        icon: dockerIcon,
        text: 'Docker',
      }
    ]
  },
  {
    company: 'Three Steps Inc',
    date: 'Noviembre - Diciembre 2023',
    description: [
      'Participé en el desarrollo de un sistema web crucial, utilizando Next.js y React para crear una interfaz de usuario intuitiva y de alto rendimiento. Implementé formularios y validaciones robustas con React Hook Form, optimizando la experiencia del usuario. Además, se integró y gestionó eficientemente el consumo de servicios y la autenticación, asegurando la seguridad y funcionalidad del sistema.',
      'En el backend, se desarrolláron procedimientos clave con NestJS, contribuyendo significativamente a la lógica del servidor. Para la interfaz de usuario, se aprovechó Material UI, creando un diseño atractivo y consistente.'
    ],
    location: 'Remoto',
    logo: logoOgiImage,
    technologies: [
      {
        icon: reactIcon,
        text: 'React',
      },
      {
        icon: nextjsIcon,
        text: 'Next.js',
      },
      {
        icon: nestjsIcon,
        text: 'NestJS',
      },
      {
        icon: typescriptIcon,
        text: 'TypeScript',
      },
      {
        icon: mongoDBIcon,
        text: 'MongoDB',
      },
      {
        icon: dockerIcon,
        text: 'Docker',
      }
    ]
  }
]
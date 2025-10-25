import logoOgiImage from '../assets/logo-ogi.jpg'
import logoComuniquemonos from '../assets/logo-comuniquemonos.png'

import bashScriptIcon from '../assets/bash-script.png'
import bootstarpIcon from '../assets/bootstrap.png'
import dockerIcon from '../assets/docker.png'
import gitIcon from '../assets/git.png'
import javascriptIcon from '../assets/javascript.png'
import linuxIcon from '../assets/linux.png'
import materialUiIcon from '../assets/material-ui.png'
import mysqlIcon from '../assets/mysql.png'
import nestjsIcon from '../assets/nestjs.png'
import nextjsIcon from '../assets/nextjs.png'
import phpIcon from '../assets/php.png'
import reactIcon from '../assets/react.png'
import typescriptIcon from '../assets/typescript.png'

export const experiences = [
  {
    company: 'Opening Gates International',
    date: 'Mayo - Agosto 2025',
    description: [
      'Durante un proceso de tres meses, participé en la migración y modernización integral del sitio web, transformando su arquitectura en un sistema modular y desacoplado. Este proyecto tuvo como objetivo principal mejorar el rendimiento, la escalabilidad y la capacidad de mantenimiento del sistema, además de optimizar la experiencia del usuario y la visibilidad en motores de búsqueda (SEO).',
      'En esta actualización, se redefinió la siguiente arquitectura tecnológica:',
      'El Frontend se migro a un stack moderno basado en React, Next.js, TypeScript y Material UI, priorizando el rendimiento, la mantenibilidad, componentes reutilizables, enrutamiento dinámico, renderizado híbrido (SSR/SSG) para potenciar el SEO y las buenas prácticas de desarrollo.',
      'El Backend se reescribio en NestJS, con una estructura orientada a controladores y servicios, asegurando la creación de APIs RESTful robustas, escalables y con un manejo eficiente de dependencias.',
      'Además, implementé un entorno de desarrollo colaborativo mediante Git y control de versiones en ramas. El resultado fue un sitio más rápido, modular, seguro y adaptable, alineado con las tendencias tecnológicas actuales y preparado para futuras integraciones.'
    ],
    location: 'Remoto',
    logo: logoOgiImage,
    technologies: [
      {
        icon: javascriptIcon,
        text: 'Javascript',
      },
      {
        icon: reactIcon,
        text: 'React',
      },
      {
        icon: typescriptIcon,
        text: 'TypeScript',
      },
      {
        icon: nextjsIcon,
        text: 'Next.js',
      },
      {
        icon: materialUiIcon,
        text: 'Material UI',
      },
      {
        icon: nestjsIcon,
        text: 'NestJS',
      },
      {
        icon: mysqlIcon,
        text: 'MySQL',
      },
      {
        icon: dockerIcon,
        text: 'Docker',
      },
      {
        icon: gitIcon,
        text: 'Git',
      }
    ],
    secondary: [
      {
        date: 'Septiembre - Diciembre 2022',
        description: [
          'Participé en el desarrollo de un sistema web utilizando PHP como tecnología principal, complementado con funcionalidades del lado del cliente en JavaScript. También gestioné y aseguré la integridad del código fuente utilizando Git como control de versiones.',
          'Mis responsabilidades incluyeron la implementación de validaciones específicas para campos en formularios, la generación de reportes, el consumo de APIs y servicios con autenticación. Además, contribuí al desarrollo del backend, gestionando procedimientos y colaborando en el modelado de la base de datos con MySQL. Para el diseño y la interfaz de usuario, utilicé Bootstrap, AG Grid para el manejo de tablas y SweetAlert para la visualización de alertas.'
        ],
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
          },
          {
            icon: gitIcon,
            text: 'Git',
          }
        ] 
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
  }
]
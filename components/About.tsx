import Image from 'next/image'
import aboutImage from '../assets/about.jpeg'
import reactIcon from '../assets/react.png'
import nextjsIcon from '../assets/nextjs.png'
import tailwindIcon from '../assets/tailwind-css.png'
import nestjsIcon from '../assets/nestjs.png'
import typescriptIcon from '../assets/typescript.png'
import bootstrapIcon from '../assets/bootstrap.png'
import nodejsIcon from '../assets/node-js.png'
import phpIcon from '../assets/php.png'
import mysqlIcon from '../assets/mysql.png'

const skills = [
  {
    icon: reactIcon,
    text: 'React',
  },
  {
    icon: nextjsIcon,
    text: 'Next.js',
  },
  {
    icon: tailwindIcon,
    text: 'Tailwind CSS',
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
    icon: bootstrapIcon,
    text: 'Bootstrap',
  },
  {
    icon: nodejsIcon,
    text: 'Node.js',
  },
  {
    icon: phpIcon,
    text: 'PHP',
  },
  {
    icon: mysqlIcon,
    text: 'MySQL',
  }
]

export const About = () => {
  return (
    <div className="p-4 text-white mx-auto mt-40 2xl:mt-60" id="about">
      <h2 className="text-gray-500 text-lg md:text-xl font-semibold">Acerca de mis habilidades, herramientas y conocimientos.</h2>
      <h2 className="font-bold text-3xl md:text-4xl mb-15">ABOUT</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-15">
          <Image
            className="w-80 h-80 rounded-full mr-4"
            src={ aboutImage }
            alt="Picture of the author"
          />
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">John Gil</h2>
          <p className="text-sm md:text-md text-gray-400 mb-8">Software Developer</p>
          
          <p className="text-md md:text-lg mb-6">
            Desarrollador Full Stack apasionado por la creación de soluciones innovadoras y la resolución de problemas desafiantes. Con 3 años de experiencia en el desarrollo de aplicaciones web y móviles, además estudiante de 3er semestre de Ingeniería de Software, me especializo en la creación de interfaces de usuario dinámicas con React y Next.js, y en el desarrollo de soluciones robustas del lado del servidor con Node.js y NestJS.
          </p>
          
          <p className="text-md md:text-lg mb-6">
            Disfruto de resolver problemas desafiantes, comprometido al mismo tiempo con el aprendizaje continuo y la creación de soluciones innovadoras, colaborando con otros desarrolladores para crear productos que mejoren la experiencia del usuario y la eficiencia del sistema.
          </p>
        </div>
      </div>

      <div className="inline-flex flex-wrap items-center gap-y-3 gap-x-3 md:gap-x-4 group">
        {
          skills.map(({ icon, text }, index) => (
            <span
              key={ index }
              className="flex items-center text-sm md:text-[16px] md:font-bold cursor-pointer rounded-full border border-gray-900/5 bg-gray-400/80 py-1 px-2 md:py-3 md:px-4 text-[#23232A] transition-colors hover:border-gray-300 hover:bg-gray-400 hover:!opacity-100 group-hover:opacity-70"
            >
              <Image
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-1 md:mr-3"
                src={ icon }
                alt="Picture of the author"
              />
              { text }
            </span>
          ))
        }
      </div>
    </div>
  );
}

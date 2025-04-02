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
    <div className="p-8 text-white mx-auto mt-40 2xl:mt-60" id="about">
      <h2 className="text-gray-500 text-xl font-semibold">Acerca de mis habilidades, herramientas y conocimientos.</h2>
      <h2 className="font-bold text-4xl mb-15">ABOUT</h2>

      <div className="flex items-center gap-10 mb-15">
        <Image
          className="w-80 h-80 rounded-full mr-4"
          src={ aboutImage }
          alt="Picture of the author"
        />
        
        <div>
          <h2 className="text-3xl font-bold">John Gil</h2>
          <p className="text-md text-gray-400 mb-8">Software Developer</p>
          
          <p className="text-lg mb-6">
            Desarrollador Full Stack apasionado por la creación de soluciones innovadoras y la resolución de problemas desafiantes. Con 3 años de experiencia en el desarrollo de aplicaciones web y móviles, además estudiante de 3er semestre de Ingeniería de Software, me especializo en la creación de interfaces de usuario dinámicas con React y Next.js, y en el desarrollo de soluciones robustas del lado del servidor con Node.js y NestJS.
          </p>
          
          <p className="text-lg mb-6">
            Disfruto de resolver problemas desafiantes, comprometido al mismo tiempo con el aprendizaje continuo y la creación de soluciones innovadoras, colaborando con otros desarrolladores para crear productos que mejoren la experiencia del usuario y la eficiencia del sistema.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-8 gap-y-4">
        {
          skills.map(({ icon, text }, index) => (
            <div key={ index } className="bg-gray-400 text-[#23232A] border-2 border-dashed border-white py-2 px-10 rounded-full flex items-center font-bold">
              <Image
                className="w-[25px] h-[25px] mr-4"
                src={ icon }
                alt="Picture of the author"
              />
              { text }
            </div>
          ))
        }
      </div>
    </div>
  );
}

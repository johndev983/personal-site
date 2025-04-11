'use client'

import Image from 'next/image'
import aboutImage from '../assets/about.jpeg'
import { Skills } from './Skills'

export const About = () => {
  return (
    <div className="p-4 text-white mx-auto mt-40 2xl:mt-60" id="about">
      <h2 className="text-gray-500 text-lg md:text-xl font-semibold">Acerca de mis habilidades, herramientas y conocimientos.</h2>
      <h2 className="font-bold text-3xl md:text-4xl mb-15">ABOUT</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-4 md:mb-12">
          <Image
            className="w-80 h-80 rounded-full mr-4"
            src={ aboutImage }
            alt="Picture of the author"
          />
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">John Gil</h2>
          <p className="text-sm md:text-md text-gray-400 mb-8">Software Developer</p>
          
          <p className="text-base md:text-lg mb-6">
            Desarrollador Full Stack apasionado por la creación de soluciones innovadoras y la resolución de problemas desafiantes. Con 3 años de experiencia en el desarrollo de aplicaciones web y móviles, además estudiante de 3er semestre de Ingeniería de Software, me especializo en la creación de interfaces de usuario dinámicas con React y Next.js, y en el desarrollo de soluciones robustas del lado del servidor con Node.js y NestJS.
          </p>
          
          <p className="text-base md:text-lg mb-6">
            Disfruto de resolver problemas desafiantes, comprometido al mismo tiempo con el aprendizaje continuo y la creación de soluciones innovadoras, colaborando con otros desarrolladores para crear productos que mejoren la experiencia del usuario y la eficiencia del sistema.
          </p>
        </div>
      </div>

      <Skills />
    </div>
  );
}

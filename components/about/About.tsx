'use client'

import Image from 'next/image'
import { Skills } from './Skills'
import { IoPersonOutline, IoSchoolOutline } from 'react-icons/io5'

import aboutImage from '../../assets/about.jpeg'
import { InfoCard } from './InfoCard'

export const About = () => {
  return (
    <div className="xl:mt-20 2xl:mt-40" id="about">
      <div className="p-4 mx-auto mt-40 2xl:mt-40">
        <h2 className="font-bold text-xl md:text-4xl">Sobre mí</h2>
        <h2 className="text-gray-400 text-sm md:text-lg font-semibold mb-8 md:mb-12">Acerca de mis habilidades, herramientas y conocimientos.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InfoCard
            icon={<IoPersonOutline size={16} className="text-primary" />}
            title="Perfil"
            text={
              <>
                <p className="text-text text-sm md:text-base leading-relaxed">
                  Desarrollador Full Stack apasionado por la creación de soluciones innovadoras y la resolución de problemas desafiantes. Me especializo en el desarrollo de interfaces de usuario dinámicas con React y Next.js, y en la implementación de soluciones robustas del lado del servidor con Node.js y NestJS
                </p>
                <p className="text-text text-sm md:text-base leading-relaxed">
                  Disfruto enfrentar retos técnicos, aprender nuevas tecnologías y colaborar con otros desarrolladores para crear productos que mejoren la experiencia del usuario y la eficiencia del sistema.
                </p>
              </>
            }
          />

          <InfoCard
            icon={<IoSchoolOutline size={16} className="text-primary" />}
            title="Experiencia y estudios"
            text={
              <>
                <p className="text-text text-sm md:text-base leading-relaxed">
                  Cuento con 3 años de experiencia en el desarrollo de aplicaciones web y móviles, participando en todas las etapas del ciclo de vida del software.
                </p>
                <p className="text-text text-sm md:text-base leading-relaxed">
                  Actualmente soy estudiante de 4to semestre de Ingeniería de Software, comprometido con el aprendizaje continuo y el crecimiento profesional.
                </p>
              </>
            }
          />
        </div>

        {/* <div className="flex flex-col md:flex-row items-center gap-10 mb-4 md:mb-12">
          <Image
            className="w-80 h-80 rounded-full mr-4"
            src={ aboutImage }
            alt="Picture of the author"
          />
        </div> */}
      </div>
      
      <div className="p-4 mx-auto mt-12 md:mt-28">
        <h2 className="font-bold text-xl md:text-4xl">Habilidades técnicas</h2>
        <h2 className="text-gray-400 text-sm md:text-lg font-semibold mb-8 md:mb-12">Stack principal y herramientas que utilizo a diario.</h2>

        <Skills />
      </div>
    </div>
  );
}

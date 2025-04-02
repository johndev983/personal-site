import Link from 'next/link'
import Image from 'next/image'
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'

import logoOgiImage from '../assets/logo-ogi.jpg'
import logoComuniquemonos from '../assets/logo-comuniquemonos.png'

import phpIcon from '../assets/php.png'
import javascriptIcon from '../assets/javascript.png'
import bootstarpIcon from '../assets/bootstrap.png'
import dockerIcon from '../assets/docker.png'
import reactIcon from '../assets/react.png'
import nextjsIcon from '../assets/nextjs.png'
import tailwindIcon from '../assets/tailwind-css.png'
import nestjsIcon from '../assets/nestjs.png'
import typescriptIcon from '../assets/typescript.png'


const experiences = [
  {
    company: 'Opening Gates International',
    date: 'Noviembre 2024 - Actualidad',
    description: 'Tu guía confiable para encontrar empleo en Europa desde Centro y Sur América. Nos especializamos en brindar información precisa y útil sobre los procedimientos de visado y empleo en diversos países europeos.',
    location: 'Remoto',
    logo: logoOgiImage,
    technologies: [
      {
        icon: phpIcon,
        text: 'PHP',
      },
      {
        icon: bootstarpIcon,
        text: 'Bootstrap',
      },
      {
        icon: javascriptIcon,
        text: 'Javascript',
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
    description: 'Duis qui nisi non sunt sint esse nisi veniam occaecat dolore nisi aliqua aliquip. Proident tempor ad dolor Lorem sit veniam. Nostrud reprehenderit laborum cillum do eiusmod enim. Cillum cillum adipisicing irure esse elit nulla mollit aliqua culpa.',
    location: 'Presencial',
    logo: logoComuniquemonos,
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
      }
    ]
  }
]

export const Projects = () => {
  return (
    <div className="p-4 text-white text-left mt-40 2xl:mt-60 mb-30 w-full" id="experiences">
      <h2 className="text-gray-500 text-lg md:text-xl font-semibold">Acerca de mis projectos y experiencias.</h2>
      <h2 className="font-bold text-3xl md:text-4xl mb-15">EXPERIENCES</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 min-h-auto">
        {
          experiences.map(({ company, date, description, location, logo, technologies }, index) => (
            <div key={ index } className="max-w-[720px] mx-auto">
              <div className="relative flex justify-center items-center max-w-[26rem] flex-col rounded-xl bg-[#E7E8E6] bg-clip-border shadow-lg">
                <div className="w-50 h-50 relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-full bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      className="object-cover object-center"
                      src={ logo }
                      alt={`logo ${ company }`}
                    />
                  </div>
                    
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                  
                <div className="p-6">
                  <div className="flex items-center">
                    <span className="block font-sans text-xl text-[#23232A] antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                      { company }
                    </span>
                  </div>

                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <span className="flex items-center gap-2"><IoCalendarOutline />{ date }</span>
                    <span className="mx-2">|</span>
                    <span className="flex items-center gap-2"><IoLocationOutline />{ location }</span>
                  </div>
                  
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                    { description }
                  </p>
                      
                  <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                    {
                      technologies.map(({ icon }, index) => (
                        <span
                          key={ index }
                          className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                          <Image
                            className="w-[20px] h-[20px]"
                            src={ icon }
                            alt="Picture of the author"
                          />
                        </span>
                      ))
                    }

                    <span
                      className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      +20
                    </span>
                  </div>
                </div>
                
                <div className="p-6 pt-3">
                  <Link
                    className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    href="https://oginternational.com.co/"
                    target="blank"
                  >
                    VER SITIO
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

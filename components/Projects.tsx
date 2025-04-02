import Image from 'next/image'
import logoOgiImage from '../assets/logo-ogi.jpg'
import reactIcon from '../assets/react.png'
import nextjsIcon from '../assets/nextjs.png'
import tailwindIcon from '../assets/tailwind-css.png'
import nestjsIcon from '../assets/nestjs.png'
import typescriptIcon from '../assets/typescript.png'
import Link from 'next/link'
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'

const tecnology = [
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

export const Projects = () => {
  return (
    <div className="p-8 text-white text-left mt-40 2xl:mt-60 mb-30 w-full" id="experiences">
      <h2 className="text-gray-500 text-xl font-semibold">Acerca de mis projectos y experiencias.</h2>
      <h2 className="font-bold text-4xl mb-15">EXPERIENCES</h2>

      <div className="flex justify-center items-center min-h-auto">
        <div className="max-w-[720px] mx-auto">
          <div className="relative flex justify-center items-center max-w-[26rem] flex-col rounded-xl bg-[#E7E8E6] bg-clip-border shadow-lg">
            <div className="relative w-50 h-50 mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-full bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <Image
                className="w-full h-full object-cover object-center"
                src={ logoOgiImage }
                alt="Picture of the author"
              />
                
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
              
            <div className="p-6">
              <div className="flex items-center">
                <span className="block font-sans text-xl text-[#23232A] antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  Opening Gates International
                </span>
              </div>

              <div className="flex items-center text-gray-400 text-sm mb-4">
                {/* <span>Noviembre 2024 - Actualidad</span> */}
                <span className="flex items-center gap-2"><IoCalendarOutline />Noviembre 2024</span>
                <span className="mx-2">|</span>
                <span className="flex items-center gap-2"><IoLocationOutline />Remoto</span>
              </div>
              
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                Tu guía confiable para encontrar empleo en Europa desde Centro y Sur América. Nos especializamos en brindar información precisa y útil sobre los procedimientos de visado y empleo en diversos países europeos.
              </p>
                  
              <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                {
                  tecnology.map(({ icon }, index) => (
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
      </div>
    </div>
  );
}

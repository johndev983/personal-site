'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { technologies, tools } from '@/helpers'

export const Skills = () => {
  const controlsTech = useAnimation()
  const controlsTools = useAnimation()
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const width = window.innerWidth;

    const baseDuration = 80; // referencia
    const techDuration = (width / 1920) * baseDuration // velocidad normal
    const toolsDuration = (width / 1920) * (baseDuration * 0.6) // más rápido

    controlsTech.start({
      x: ['0%', '-50%'],
      transition: {
        duration: techDuration,
        ease: 'linear',
        repeat: Infinity,
      },
    });

    controlsTools.start({
      x: ['-30%', '0%'],
      transition: {
        duration: toolsDuration,
        ease: 'linear',
        repeat: Infinity,
      },
    });

    return () => {
      controlsTech.stop()
      controlsTools.stop()
    };
  }, [ controlsTech, controlsTools ])

  return (
    <div className="p-4 mx-auto mt-12 md:mt-28 w-full">
      <h2 className="font-bold text-xl md:text-4xl">Habilidades técnicas</h2>
      <h2 className="text-gray-400 text-sm md:text-lg font-semibold mb-8 md:mb-12">Stack principal y herramientas que utilizo a diario.</h2>

      <div className="absolute left-2/2 right-2/2 w-screen -translate-x-2/2 overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex min-w-[180%] items-center gap-8 lg:gap-16"
          animate={controlsTech}
        >
          {
            [...technologies, ...technologies].map(({ icon, text }, index) => (
              <div
                key={index}
                className="flex place-items-center w-44 lg:w-56 justify-center gap-3 flex-shrink-0 select-none p-1.5 lg:p-2.5 rounded-2xl border border-border-color/60 bg-surface shadow-sm transition-colors"
              >
                <Image
                  src={icon}
                  alt={`${text} icon`}
                  className="object-contain w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                />
                <span className="text-text font-poppins font-semibold text-sm md:text-base">
                  {text}
                </span>
              </div>
            ))
          }
        </motion.div>

        <motion.div
          ref={trackRef}
          className="flex min-w-[170%] items-center gap-6 lg:gap-12 mt-4"
          animate={controlsTools}
        >
          {
            [...tools, ...tools].map(({ icon, text }, index) => (
              <div
                key={index}
                className="flex place-items-center w-40 lg:w-52 justify-center gap-3 flex-shrink-0 select-none p-1.5 lg:p-1.8 rounded-2xl border border-border-color/60 bg-surface shadow-sm transition-colors"
              >
                <Image
                  src={icon}
                  alt={`${text} icon`}
                  className="object-contain w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                />
                <span className="text-text font-poppins font-semibold text-sm md:text-base">
                  {text}
                </span>
              </div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}

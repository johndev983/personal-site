'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { skills } from '@/helpers'

export const Skills = () => {
  const controls = useAnimation()
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const width = window.innerWidth;

    const baseDuration = 80; // referencia
    const duration = (width / 1920) * baseDuration; // proporcional al ancho (1920px como base)

    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration,
        ease: 'linear',
        repeat: Infinity,
      },
    });

    return () => {
      controls.stop();
    };
  }, [ controls ])

  return (
    <div className="absolute left-2/2 right-2/2 w-screen -translate-x-2/2 overflow-hidden">
      <motion.div
        ref={trackRef}
        className="flex min-w-[200%] items-center gap-8 md:gap-16"
        animate={controls}
      >
        {
          [...skills, ...skills].map(({ icon, text }, index) => (
            <div
              key={index}
              className="flex place-items-center w-46 md:w-54 justify-center gap-3 flex-shrink-0 select-none p-1.5 md:p-3 rounded-2xl border border-border-color/60 bg-surface shadow-sm transition-colors"
            >
              <Image
                src={icon}
                alt={`${text} icon`}
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-text font-poppins font-semibold text-sm md:text-base">
                {text}
              </span>
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}
